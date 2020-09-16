module.exports = {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/theme/index.scss'
  ],
  plugins: [
    '@/plugins/globals',
    { src: '@/plugins/socket', ssr: false }
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    'nuxt-material-design-icons'
  ],
  serverMiddleware: {
    '/server': '~/server'
  },
  build: {
  }
}
