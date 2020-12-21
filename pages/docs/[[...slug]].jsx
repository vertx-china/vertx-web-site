import Docs from "../../components/layouts/Docs"
import DocsIndex from "../../components/layouts/DocsIndex"
import VersionContext from "../../components/contexts/VersionContext"
import { metadata } from "../../docs/metadata/all"
import parse5 from "parse5"
import { useContext, useEffect } from "react"
import { fetchGitHubStarsByUrl } from "../../components/lib/github-stars"

const extractedDocsPath = "docs/extracted"
// const hashesPath = "docs/hashes"

let asciidoctor
let cache = {}

async function readDirRecursive(dir, fs, path, result = []) {
  let files = await fs.readdir(dir)
  for (let f of files) {
    let absolute = path.join(dir, f)
    if ((await fs.stat(absolute)).isDirectory()) {
      if (f !== "apidocs" && f !== "jsdoc" && f !== "kdoc" && f !== "scaladocs") {
        await readDirRecursive(absolute, fs, path, result)
      }
    } else {
      if (f === "index.adoc") {
        result.push(absolute)
      }
    }
  }
  return result
}

export async function getStaticPaths() {
  const fs = require("fs").promises
  const path = require("path")
  const { slash } = require("../../components/lib/path-utils")

  let paths = []

  // catch versions
  for (let m of metadata) {
    paths.push({
      params: {
        slug: [m.version]
      }
    })
  }

  // check if documentation source files exist
  try {
    await fs.access(extractedDocsPath)
  } catch (e) {
    console.warn(
      "\n\n**********************************************************\n" +
          "WARNING: AsciiDoc source files of documentation not found.\n" +
          "Please run `npm run update-docs'\n" +
          "**********************************************************\n")
    return {
      paths: [],
      fallback: false
    }
  }

  let files = await readDirRecursive(extractedDocsPath, fs, path)
  for (let f of files) {
    let m = slash(f).match(new RegExp(`${extractedDocsPath}/(.+)index.adoc`))
    if (m) {
      let slug = m[1].split("/").slice(0, -1)
      if (slug.length > 1) { // don't include index.adoc in parent directory
        paths.push({ params: { slug } })
      }
    }
  }

  // add index page
  paths.push({ params: { slug: [] } })

  return {
    paths,
    fallback: false
  }
}

async function compileAsciiDoc(filename) {
  const cacache = require("cacache")
  const fs1 = require("fs")
  const fs = require("fs").promises
  // const path = require("path")
  const crypto = require("crypto")

  const cachePath = "./.cache/docs"

  const asciidoctorOptions = {
    safe: "unsafe",
    attributes: {
      "source-highlighter": "highlightjs-ext",
      "showtitle": true,
      "toc": "left",
      "sectanchors": true
    }
  }

  let translationDocPath = filename.replace("extracted", "translation")
  if (fs1.existsSync(translationDocPath)) {
    filename = translationDocPath
  }

  // load checksum for this version
  // let shaFile = path.join(hashesPath, `${version || "latest"}.sha`)
  // let sha
  // try {
  //   sha = await fs.readFile(shaFile, "utf-8")
  // } catch (e) {
  //   console.error(
  //     "\n\n**********************************************************\n" +
  //         "ERROR: Could not read documentation checksum file.\n" +
  //         "Please run `npm run update-docs'\n" +
  //         "**********************************************************\n")
  //   throw e
  // }

  //读取一个Buffer
  const buffer = await fs.readFile(filename)
  const fsHash = crypto.createHash("sha1")

  fsHash.update(buffer)
  let sha = fsHash.digest("hex")

  let cacheKey = JSON.stringify({
    ...asciidoctorOptions,
    filename,
    sha
  })
  let info = await cacache.get.info(cachePath, cacheKey)
  if (info !== null) {
    let cachedDocument = await cacache.get(cachePath, cacheKey)
    return JSON.parse(cachedDocument.data.toString("utf-8"))
  } else {
    // load asciidoctor if necessary
    if (typeof asciidoctor === "undefined") {
      asciidoctor = require("asciidoctor")()

      // clean up any previously registered extension
      asciidoctor.Extensions.unregisterAll()

      // register highlight.js extension
      const highlightJsExt = require("asciidoctor-highlight.js")
      highlightJsExt.register(asciidoctor.Extensions)
    }

    // render page (use loadFile so `include` directives work correctly)
    let doc = asciidoctor.loadFile(filename, asciidoctorOptions)
    let title = doc.getDocumentTitle()
    let contents = doc.convert()

    let result = {
      title,
      contents
    }

    await cacache.put(cachePath, cacheKey, JSON.stringify(result))

    return result
  }
}

export async function getStaticProps({ params }) {
  const path = require("path")

  // handle index page
  if (!params.slug) {
    return {
      props: {}
    }
  }

  // get version
  let version
  if (metadata.some(m => m.version === params.slug[0])) {
    version = params.slug[0]
  }

  // handle version index
  if (version !== undefined && params.slug.length <= 1) {
    return {
      props: {
        version: params.slug[0]
      }
    }
  }

  // check if generated asciidoc file is in cache
  let slug = params.slug.join("/")
  if (cache[slug]) {
    return cache[slug]
  }

  let { title, contents } = await compileAsciiDoc(
      path.join(extractedDocsPath, slug, "index.adoc"), version)

  // parse generated HTML and extract table of contents
  let documentFragment = parse5.parseFragment(contents, { sourceCodeLocationInfo: true })
  let toc = undefined
  for (let child of documentFragment.childNodes) {
    if (child.tagName === "div") {
      for (let attr of child.attrs) {
        if (attr.name === "id" && attr.value === "toc") {
          toc = contents.substring(child.sourceCodeLocation.startOffset,
              child.sourceCodeLocation.endOffset)
          contents = contents.substring(0, child.sourceCodeLocation.startOffset) +
              contents.substring(child.sourceCodeLocation.endOffset)
          break
        }
      }
    }
    if (typeof toc !== "undefined") {
      break
    }
  }

  toc = toc || ""

  // get metadata for this page
  let versionMetadata = getMetadataByVersion(version)
  let pageMetadata = findMetadataEntryBySlug(versionMetadata.metadata, slug)
  let fallbackGitHubStars = null
  if (pageMetadata !== undefined) {
    fallbackGitHubStars = (await fetchGitHubStarsByUrl(pageMetadata.repository)) || null
  }

  cache[slug] = {
    props: {
      slug,
      title,
      fallbackGitHubStars,
      toc,
      contents,
      ...(version && { version })
    }
  }

  return cache[slug]
}

function findMetadataEntryBySlug(metadata, slug) {
  let slugWithSlash = slug
  if (!slug.endsWith("/")) {
    slugWithSlash += "/"
  }
  return metadata.entries.find(e => {
    let href = e.href
    if (href.startsWith("/")) {
      href = href.substring(1)
    }
    return slugWithSlash.endsWith(href)
  })
}

function getMetadataByVersion(version) {
  if (version !== undefined) {
    return metadata.find(m => m.version === version)
  }
  return metadata[metadata.length - 1]
}

const DocsPage = ({ slug, title, fallbackGitHubStars, toc, contents, version }) => {
  const setVersion = useContext(VersionContext.Dispatch)

  useEffect(() => {
    setVersion({ version })
  }, [setVersion, version])

  let m = getMetadataByVersion(version)
  if (contents === undefined) {
    return <DocsIndex metadata={m} version={version} />
  } else {
    // get metadata
    let sm = findMetadataEntryBySlug(m.metadata, slug)
    if (sm === undefined) {
      sm = { name: title }
    }

    // get all versions containing docs for this slug
    let allVersions = metadata
      .filter(am => findMetadataEntryBySlug(am.metadata, slug) !== undefined)
      .map(am => am.version)

    return <Docs metadata={sm} allVersions={allVersions}
      fallbackGitHubStars={fallbackGitHubStars} toc={toc} contents={contents} />
  }
}

export default DocsPage
