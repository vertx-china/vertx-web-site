import Link from "next/link"
import BlogDate from "./BlogDate"
import ReadMoreLink from "../ReadMoreLink"
import Label from "../Label"
import classNames from "classnames"
import "./BlogEntry.scss"

const BlogEntry = ({ post }) => {
  let authors = post.meta.authors.map(a => {
    let img = <img src={`https://github.com/${a.github_id}.png?size=50`} />
    let name = a.name
    let avatarsOnly = post.meta.authors.length > 2
    if (avatarsOnly) {
      name = img
      img = undefined
    }
    let link = <a href={`https://github.com/${a.github_id}`}
        target="_blank" rel="noopener noreferrer">{name}</a>
    return <li key={a.github_id} className={classNames({ "avatars-only": avatarsOnly })}>{img}{link}</li>
  })

  return (
    <div className="blog-entry">
      <div className="blog-entry-meta">
        <div className="blog-entry-meta-left">
          {post.meta.pinned || <span className="blog-entry-date"><BlogDate date={post.date} /></span>}&#8203;
          <Link href="/blog/[[...slug]]" as={`/blog/category/${post.meta.category}/`}>
            <a className="blog-entry-category">{post.meta.category}</a>
          </Link>
        </div>
        <div className="blog-entry-meta-right">
          {post.meta.pinned && <Label tiny>置顶</Label>}
        </div>
      </div>
      <h3>
        <Link href="/blog/[[...slug]]" as={`/blog/${post.slug}/`}>
          <a>{post.meta.title}</a>
        </Link>
      </h3>
      <span className="blog-entry-authors"><ul>{authors}</ul></span>
      <p className="blog-entry-summary">
        {post.meta.summary || "*** PLEASE SPECIFY A MEANINGFUL SUMMARY ***"}
      </p>
      <ReadMoreLink href="/blog/[[...slug]]" as={`/blog/${post.slug}/`} />
    </div>
  )
}

export default BlogEntry
