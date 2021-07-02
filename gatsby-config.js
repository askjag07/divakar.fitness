module.exports = {
  siteMetadata: {
    siteUrl: 'https://divakar.fitness',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    },
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-preset-env')({ stage: 3 })],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        purgeCSSOptions: {
          safelist: ['0%', '100%'],
        },
      },
    },
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        allPageHeaders: [
          'X-Robots-Tag: all',
          'X-Frame-Options: SAMEORIGIN, always',
          'X-XSS-Protection: 1, mode=block, always',
          'X-Content-Type-Options: nosniff, always',
          'Referrer-Policy: no-referrer-when-downgrade, always',
          'Strict-Transport-Security: max-age=31536000, includeSubDomains, preload',
        ],
        headers: {
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
          '/*.html': ['cache-control: public, max-age=0, must-revalidate'],
          '/**/*.html': ['cache-control: public, max-age=0, must-revalidate'],
          '/page-data/**/page-data.json': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
          '/page-data/app-data.json': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
          '/static/*.(woff|woff2)$': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/static/**/**/*.(png|webp)$': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/*.(js|map|css|png)$': [
            'cache-control: public, max-age=31536000, immutable',
          ],
        },
      },
    },
    'gatsby-plugin-loadable-components-ssr',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Divakar',
        short_name: 'Divakar',
        lang: 'en',
        start_url: '/',
        background_color: '#b86bff',
        theme_color: '#b86bff',
        display: 'standalone',
        icon: './src/images/i.png',
        cache_busting_mode: 'none',
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['./icons/icon*'],
        },
      },
    },
  ],
};
