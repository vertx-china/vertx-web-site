import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
import classNames from "classnames"
import DropDown from "../DropDown"
import DropDownItem from "../DropDownItem"
import { smoothScrollTo } from "../lib/scroll-utils"
import VersionContext from "../contexts/VersionContext"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import Router from "next/router"
import Header from "../Header"
import Footer from "../Footer"
import SearchPanel from "../search/SearchPanel"
import GitHubStars from "../GitHubStars"
import Label from "../Label"
import { versions as allVersionsPossible } from "../../docs/metadata/all"
import { filterLatestBugfixVersions } from "../../docs/metadata/helpers"
import { Book, Code, Edit, List, Paperclip, X } from "react-feather"
import "./Docs.scss"

const Docs = ({ metadata, allVersions, fallbackGitHubStars, toc, contents }) => {
  const tocRef = useRef()
  const searchResultsRef = useRef()
  const contentRef = useRef()
  const sidebarRef = useRef()
  const sidebarAutoHideTimer = useRef(null)
  const [sidebarCollapse, setSidebarCollapse] = useState(false)
  const [hasSearchResults, setHasSearchResults] = useState()
  const currentVersion = useContext(VersionContext.State)
  const sortedAllVersions = allVersions.sort().reverse()
  const existsForLatestVersion = sortedAllVersions[0] === allVersionsPossible[0]

  const enableBodyScrollInternal = () => {
    enableBodyScroll(tocRef.current)
    enableBodyScroll(searchResultsRef.current)
  }

  const disableBodyScrollInternal = () => {
    // Do not disable body scroll if the window has a scrollbar (typically on
    // Windows). Otherwise, the scrollbar will disappear and the content will
    // jump to the right.
    let hasScrollbar = window.innerWidth > document.documentElement.clientWidth
    if (!hasScrollbar) {
      disableBodyScroll(searchResultsRef.current)
      disableBodyScroll(tocRef.current)
    }
  }

  const cancelSidebarAutoHideTimer = useCallback(() => {
    if (sidebarAutoHideTimer.current) {
      clearTimeout(sidebarAutoHideTimer.current)
      sidebarAutoHideTimer.current = null
    }
  }, [])

  const startSidebarAutoHideTimer = useCallback(() => {
    cancelSidebarAutoHideTimer()
    sidebarAutoHideTimer.current = setTimeout(() => {
      setSidebarCollapse(false)
      sidebarAutoHideTimer.current = null
    }, 500)
  }, [cancelSidebarAutoHideTimer])

  const onHashChangeStart = useCallback((url, initial) => {
    enableBodyScrollInternal()
    cancelSidebarAutoHideTimer()
    setSidebarCollapse(false)

    let hash = url.substring(url.indexOf("#") + 1)
    let target = document.getElementById(hash)
    if (!target) {
      return
    }

    // make it so that the search box and the element are vertically centered
    let computedStyle = window.getComputedStyle(target)
    let paddingTop = parseInt(computedStyle.paddingTop)
    let lineHeight = parseInt(computedStyle.lineHeight)
    let sidebarStyle = window.getComputedStyle(sidebarRef.current)
    let sidebarTop = parseInt(sidebarStyle.top)
    let offset = target.offsetTop - sidebarTop +
        paddingTop + (lineHeight / 2 - 20)

    smoothScrollTo(offset, initial ? 200 : 500)
  }, [cancelSidebarAutoHideTimer])

  const onHashChange = useCallback((e) => {
    onHashChangeStart(e.newURL)
  }, [onHashChangeStart])

  const onSidebarMouseEnter = useCallback(() => {
    cancelSidebarAutoHideTimer()
    disableBodyScrollInternal()
  }, [cancelSidebarAutoHideTimer])

  const onSidebarMouseLeave = useCallback(() => {
    enableBodyScrollInternal()
    startSidebarAutoHideTimer()
  }, [startSidebarAutoHideTimer])

  const onContentMouseDown = () => {
    onSidebarMouseLeave()
  }

  const onContentTouchStart = () => {
    onSidebarMouseLeave()
  }

  const onSidebarToggle = () => {
    if (sidebarCollapse) {
      enableBodyScrollInternal()
    } else {
      disableBodyScrollInternal()
    }
    cancelSidebarAutoHideTimer()
    setSidebarCollapse(!sidebarCollapse)
  }

  // replace internal links' onclick with Router.push() so we can scroll smoothly
  const replaceInternalLinks = useCallback((ref) => {
    let internalLinks = ref.current.querySelectorAll("a[href^='#']")
    for (let il of internalLinks) {
      il.onclick = (e) => {
        e.preventDefault()
        let href = window.location.href
        let hash = href.substring(href.indexOf("#"))
        if (hash !== il.getAttribute("href")) {
          Router.push(window.location.pathname + il.getAttribute("href"))
        } else {
          onHashChangeStart(href)
        }
      }
    }
  }, [onHashChangeStart])

  useEffect(() => {
    Router.events.on("hashChangeStart", onHashChangeStart)
    window.addEventListener("hashchange", onHashChange)

    let sidebar = sidebarRef.current
    sidebar.addEventListener("mouseenter", onSidebarMouseEnter)
    sidebar.addEventListener("mouseleave", onSidebarMouseLeave)

    replaceInternalLinks(tocRef)
    replaceInternalLinks(contentRef)

    // initial scroll
    onHashChangeStart(window.location.href, true)

    return () => {
      sidebar.removeEventListener("mouseenter", onSidebarMouseEnter)
      sidebar.removeEventListener("mouseleave", onSidebarMouseLeave)
      window.removeEventListener("hashchange", onHashChange)
      Router.events.off("hashChangeStart", onHashChangeStart)
      clearAllBodyScrollLocks()
    }
  }, [onHashChange, onHashChangeStart, onSidebarMouseEnter, onSidebarMouseLeave,
      replaceInternalLinks])

  let repository
  if (metadata.repository) {
    let m = metadata.repository.match(/https?:\/\/github\.com\/([^/]+)\/([^/]+)/)
    if (m) {
      let org = m[1]
      let repo = m[2]
      repository = <GitHubStars org={org} repo={repo} fallbackValue={fallbackGitHubStars} />
    } else {
      repository = <a href={metadata.repository}><Code className="feather" /> Source code</a>
    }
  }

  let examples
  if (metadata.examples) {
    examples = <a href={metadata.examples}><Paperclip className="feather" /> Examples</a>
  }
  let edit
  if (metadata.edit) {
    edit = <a href={metadata.edit}><Edit className="feather" /> 改进翻译</a>
  }

  return (
    <main className="page docs">
      <Header title={metadata.name}/>
      <div className="page-content docs-content">
        <div className="container">
          <div className="docs-content-wrapper">
            <aside className={classNames({ "docs-has-search-results": hasSearchResults, "collapse": sidebarCollapse })}>
              <div className="docs-content-wrapper-sidebar" ref={sidebarRef}>
                <SearchPanel contentRef={contentRef} onHasResults={setHasSearchResults} ref={searchResultsRef} />
                <div dangerouslySetInnerHTML={{ __html: toc }} ref={tocRef}
                    className="docs-content-toc" />
              </div>
            </aside>
            <div className={classNames("docs-content-sidebar-toggle", { "collapse": sidebarCollapse })}
                onClick={onSidebarToggle}>
              <div style={{ position: "relative" }}>
                <List className="feather-list" />
                <X className="feather-x" />
              </div>
            </div>

            <div className="docs-content-inner" onMouseDown={onContentMouseDown}
                onTouchStart={onContentTouchStart}>
              <div className="docs-content-metadata">
                <div className="docs-content-metadata-left">
                  {repository && <div className="docs-content-metadata-repo">{repository}</div>}
                  <div>
                    <a href={`https://vertx.io/docs/${currentVersion.version ? `${currentVersion.version}/` : ""}apidocs`}>
                      <Book className="feather" /> API
                    </a>
                  </div>
                  {examples && <div className="docs-content-metadata-examples">{examples}</div>}
                  {edit && <div className="docs-content-metadata-edit">{edit}</div>}
                  <span className="docs-content-metadata-version">
                    <DropDown title={`v${currentVersion.version || sortedAllVersions[0]}`} align="right">
                      {existsForLatestVersion && <DropDownItem active={currentVersion.version === undefined ||
                            currentVersion.version === sortedAllVersions[0]} href={`/docs${metadata.href}`}>
                        Latest (v{sortedAllVersions[0]})
                      </DropDownItem>}
                      {filterLatestBugfixVersions(sortedAllVersions).slice(existsForLatestVersion ? 1 : 0).map(v => (
                        <DropDownItem key={v} active={currentVersion.version === v}
                            href={`/docs/${v}${metadata.href}`}>
                          v{v}
                        </DropDownItem>
                      ))}
                    </DropDown>
                  </span>
                </div>
                {metadata.label && <div className="docs-content-metadata-label">
                  <Label small nowrap>{metadata.label}</Label>
                </div>}
              </div>
              <div dangerouslySetInnerHTML={{ __html: contents }} ref={contentRef} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Docs
