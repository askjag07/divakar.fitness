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
    `gatsby-plugin-minify-classnames`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Divakar`,
        short_name: `Divakar`,
        lang: `en`,
        start_url: `/`,
        background_color: `#b86bff`,
        theme_color: `#b86bff`,
        display: `standalone`,
        icon: `src/images/i.png`,
        cache_busting_mode: 'none',
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
