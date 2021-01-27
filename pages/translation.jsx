import Layout from "../components/layouts/Translation"
import CommunityProfile from "../components/community/CommunityProfile"
import CommunitySection from "../components/community/CommunitySection"
import pMap from "p-map"

const FULL_TIME_TRANSLATORS = [
  {
    githubId: "chengenzhao",
    role: "翻译核心",
    twitter: "whitewoodcity"
  },
  {
    githubId: "fofofofoxier",
    role: "翻译核心"
  },
  {
    githubId: "Leibnizhu",
    role: "翻译核心"
  },
  {
    githubId: "okou19900722",
    role: "技术人员"
  },
  {
    githubId: "wkgcass",
    role: "翻译核心"
  }
].sort()

// maximum number of parallel requests against the GitHub API
const MAX_CONCURRENCY = 10

async function fetchUsers(users, contributors, octokit) {
  let result = []

  let fetchResults = await pMap(users, user => {
    console.log(`Fetching information about user ${user.githubId} ...`)
    return octokit.users.getByUsername({ username: user.githubId })
      .then(info => [info.data, user])
  }, { concurrency: MAX_CONCURRENCY })

  for (let fetchResult of fetchResults) {
    let [info, user] = fetchResult

    let contributor = {}
    let i = contributors.findIndex(c => c.githubId === user.githubId)
    if (i >= 0) {
      contributor = contributors[i]
      contributors.splice(i, 1)
    }

    let blog = info.blog
    if (blog && !/^[a-z]+:\/\//.test(blog)) {
      blog = "http://" + blog
    }

    let newUser = {
      ...user,
      avatar_url: info.avatar_url,
      name: info.name,
      blog,
      location: info.location,
      twitter: info.twitter_username || user.twitter || null,
      contributions: contributor.contributions || 0
    }

    result.push(newUser)
  }

  return result
}

async function fetchContributors(octokit, users) {
  let contributors = []

  console.log("Updating list of contributors ...")

  let repos = [
    {
      name: "vertx-web-site",
      full_name: "vertx-china/vertx-web-site",
      owner: {
        login: "vertx-china"
      },
      filter: true
    },
    {
      name: "vertx-translation-chinese",
      full_name: "VertxChina/vertx-translation-chinese",
      owner: {
        login: "VertxChina"
      }
    }
  ]

  async function fetchContributor({ name, full_name, filter, owner: { login: owner } }) {
    console.log(`Fetching contributors of ${full_name} ...`)
    const repoContributors = await octokit.paginate(octokit.repos.listContributors, {
      owner: owner,
      repo: name
    })
    for (let repoContributor of repoContributors) {
      if (filter && !users[repoContributor.login]) continue
      let contributor = contributors.find(c => c.githubId === repoContributor.login)
      if (contributor === undefined) {
        contributor = {
          githubId: repoContributor.login,
          avatar_url: repoContributor.avatar_url,
          contributions: 0
        }
        contributors.push(contributor)
      }
      contributor.contributions += repoContributor.contributions
    }
  }
  for (let repo of repos) {
    await fetchContributor(repo)
  }

  console.log("Done.")

  return contributors
}
export async function getStaticProps() {
  const CACHE_TIMEOUT_SECONDS = 60 * 60 // one hour
  const CACHE_PATH = "./.cache/community"

  const { Octokit } = require("@octokit/rest")
  const { CachedFetch } = require("../components/lib/cached-fetch")

  const fetch = CachedFetch({
    cacheTimeoutSeconds: CACHE_TIMEOUT_SECONDS,
    cachePath: CACHE_PATH
  })

  const octokit = new Octokit({
    auth: process.env.CONTRIBUTE_FETCH_TOKEN,
    request: {
      fetch
    }
  })

  let fullTimeDevelopers = null
  let contributors = null
  if (process.env.CONTRIBUTE_FETCH_TOKEN === undefined) {
    console.log("No GitHub access token found. Generating list of contributors " +
        "will be skipped. To fix this, provide an environment variable " +
        "`CONTRIBUTE_FETCH_TOKEN` with your personal access token. For example: " +
        "`CONTRIBUTE_FETCH_TOKEN=abcdefghijklmnopqrs0123456789 npm run build`")
  } else {

    const pulls = await octokit.pulls.list({
      repo: "vertx-web-site",
      owner:"vertx-china",
      state: "all"
    })
    const users = {}
    for (let pull of pulls.data) {
      if (pull.merged_at === null) {
        continue
      }
      users[pull.user.login] = pull.user
    }

    // fetch contributors
    contributors = await fetchContributors(octokit, users)

    // fetch information about full-time developers and maintainers
    fullTimeDevelopers = await fetchUsers(FULL_TIME_TRANSLATORS, contributors, octokit)
    // maintainers = await fetchUsers(MAINTAINERS, contributors, octokit)

    // sort users by their number of contributions
    fullTimeDevelopers.sort((a, b) => b.contributions - a.contributions)
    // maintainers.sort((a, b) => b.contributions - a.contributions)
    contributors.sort((a, b) => b.contributions - a.contributions)
  }

  return {
    props: {
      fullTimeDevelopers,
      contributors
    }
  }
}

const Translation = ({ fullTimeDevelopers, contributors }) => {
  return (
      <Layout>
        {fullTimeDevelopers !== null && (
            <CommunitySection title="发起者">
              {fullTimeDevelopers.map(c => <CommunityProfile key={c.githubId} profile={c} size="large" />)}
            </CommunitySection>
        )}
        {contributors !== null && (
            <CommunitySection title="更多参与翻译的人">
              {contributors.map(c => <CommunityProfile key={c.githubId} profile={c} />)}
            </CommunitySection>
        )}
      </Layout>
  )
}

export default Translation
