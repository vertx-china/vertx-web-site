import DropDown from "../DropDown"
import DropDownItem from "../DropDownItem"
import Layout from "./Page"
import ReadMoreLink from "../ReadMoreLink"
import ScrollLink from "../ScrollLink"
import Label from "../Label"
import { versions as docsVersions } from "../../docs/metadata/all"
import { filterLatestBugfixVersions } from "../../docs/metadata/helpers"
import Link from "next/link"
import { Book, ExternalLink } from "react-feather"
import "./DocsIndex.scss"

const Section = ({ icon, children, id, name }) => {
  let numChildren = 1
  if (Array.isArray(children)) {
    numChildren = Math.min(2, children.length)
  }

  let book = undefined
  if (id === "core") {
    let url = "https://www.manning.com/books/vertx-in-action"
    book = (
      <div className="docs-index-section-book">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/book-cover-medium.jpg")} width="230" />
        </a><br />
        <a href={url} target="_blank" rel="noopener noreferrer">
          Get the book ... <ExternalLink className="external-link-icon" size="1em" />
        </a>
      </div>
    )
  }

  return (
    <section className="docs-index-section" id={id}>
      <div className="docs-index-section-wrapper">
        <div className="docs-index-section-header">
          <h3>{icon} {name}</h3>
        </div>
        <div className={`docs-index-section-content docs-index-section-content-${numChildren}`}>
          {children}
        </div>
      </div>
      {book}
    </section>
  )
}

const SectionPart = ({ title, label, href, children }) => {
  return (
    <div className="docs-index-section-part">
      <h3>
        <Link href={href}>
          <a>{title}</a>
        </Link>
        {label && <div className="docs-index-section-part-label">
          <Label small nowrap>{label}</Label>
        </div>}
      </h3>

      <p className="docs-index-section-content-summary">{children}</p>

      <ReadMoreLink href={href}>
        <a>详情</a>
      </ReadMoreLink>
    </div>
  )
}

const Docs = ({ metadata, version }) => {
  let versionPath = ""
  if (version !== undefined) {
    versionPath = `/${version}`
  }

  return (
    <Layout meta={{ title: "文档" }}>
      <div className="docs-index-main">
        <aside>
          <div className="docs-index-aside-main">
            <h2>文档资料</h2>
            <div className="docs-index-aside-content">
              <div className="docs-index-toc">
                <ul>
                  {metadata.metadata.categories.map(c => (
                    <li key={c.id}>
                      <ScrollLink href={`#${c.id}`}>{c.name}</ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        <div className="docs-index-content">
          <h2>
            <span className="docs-index-content-heading">Documentation</span>

            <div className="docs-index-content-heading-right">
              <span className="docs-index-api">
                <a href={`https://vertx.io/docs/${version ? `${version}/` : ""}apidocs`}>
                  <Book className="feather" />API
                </a>
              </span>

              <span className="docs-index-content-version">
                <DropDown title={`v${version || docsVersions[0]}`} align="right">
                  <DropDownItem active={version === undefined ||
                        version === docsVersions[0]} href="/docs/">
                    Latest (v{docsVersions[0]})
                  </DropDownItem>
                  {filterLatestBugfixVersions(docsVersions).slice(1).map(v => (
                    <DropDownItem key={v} active={version === v}
                        href={`/docs/${v}/`}>
                      v{v}
                    </DropDownItem>
                  ))}
                </DropDown>
              </span>
            </div>
          </h2>

          {metadata.metadata.categories.map(category => (
            <Section key={category.id} icon={category.icon} id={category.id} name={category.name}>
              {metadata.metadata.entries.filter(e => e.category === category.id).map(entry => (
                <SectionPart key={entry.id} title={entry.name} label={entry.label}
                    href={`/docs${versionPath}${entry.href}`}>
                  {entry.description}
                </SectionPart>
              ))}
            </Section>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Docs
