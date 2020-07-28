module.exports = {
  // https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.ts',
    ],
  },
}
