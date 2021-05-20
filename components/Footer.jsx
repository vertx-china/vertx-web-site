import VersionContext from "./contexts/VersionContext"
import classNames from "classnames"
import "./Footer.scss"
import Link from "next/link"
import { useContext, useRef, useState } from "react"

const Footer = () => {
  const listRef = [useRef(), useRef(), useRef()]
  const listMaxHeight = [useState(undefined), useState(undefined), useState(undefined)]
  const listVisible = [useState(false), useState(false), useState(false)]
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
              <li><Link href="/blog/"><a>博客</a></Link></li>
              <li><Link href="/community/"><a>社区</a></Link></li>
              <li><Link href="/translation/"><a>翻译团队</a></Link></li>
              <li><a href="https://github.com/eclipse-vertx/vert.x">GitHub</a></li>
              <li><a href="https://github.com/vertx-china/vertx-web-site">翻译GitHub</a></li>
            </ul>
          </div>
          <div className="footer-nav-list">
            <h5 onClick={() => onClick(1)}>资源</h5>
            <ul ref={listRef[1]} style={{ maxHeight: listMaxHeight[1][0] }}
                className={classNames({ visible: listVisible[1][0] })}>
              <li><Link href="/faq/"><a>答疑</a></Link></li>
              <li><Link href="/channels/"><a>联系渠道</a></Link></li>
              <li><a href="https://how-to.vertx.io/">操作指南</a></li>
              <li><a href="https://start.vertx.io/">应用生成器</a></li>
            </ul>
          </div>
          <div className="footer-nav-list">
            <h5 onClick={() => onClick(2)}>Eclipse</h5>
            <ul ref={listRef[2]} style={{ maxHeight: listMaxHeight[2][0] }}
                className={classNames({ visible: listVisible[2][0] })}>
              <li><a href="https://www.eclipse.org/">Eclipse 基金会</a></li>
              <li><a href="https://www.eclipse.org/legal/privacy.php">隐私政策</a></li>
              <li><a href="https://www.eclipse.org/legal/termsofuse.php">使用条款</a></li>
              <li><a href="https://www.eclipse.org/legal/copyright.php">版权代理</a></li>
              <li><a href="https://www.eclipse.org/legal/">法律资源</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-remarks">
            &copy; {new Date().getFullYear()} Eclipse Vert.x<br/>
            Eclipse Vert.x 是开源的，并在
            <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">Eclipse Public License 2.0</a>和
            <a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank" rel="noopener noreferrer">Apache License 2.0</a>协议下获得了双重许可。<br className="footer-copyright-break"/>
            网站由 <a href="https://michelkraemer.com" target="_blank" rel="noopener noreferrer">Michel Krämer</a> 设计。
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
