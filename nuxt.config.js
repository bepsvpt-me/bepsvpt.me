export default {
  mode: 'universal',

  // https://nuxtjs.org/api/configuration-global-name
  globalName: 'bepsvpt',

  // https://nuxtjs.org/api/configuration-build
  build: {
    // https://nuxtjs.org/api/configuration-build#csssourcemap
    cssSourceMap: true,

    // https://nuxtjs.org/api/configuration-build#devtools
    devtools: true,

    // https://nuxtjs.org/api/configuration-build#extractcss
    extractCSS: true,

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },

    // https://nuxtjs.org/api/configuration-build#publicpath
    publicPath: '/assets/',

    // https://nuxtjs.org/api/configuration-build#extend
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    }
  },

  // https://nuxtjs.org/api/configuration-vue-config
  vue: {
    config: {
      devtools: true
    }
  },

  // https://nuxtjs.org/api/configuration-head
  head: {
    title: 'bepsvpt',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'bepsvpt welcome site'
      }
    ]
  },

  // https://nuxtjs.org/api/configuration-modules#-code-buildmodules-code-
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    // https://github.com/robcresswell/nuxt-compress
    'nuxt-compress'
  ],

  tailwindcss: {
    purgeCSSInDev: true
  },

  purgeCSS: {
    whitelist: ['__bepsvpt', '__layout']
  },

  'nuxt-compress': {
    gzip: {
      minRatio: 1,
      test: /.*(?<!.br)$/
    },
    brotli: {
      minRatio: 1,
      test: /.*(?<!.gz)$/
    }
  }
}
