import Header from "../Header"
import CommunityHero from "../community/CommunityHero"
import Footer from "../Footer"
import "./Community.scss"

const Layout = ({ children }) => (
  <main>
    <Header title="社区"/>
    <CommunityHero />
    <div className="container community">
      <div className="community-love">Eclipse Vert.x is made with ❤️ by the following people</div>
      {children}
    </div>
    <Footer />
  </main>
)

export default Layout
