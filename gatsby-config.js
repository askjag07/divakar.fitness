module.exports = {
  siteMetadata: {
    siteUrl: "https://divakar.fitness",
  },
  plugins: [
    "gatsby-plugin-perf-budgets",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    },
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("autoprefixer")()],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
      },
    },
    "gatsby-plugin-minify-classnames",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "tracedSVG",
          tracedSVGOptions: {
            color: "#00b3ff",
          },
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-csp",
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        headers: {
          "/sw.js": ["cache-control: public, no-cache"],
          "/index.html": ["cache-control: public, no-cache"],
          "/404.html": ["cache-control: public, no-cache"],
          "/*/index.html": ["cache-control: public, no-cache"],
          "/page-data/app-data.json": ["cache-control: public, no-cache"],
          "/page-data/*/page-data.json": ["cache-control: public, no-cache"],
          "/static/*.woff": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/big-shoulders-stencil-display-latin-900-normal.woff2": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/big-shoulders-stencil-display-latin-900-normal.woff": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/static/*/*/*.webp": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/static/*/*/*.png": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/*.png": ["cache-control: public, max-age=31536000, immutable"],
        },
        allPageHeaders: [
          "Referrer-Policy: no-referrer-when-downgrade, always",
          "Strict-Transport-Security: max-age=31536000, includeSubDomains, preload",
          "X-Content-Type-Options: nosniff, always",
          "X-Frame-Options: SAMEORIGIN, always",
          "X-Robots-Tag: all",
          "X-XSS-Protection: 1, mode=block, always",
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Divakar",
        short_name: "Divakar",
        lang: "en",
        start_url: "/",
        background_color: "#b86bff",
        theme_color: "#b86bff",
        display: "standalone",
        icon: "./static/i.png",
        cache_busting_mode: "none",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["./icons/icon*"],
        },
      },
    },
  ],
};
