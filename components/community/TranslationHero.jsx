import "./CommunityHero.scss"

const TranslationHero = () => (
  <section className="community-hero">
    <div className="community-hero-background" />
    <div className="community-hero-main container">
      <div className="community-hero-left">
        <div className="community-hero-slogan">
          <strong>感谢所有为翻译做出贡献的人。</strong>
        </div>
      </div>
      <div className="community-hero-right">
        <svg width="260" height="260" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
          <rect className="r22" x="0"      y="0" />
          <rect className="r38" x="46.25"  y="0" />
          <rect className="r59" x="92.5"   y="0" />
          <rect                 x="138.75" y="0" />
          <rect                 x="185"    y="0" />

          <rect className="r14" x="0"      y="46.25" />
          <rect className="r31" x="46.25"  y="46.25" />
          <rect className="r38" x="92.5"   y="46.25" />
          <rect className="r77" x="138.75" y="46.25" />
          <rect className="r77" x="185"    y="46.25" />

          <rect className="r14" x="46.25"  y="92.5" />
          <rect className="r38" x="92.5"   y="92.5" />
          <rect className="r59" x="138.75" y="92.5" />
          <rect className="r77" x="185"    y="92.5" />

          <rect className="r22" x="92.5"   y="138.75" />
          <rect className="r22" x="138.75" y="138.75" />
          <rect className="r38" x="185"    y="138.75" />

          <rect className="r14" x="138.75" y="185" />
          <rect className="r31" x="185"    y="185" />
        </svg>
      </div>
    </div>
  </section>
)

export default TranslationHero
