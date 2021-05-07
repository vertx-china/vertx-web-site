let flag = true
export async function fetchGitHubStars(org, repo) {
  if (flag || process.env.GITHUB_ACCESS_TOKEN === undefined) {
    // do nothing
    return 0
  }

  const CACHE_TIMEOUT_SECONDS = 60 * 60 // one hour
  const CACHE_PATH = "./.cache/github_stars"

  const { Octokit } = require("@octokit/rest")
  const { CachedFetch } = require("./cached-fetch")

  const fetch = CachedFetch({
    cacheTimeoutSeconds: CACHE_TIMEOUT_SECONDS,
    cachePath: CACHE_PATH
  })

  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
    request: {
      fetch
    }
  })

  let repoInfo = await octokit.repos.get({ owner: org, repo })
  return repoInfo.data.stargazers_count
}

export async function fetchGitHubStarsByUrl(url) {
  let m = url.match(/https?:\/\/github\.com\/([^/]+)\/([^/]+)/)
  if (m) {
    let org = m[1]
    let repo = m[2]
    return fetchGitHubStars(org, repo)
  }
  return undefined
}
