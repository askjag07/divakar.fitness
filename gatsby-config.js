module.exports = {
  siteMetadata: {
    title: `Divakar | Gym Trainer`,
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
        name: `Divakar | Gym Trainer`,
        short_name: `Divakar`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
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
