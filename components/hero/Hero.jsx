import Button from "../Button"
import MainCodeExamples from "./MainCodeExamples"
import "./Hero.scss"
import GitHubStars from "../GitHubStars"
import { ArrowUpCircle, FastForward } from "react-feather"
import Link from "next/link"
import { versions } from "../../docs/metadata/all"

const Hero = ({ gitHubStarsFallbackValue }) => (
  <section className="hero">
    <div className="hero-background" />
    <div className="hero-main container">
      <div className="hero-left">
        <div className="hero-slogan">
          <span className="hero-product-name">Eclipse Vert.x<span className="hero-product-name-separator"> |</span></span> JVM上的响应式应用
        </div>
        <div className="hero-buttons">
          <Link href="/get-started/">
            <a><Button primary><FastForward className="feather" /> 从 v{versions[0]} 开始</Button></a>
          </Link>
          <GitHubStars org="eclipse-vertx" repo="vert.x" button fallbackValue={gitHubStarsFallbackValue} />
        </div>
        <div className="hero-buttons hero-buttons-second">
          <Link href="/blog/from-vert-x-3-to-vert-x-4/">
            <a><Button primary><ArrowUpCircle className="feather" /> 从 Vert.x 3迁移</Button></a>
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <MainCodeExamples />
      </div>
    </div>
  </section>
)

export default Hero
