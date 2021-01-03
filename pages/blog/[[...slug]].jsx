import Blog from "../../components/layouts/Blog"
import BlogPost from "../../components/layouts/BlogPost"
import BlogDate from "../../components/blog/BlogDate"
import BlogEntry from "../../components/blog/BlogEntry"
import Pagination from "../../components/blog/Pagination"
import Alert from "../../components/Alert"
import Card from "../../components/Card"
import Cards from "../../components/Cards"
import Gist from "super-react-gist"
import Link from "next/link"
import Label from "../../components/Label"
import ScrollLink from "../../components/ScrollLink"
import capitalize from "lodash/capitalize"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"

import { Clock } from "react-feather"
import { Facebook, Linkedin, Twitter } from "@icons-pack/react-simple-icons"

const MAX_ITEMS_PER_PAGE = 6

// components that will be available in mdx files
const COMPONENTS = {
  Alert,
  Card,
  Cards,
  Gist,
  Link,
  ScrollLink
}

let compileAllPostsCachedResult

async function compileAllPosts() {
  if (compileAllPostsCachedResult !== undefined) {
    return compileAllPostsCachedResult
  }

  const cacache = require("cacache")
  const crypto = require("crypto")
  const fs = require("fs").promises
  const path = require("path")
  const readdir = require("recursive-readdir")
  const readingTime = require("reading-time")
  const mdxOptions = require("../../components/lib/mdx-options")
  const AutoBasePath = require("../../components/lib/remark-auto-basepath")
  const TermFrequency = require("../../components/lib/remark-term-frequency")

  const cachePath = "./.cache/blog"

  let pattern
  if (path.sep === "\\") {
    pattern = /.\\([0-9]+-[0-9]+-[0-9]+)-(.*)\.mdx/
  } else {
    pattern = /.\/([0-9]+-[0-9]+-[0-9]+)-(.*)\.mdx/
  }

  let files = (await readdir("blog")).filter(f => {
    let e = f.match(pattern)
    if (e === null) {
      return false
    }
    if (e[2].indexOf(".") >= 0) {
      throw `Invalid blog post filename: ${f}. Dots '.' are not allowed.`
    }
    return true
  })

  // read front matter
  let posts = []
  for (let f of files) {
    let source = await fs.readFile(f, "utf-8")
    let cacheKey = JSON.stringify({
      filename: f,
      basePath: process.env.basePath,
      sha: crypto.createHash("sha256").update(source).digest("hex")
    })

    let post
    let info = await cacache.get.info(cachePath, cacheKey)
    if (info !== null) {
      let cachedDocument = await cacache.get(cachePath, cacheKey)
      post = JSON.parse(cachedDocument.data.toString("utf-8"))
    } else {
      let { content, data } = matter(source)

      let e = f.match(pattern)
      let stats = readingTime(content)

      post = {
        filename: f,
        date: e[1],
        slug: e[2],
        meta: data,
        readingTime: stats
      }

      // render post
      let autoBasePath = new AutoBasePath(process.env.basePath)
      let tf = new TermFrequency()
      post.content = await renderToString(content, {
        components: COMPONENTS,
        mdxOptions: {
          ...mdxOptions,
          remarkPlugins: [
            tf.apply(),
            autoBasePath.apply(),
            ...mdxOptions.remarkPlugins
          ]
        }
      })
      post.tfIdfTerms = tf.result

      await cacache.put(cachePath, cacheKey, JSON.stringify(post))
    }

    posts.push(post)
  }

  posts.sort((a, b) => {
    // put pinned blog post at the beginning
    if (a.meta.pinned && !b.meta.pinned) {
      return -1
    } else if (!a.meta.pinned && b.meta.pinned) {
      return 1
    }
    // sort all posts by date
    return new Date(b.date) - new Date(a.date)
  })

  if (process.env.NODE_ENV === "production") {
    compileAllPostsCachedResult = posts
  }

  return posts
}

function getAllCategories(allPosts) {
  let categories = new Set()
  for (let p of allPosts) {
    if (p.meta.category !== undefined) {
      categories.add(p.meta.category)
    }
  }
  return [...categories]
}

export async function getStaticPaths() {
  let allPosts = await compileAllPosts()
  let allCategories = getAllCategories(allPosts)
  let paths = allPosts.map(p => ({ params: { slug: [p.slug] } }))

  // catch categories
  for (let c of allCategories) {
    paths.push({
      params: {
        slug: ["category", c]
      }
    })
  }

  // catch pages
  let numPages = Math.ceil(allPosts.length / MAX_ITEMS_PER_PAGE)
  for (let p = 1; p < numPages; ++p) {
    paths.push({
      params: {
        slug: ["page", `${p + 1}`]
      }
    })
  }

  // catch pages for categories
  for (let c of allCategories) {
    let categoryPosts = allPosts.filter(p => p.meta.category === c)
    let nCategoryPages = Math.ceil(categoryPosts.length / MAX_ITEMS_PER_PAGE)
    for (let p = 1; p < nCategoryPages; ++p) {
      paths.push({
        params: {
          slug: ["category", c, "page", `${p + 1}`]
        }
      })
    }
  }

  // add blog index
  paths.push({ params: { slug: [] } })

  return {
    paths,
    fallback: false
  }
}

// Only include those attributes that are really necessary for rendering
// to keep the bundle sizes small
function trimPost(post, includeDetails = false) {
  let result = {
    meta: post.meta,
    date: post.date,
    slug: post.slug
  }

  if (includeDetails) {
    result.readingTime = post.readingTime
    result.content = post.content
  }

  return result
}

function getTrimmedPostsForPage(allPosts, page, category = undefined) {
  // filter posts by category
  let posts = allPosts
  if (category !== undefined) {
    posts = posts.filter(p => p.meta.category === category)
  }

  // get current page
  let numPages = Math.ceil(posts.length / MAX_ITEMS_PER_PAGE)
  posts = posts.slice(MAX_ITEMS_PER_PAGE * (page - 1), MAX_ITEMS_PER_PAGE * page)
  posts = posts.map(p => trimPost(p))

  return {
    posts,
    numPages
  }
}

export async function getStaticProps({ params }) {
  const TfIdf = require("natural").TfIdf

  let allPosts = await compileAllPosts()
  let allCategories = getAllCategories(allPosts)

  const result = {
    categories: allCategories
  }

  // handle blog index
  if (!params.slug) {
    return {
      props: {
        ...result,
        ...getTrimmedPostsForPage(allPosts, 1)
      }
    }
  }

  let slug = params.slug[0]

  // handle page index
  if (slug === "page") {
    let page = parseInt(params.slug[1]) || 1
    return {
      props: {
        ...result,
        page,
        ...getTrimmedPostsForPage(allPosts, page)
      }
    }
  }

  // handle category index
  if (slug === "category") {
    let category = params.slug[1]

    // handle pages
    let page
    if (params.slug.length > 3 && params.slug[2] === "page") {
      page = parseInt(params.slug[3])
    }
    page = page || 1

    return {
      props: {
        ...result,
        category,
        page,
        ...getTrimmedPostsForPage(allPosts, page, category)
      }
    }
  }

  // handle blog posts
  let postIndex = allPosts.findIndex(p => p.slug === slug)
  let post = allPosts[postIndex]

  // initialize tf-idf
  let tfidf = new TfIdf()
  allPosts.forEach(p => {
    let doc = {}
    p.tfIdfTerms.forEach(t => doc[t.term] = t.tf)
    tfidf.addDocument(doc)
  })

  // calculate related posts based on tf-idf
  let relatedPosts = tfidf.tfidfs(post.tfIdfTerms.map(t => t.term))
    .map((f, i) => ({ f, date: allPosts[i].date, meta: allPosts[i].meta, slug: allPosts[i].slug }))
    .sort((a, b) => b.f - a.f) // sort by tf-idf (best matches first)
    .filter(p => p.slug !== slug) // remove current post
    .slice(0, 3) // select best three matches

  // get next post and previous post
  let prevPost = null
  let nextPost = null
  if (postIndex > 0) {
    prevPost = allPosts[postIndex - 1]
  }
  if (postIndex < allPosts.length - 1) {
    nextPost = allPosts[postIndex + 1]
  }

  return {
    props: {
      ...result,
      post: trimPost(post, true),
      prevPost: prevPost && trimPost(prevPost),
      nextPost: nextPost && trimPost(nextPost),
      relatedPosts: relatedPosts.map(rp => trimPost(rp))
    }
  }
}

const BlogPage = ({ post, prevPost, nextPost, relatedPosts, category, categories,
    page, posts, numPages }) => {
  if (post === undefined) {
    let entries = posts.map(p => <BlogEntry key={p.slug} post={p} />)

    let title = "Blog"
    if (category !== undefined) {
      title = `${capitalize(category)} | ${title}`
    }
    if (page > 1) {
      title = `Page ${page} | ${title}`
    }

    return (
      <Blog meta={{ title }} categories={categories}>
        <div className="blog-entries">
          {entries}
        </div>
        <Pagination currentPage={page} numPages={numPages} category={category} />
      </Blog>
    )
  }

  let hydratedPost = hydrate(post.content, { components: COMPONENTS })
  let url = `${process.env.baseUrl}/blog/${post.slug}`

  return (
    <BlogPost meta={{ title: `${post.meta.title} | Blog` }} categories={categories}>
      <div className="blog-post-main">
        <div className="blog-post-content">
          <h1>{post.meta.title}</h1>
          {hydratedPost}
        </div>

        <div className="blog-post-sidebar">
          {post.meta.authors.map(author => (
            <div className="blog-post-author" key={author.github_id}>
              <img className="blog-post-author-avatar"
                src={`https://github.com/${author.github_id}.png?size=160`} />
              <div className="blog-post-author-name">
                {post.meta.authors.length === 1 && "by "}<a href={`https://github.com/${author.github_id}`}
                  target="_blank" rel="noopener noreferrer">{author.name}</a>
              </div>
            </div>
          ))}
          {post.meta.pinned && <div className="blog-post-sidebar-pinned"><Label dark><strong>Pinned post</strong></Label></div>}
          {post.meta.pinned || <><div className="blog-post-sidebar-date">Posted on <BlogDate date={post.date} /></div>
          in <Link href="/blog/[[...slug]]" as={`/blog/category/${post.meta.category}/`}>
            <a className="blog-post-sidebar-category">{post.meta.category}</a>
          </Link></>}
          <div className="blog-post-sidebar-reading-time"><Clock className="feather" /> {post.readingTime.text}</div>
          <div className="blog-post-sidebar-share-icons">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.meta.title)}&url=${encodeURIComponent(url)}&via=vertx_project`}
                target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      <div className="blog-post-next-prev">
        <div className="blog-post-next-prev-entry">
          {prevPost && (<>
            <h5>Next post</h5>
            <BlogEntry post={prevPost} />
          </>)}
        </div>

        <div className="blog-post-next-prev-entry">
          {nextPost && (<>
            <h5>Previous post</h5>
            <BlogEntry post={nextPost} />
          </>)}
        </div>
      </div>

      <div className="blog-post-related">
        <h5>Related posts</h5>
        <div className="blog-post-related-posts">
          {relatedPosts.map(rp => <BlogEntry key={rp.slug} post={rp} />)}
        </div>
      </div>
    </BlogPost>
  )
}

export default BlogPage
