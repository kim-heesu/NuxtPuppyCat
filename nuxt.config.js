export default {
  head: {
    title: 'nuxtPuppyCat',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/font/NanumSquareNeo.css',
    '@/assets/css/swiper.min.css',
    '@/assets/css/layout.css',
  ],
  plugins: [
    { src: '~/plugins/lottie', mode: 'client' },
  ],
  components: true,
  buildModules: [
    // '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: '/'
  },
  build: {
  }
}
