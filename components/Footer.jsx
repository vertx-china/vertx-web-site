import VersionContext from "./contexts/VersionContext"
import classNames from "classnames"
import "./Footer.scss"
import Link from "next/link"
import { useContext, useRef, useState } from "react"

const Footer = () => {
  const listRef = [useRef(), useRef()]
  const listMaxHeight = [useState(undefined), useState(undefined)]
  const listVisible = [useState(false), useState(false)]
  const currentVersion = useContext(VersionContext.State)

  const onClick = (i) => {
    let height = 0
    for (let c of listRef[i].current.children) {
      height += c.offsetHeight
    }

    if (listVisible[i][0]) {
      listVisible[i][1](false)
      listMaxHeight[i][1](undefined)
    } else {
      listVisible[i][1](true)
      listMaxHeight[i][1](height)
    }
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-nav-section">
          <div className="footer-nav-list footer-logo">
            <Link href="/">
              <a><img src={require("../assets/logo.svg")} alt="Vert.x Logo" /></a>
            </Link>
          </div>
          <div className="footer-nav-list">
            <h5 onClick={() => onClick(0)}>Eclipse Vert.x</h5>
            <ul ref={listRef[0]} style={{ maxHeight: listMaxHeight[0][0] }}
                className={classNames({ visible: listVisible[0][0] })}>
              <li>
                {currentVersion.version ? (
                  <Link href={`/docs/${currentVersion.version}/`}>
                    <a className="navbar-menu-item">文档</a>
                  </Link>
                ) : (
                  <Link href="/docs/">
                    <a className="navbar-menu-item">文档</a>
                  </Link>
                )}
              </li>
              <li><Link href="/download/"><a>下载</a></Link></li>
              <li><Link href="/faq/"><a>答疑</a></Link></li>
              <li><Link href="/blog/"><a>博客</a></Link></li>
              <li><Link href="/community/"><a>社区</a></Link></li>
              <li><Link href="/channels/"><a>Channels</a></Link></li>
            </ul>
          </div>
          <div className="footer-nav-list">
            <h5 onClick={() => onClick(1)}>Eclipse</h5>
            <ul ref={listRef[1]} style={{ maxHeight: listMaxHeight[1][0] }}
                className={classNames({ visible: listVisible[1][0] })}>
              <li><a href="https://www.eclipse.org/">Eclipse Foundation</a></li>
              <li><a href="https://www.eclipse.org/legal/privacy.php">Privacy Policy</a></li>
              <li><a href="https://www.eclipse.org/legal/termsofuse.php">Terms of Use</a></li>
              <li><a href="https://www.eclipse.org/legal/copyright.php">Copyright Agent</a></li>
              <li><a href="https://www.eclipse.org/legal/">Legal Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-remarks">
            &copy; {new Date().getFullYear()} Eclipse Vert.x<br/>
            Eclipse Vert.x is open source and dual-licensed under
            the <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">Eclipse Public License 2.0</a> and
            the <a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank" rel="noopener noreferrer">Apache License 2.0</a>. <br className="footer-copyright-break"/>
            Website design by <a href="https://michelkraemer.com" target="_blank" rel="noopener noreferrer">Michel Krämer</a>.
          </div>
          <div className="footer-copyright-eclipse-logo">
            <a href="https://www.eclipse.org/" target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/eclipse-foundation-logo.svg")} alt="Eclipse foundation Logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
