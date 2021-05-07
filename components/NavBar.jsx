import DropDown from "./DropDown"
import DropDownItem from "./DropDownItem"
import NavBarContext from "./contexts/NavBarContext"
import VersionContext from "./contexts/VersionContext"
import classNames from "classnames"
import Link from "next/link"
import "./NavBar.scss"
import { ExternalLink } from "react-feather"
import { useContext, useEffect, useRef, useState } from "react"
import throttle from "lodash/throttle"

import { Awesomelists, Discord, Googlemessages, Stackoverflow, Tencentqq, Youtube } from "@icons-pack/react-simple-icons"

const NavBar = () => {
  const refNavBar = useRef()
  const refRight = useRef()
  const [collapse, setCollapse] = useState(false)
  const [rightMaxHeight, setRightMaxHeight] = useState(undefined)
  const setNavBarState = useContext(NavBarContext.Dispatch)
  const currentVersion = useContext(VersionContext.State)

  useEffect(() => {
    function updateHeight() {
      let height = refNavBar.current.clientHeight
      setNavBarState({ height })
    }

    updateHeight()

    let throttledUpdateheight = throttle(updateHeight, 100)
    window.addEventListener("resize", throttledUpdateheight)

    return () => {
      window.removeEventListener("resize", throttledUpdateheight)
    }
  }, [setNavBarState])

  const onClick = () => {
    let height = 0
    for (let c of refRight.current.children) {
      height += c.offsetHeight
    }

    if (collapse) {
      setCollapse(false)
      setRightMaxHeight(undefined)
    } else {
      setCollapse(true)
      setRightMaxHeight(height)
    }
  }

  return (
    <div className="navbar" ref={refNavBar}>
      <div className="navbar-content container">
        <div className="navbar-logo">
          <Link href="/">
            <a><img src={require("../assets/logo.svg")} alt="Vert.x Logo" /></a>
          </Link>
        </div>

        <div className="navbar-collapse-button" onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={classNames("navbar-right", { collapse })}
            ref={refRight} style={{ maxHeight: rightMaxHeight }}>
          <div className="navbar-menu">
            <span className="navbar-menu-item with-drop-down">
              <DropDown title="开始">
                <Link href="/introduction-to-vertx-and-reactive/">
                  <a><DropDownItem>简介</DropDownItem></a>
                </Link>
                <Link href="/get-started/">
                  <a><DropDownItem>开始</DropDownItem></a>
                </Link>
                <a href="https://start.vertx.io/" target="_blank" rel="noreferrer">
                  <DropDownItem>App generator <ExternalLink className="external-link-icon"
                    size="1em" /></DropDownItem>
                </a>
              </DropDown>
            </span>
            {currentVersion.version ? (
              <Link href={`/docs/${currentVersion.version}/`}>
                <a className="navbar-menu-item">文档</a>
              </Link>
            ) : (
              <Link href="/docs/">
                <a className="navbar-menu-item">文档</a>
              </Link>
            )}
            <span className="navbar-menu-item with-drop-down">
              <DropDown title="资源">
                <Link href="/faq/">
                  <a><DropDownItem>答疑</DropDownItem></a>
                </Link>
                <Link href="/channels/">
                  <a><DropDownItem>Channels</DropDownItem></a>
                </Link>
                <a href="https://how-to.vertx.io/" target="_blank" rel="noreferrer">
                  <DropDownItem>How-To’s <ExternalLink className="external-link-icon"
                    size="1em" /></DropDownItem>
                </a>
                <a href="https://github.com/vert-x3/vertx-eventbus-bridge-clients" target="_blank" rel="noreferrer">
                  <DropDownItem>EventBus Bridge Clients <ExternalLink className="external-link-icon"
                    size="1em" /></DropDownItem>
                </a>
              </DropDown>
            </span>
            <Link href="/blog/">
              <a className="navbar-menu-item">博客</a>
            </Link>
            <Link href="/community/">
              <a className="navbar-menu-item">社区</a>
            </Link>
            <Link href="/translation/">
              <a className="navbar-menu-item">翻译团队</a>
            </Link>
          </div>

          <div className="navbar-social">
            <a href="https://github.com/vert-x3/vertx-awesome" className="navbar-social-link" title="Awesome Vert.x" target="_blank" rel="noopener noreferrer">
              <Awesomelists aria-label="List of awesome Vert.x projects" title="Awesome Vert.x" />
            </a>
            <a href="https://stackoverflow.com/questions/tagged/vert.x" className="navbar-social-link" title="Stack Overflow" target="_blank" rel="noopener noreferrer">
              <Stackoverflow aria-label="Stack Overflow questions related to Vert.x" />
            </a>
            <a href="https://www.youtube.com/channel/UCGN6L3tRhs92Uer3c6VxOSA" className="navbar-social-link" title="YouTube" target="_blank" rel="noopener noreferrer">
              <Youtube aria-label="YouTube channel of Vert.x" />
            </a>
            <a href="https://discord.gg/KzEMwP2" className="navbar-social-link" title="Discord" target="_blank" rel="noopener noreferrer">
              <Discord aria-label="Eclipse Vert.x channel on Discord" />
            </a>
            <a href="https://groups.google.com/forum/?fromgroups#!forum/vertx" className="navbar-social-link" title="Vert.x User Group" target="_blank" rel="noopener noreferrer">
              <Googlemessages aria-label="A Google group for Vert.x users" title="Vert.x User Group" />
            </a>
            <a href="https://shang.qq.com/wpa/qunwpa?idkey=587f58cacb9557e3291b46098e0fe09427b98a1c0f866da23c04c2762bc7e2ad" className="navbar-social-link" title="Vert.x中国用户组QQ群" target="_blank" rel="noopener noreferrer">
              <Tencentqq aria-label="Vert.x中国用户组QQ群" title="Vert.x中国用户组QQ群" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
