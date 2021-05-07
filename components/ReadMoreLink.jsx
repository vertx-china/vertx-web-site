import Link from "next/link"
import "./ReadMoreLink.scss"

const ReadMoreLink = ({ href, as, children = (<a> 阅读更多</a>) }) => (
  <span className="read-more-link">
    <Link href={href} as={as}>
      {children}
    </Link>
  </span>
)

export default ReadMoreLink
