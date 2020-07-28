import { NuxtConfig } from '@nuxt/types'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-mode
  mode: 'universal',

  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-target
  target: 'static',

  // https://nuxtjs.org/api/configuration-head
  head: {
    htmlAttrs: { lang: 'en-US' },

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

  // https://nuxtjs.org/api/configuration-global-name
  globalName: 'bepsvpt',

  // https://nuxtjs.org/api/configuration-loading
  loading: false,

  // https://nuxtjs.org/api/configuration-loading-indicator
  loadingIndicator: false,

  // https://nuxtjs.org/api/configuration-modules#-code-buildmodules-code-
  buildModules: [
    // https://typescript.nuxtjs.org
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },
} as NuxtConfig
