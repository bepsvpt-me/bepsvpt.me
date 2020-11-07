import { NuxtConfig } from '@nuxt/types'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr
  ssr: true,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-target
  target: 'static',

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
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

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-components
  components: true,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-global-name
  globalName: 'bepsvpt',

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
  loading: false,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading-indicator
  loadingIndicator: false,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules#buildmodules
  buildModules: [
    // https://typescript.nuxtjs.org
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: '~/tailwind.ts',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },
} as NuxtConfig
