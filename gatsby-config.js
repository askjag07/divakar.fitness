module.exports = {
  siteMetadata: {
    siteUrl: `https://divakar.fitness`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-loadable-components-ssr`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 3 })],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeCSSOptions: {
          safelist: [`0%`, `100%`],
        },
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-minify-classnames`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://divakar.fitness`,
        sitemap: [
          `https://divakar.fitness/sitemap-0.xml`,
          `https://divakar.fitness/sitemap-index.xml`,
        ],
        policy: [{ userAgent: `*`, allow: `/` }],
        output: `/robots.txt`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Divakar`,
        short_name: `Divakar`,
        lang: `en`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#b86bff`,
        display: `standalone`,
        icon: `src/images/i.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`./icons/icon*`],
        },
      },
    },
  ],
};
