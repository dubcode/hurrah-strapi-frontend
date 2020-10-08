import axios from 'axios'
export default {
  mode: 'universal',
  globalName: 'Hurrah',
  /*
   ** Webfont Loader Config
   */
  webfontloader: {
    google: {
      families: ['Montserrat:200,400,600']
    }
  },
  /*
  ** Headers of the page
  */
 
  head: {
    title: 'Hurrah Marketing | Marketing | Design | Digital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width initial-scale=1' },
      { name: 'keywords', content: 'Hurrah Marketing, Marketing, Design, Digital' },
      { hid: 'description', name: 'description', content: 'Hurrah Marketing, Marketing, Design, Digital' },
      { hid: 'og:title', name: 'og:title', content: 'Hurrah Marketing | Marketing | Design | Digital' },
      { hid: 'og:description', name: 'og:description', content: 'Hurrah Marketing, Marketing, Design, Digital' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /** Set global variables in env */
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  /*
  ** Generate Dynamic Routes
  No need for embed param but does need per_page=100
  */
  generate: {
    routes () {
      return axios.get('http://localhost:1337/posts')
        .then((res) => {
          return res.data.map((post) => {
            return '/blog/' + post.id + '/' + post.slug
          })
        })
    }
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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'vue-scrollto/nuxt'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
