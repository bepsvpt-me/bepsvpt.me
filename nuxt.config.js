export default {
  mode: 'spa',

  modern: true,

  // https://nuxtjs.org/api/configuration-global-name
  globalName: 'bepsvpt',

  loading: false,

  loadingIndicator: false,

  render: {
    injectScripts: false,

    resourceHints: false,

    csp: true,
  },

  // https://nuxtjs.org/api/configuration-build
  build: {
    babel: {
      presets(_, [_preset, options]) {
        options.corejs = { version: 3 }
      },
    },

    // https://nuxtjs.org/api/configuration-build#publicpath
    publicPath: '/assets/',

    optimization: {
      splitChunks: {
        chunks: 'async',
      },
    },

    splitChunks: {
      commons: false,
      layouts: false,
      pages: false,
      runtime: false,
      vendor: false,
    },
  },

  // https://nuxtjs.org/api/configuration-head
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },

    title: 'bepsvpt',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'bepsvpt welcome site',
      },
    ],
  },

  // https://nuxtjs.org/api/configuration-modules#-code-buildmodules-code-
  buildModules: [
    // https://typescript.nuxtjs.org
    '@nuxt/typescript-build',

    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    // https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },

  'nuxt-compress': {
    gzip: {
      minRatio: 1,
      test: /.*(?<!.br)$/,
    },
  },
}
