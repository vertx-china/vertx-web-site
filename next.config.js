const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")
const optimizedImages = require("next-optimized-images")
const sass = require("@zeit/next-sass")
const mdxOptions = require("./components/lib/mdx-options")

const withPlugins = require("next-compose-plugins")

const isProd = process.env.NODE_ENV === "production"
const buildSite = process.env.BUILD_SITE

const mdx = require("@next/mdx")({
  options: mdxOptions
})

// configure base path based on environment variable `VERTX_WEBSITE_BASEPATH`
const basePath = (() => {
  let p = process.env.VERTX_WEBSITE_BASEPATH || ""
  if (!p.startsWith("/")) {
    p = `/${p}`
  }
  if (p.endsWith("/")) {
    p = p.substring(0, p.length - 1)
  }
  return p
})()

const config = {
  env: {
    basePath,
    // URL to the website. MUST NOT end with a slash.
    baseUrl: isProd ?  (buildSite ? `${buildSite}${basePath}` : `https://vertx-china.github.io${basePath}`) : `http://localhost:3000${basePath}`
  },

  // also render markdown pages
  pageExtensions: ["js", "jsx", "md", "mdx"],

  // create a folder for each page
  trailingSlash: true,

  // configure base path
  basePath,
  assetPrefix: basePath,

  // list pages to export
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/blog": { page: "/blog/[[...slug]]" },
      "/channels": { page: "/channels" },
      "/community": { page: "/community" },
      "/docs": { page: "/docs/[[...slug]]" },
      "/download": { page: "/download" },
      "/faq": { page: "/faq" },
      "/get-started": { page: "/get-started" },
      "/introduction-to-vertx-and-reactive": { page: "/introduction-to-vertx-and-reactive" },
      "/materials": { page: "/materials" },
      "/translation": { page: "/translation" }
    }
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: [/node_modules/, /\.next/, /out/],
        enforce: "pre",
        options: {
          emitWarning: true
        }
      })
    }

    // We can ignore the order of CSS files because we use very strict scoping.
    // There should never be any conflicts in our CSS files.
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    )

    if (!dev) {
      // run 'next-mdx-remote' through babel to make it compatible to older browsers
      let babelLoader = config.module.rules.find(r => r.use.loader === "next-babel-loader")
      let oldBabelExclude = babelLoader.exclude
      babelLoader.exclude = function(excludePath) {
        if (excludePath.indexOf("next-mdx-remote") !== -1) {
          return false
        }
        return oldBabelExclude(excludePath)
      }
    }

    return config
  }
}

module.exports = withPlugins([
  [optimizedImages],
  [sass],
  [mdx]
], config)
