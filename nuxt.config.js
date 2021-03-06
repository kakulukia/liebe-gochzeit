const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Hochzeitsgeschenk',
    htmlAttrs: {
      lang: "de",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '//static-3.versacommerce.de/winter-leaf-19_versacommerce_de/designs/myshopify-themes-drexel-11-ver1-0-7/assets/favicon.png?4732' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/touch.js'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: 'https://liebendgern.de/hochzeitsgeschenk/',
    extend(config, ctx) {

    }
  },
  router: {
    base: '/hochzeitsgeschenk/'
  }
}
