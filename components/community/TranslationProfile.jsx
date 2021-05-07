import classNames from "classnames"
import "./CommunityProfile.scss"

const TranslationProfile = ({ profile, size = "small" }) => {
  let cx = 300
  if (size === "medium") {
    cx = 220
  } else if (size === "small") {
    cx = 150
  }

  return (
    <div className={classNames("community-profile", size)}>
      <a href={`https://github.com/${profile.githubId}`} target="_blank" rel="noopener noreferrer">
        <img data-srcset={
          (`${profile.avatar_url}&s=${cx} 2x,` || `https://github.com/${profile.githubId}.png?size=${cx} 2x,`) +
          (`${profile.avatar_url}&s=${cx / 2}` || `https://github.com/${profile.githubId}.png?size=${cx / 2}`)
        } alt={profile.name || profile.githubId} title={size === "small" ? (profile.name || profile.githubId) : undefined}
        className="lazyload" />
      </a>
      {profile.name && <div className="community-profile-name">{profile.name}</div>}
    </div>
  )
}

export default TranslationProfile
