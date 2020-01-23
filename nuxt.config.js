export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s – Moderne: Unleash the full potential of your creative team',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: "msapplication-TileColor", content: "#f3eae5"},
      {name: "theme-color", content: "#ffffff"},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"},
      {rel: "manifest", href: "/site.webmanifest"},
      {rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/ga.js', mode: 'client'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg'
  ],
  styleResources: {
    scss: [
      './assets/scss/*.scss',
      './components/*.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
