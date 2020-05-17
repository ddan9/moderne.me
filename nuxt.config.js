const Prismic = require('prismic-javascript')
const apiEndpoint = 'https://moderne.cdn.prismic.io/api/v2'


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    port: 4000
  },
  head: {
    titleTemplate: '%s – Moderne: Unleash the full potential of your creative team',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: "msapplication-TileColor", content: "#f3eae5"},
      {name: "theme-color", content: "#ffffff"},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
      {property: 'og:url', content: 'https://moderne.st'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Moderne: Unleash the full potential of your creative team'},
      {property: 'og:description', content: 'Moderne provides tons of highly tailored creative ad ideas and insights and offers a digital workspace to make brainstorms more effective for creative minds'},
      {property: 'og:image', content: 'https://moderne.st/og-image-moderne.png'}
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
  css: [
    '~assets/css/fonts.css',
    'plyr/dist/plyr.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // {src: '~plugins/ga.js', ssr: false},
    {src: '~plugins/lodash.js', ssr: false},
    {src: '~plugins/vue-scrollmagic.js', ssr: false},
    {src: '~plugins/plyr', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    '@hexdigital/nuxt-intercom',
    ['@nuxtjs/google-analytics', {
      id: 'UA-135902175-1'
    }]
  ],
  intercom: {
    appId: 'qwhyzkeb',
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', {
      credentials: true
    }],
    // Doc: https://github.com/nuxt-community/dotenv-module
    // '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    // Doc: https://prismic-nuxt.js.org/docs/getting-started
    '@nuxtjs/prismic',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap'
  ],
  prismic: {
    endpoint: 'https://moderne.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
    // preview: '/insight-of-the-day/_uid'
  },
  sitemap: {
    gzip: true,
    exclude: [
      '/preview',
      '/use-cases',
      '/use-cases/**',
      '/thank-you',
      '/register'
    ],
    routes: async () => {
      const insights = await Prismic.getApi(apiEndpoint).then(function(api) {
        return api.query('')
      })
      const newList = await insights.results.map((insight) => `/insight-of-the-day/${insight.uid}`)
      newList.push('/solutions/for-agencies')
      newList.push('/solutions/for-brands')
      newList.push('/solutions/for-startups')
      return newList
    }
    // sitemaps: [
    //   {
    //     path: '/solutions.xml',
    //     routes: [
    //       '/solutions/for-agencies',
    //       '/solutions/for-brands',
    //       '/solutions/for-startups'
    //     ]
    //   },
    //   {
    //     path: '/prismic.xml',
    //     routes: async () => {
    //       const insights = await Prismic.getApi(apiEndpoint).then(function(api) {
    //         return api.query('')
    //       })
    //       return insights.results.map((insight) => `/insight-of-the-day/${insight.uid}`)
    //     }
    //   }
    // ]
  },
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
    publicPath: '.nuxt/dist/client/',
    extend(config) {
      // config.performance.maxAssetSize = 1000000;
    }
  },
  env: {
    test: 12,
    api:
      process.env.NODE_ENV === 'dev'
        ? 'http://helps.pp.ua'
        : 'https://api.moderne.st',
    dashboard:
      process.env.NODE_ENV === 'dev'
        ? 'http://localhost:3000'
        : 'https://app.moderne.st',
    domain:
      process.env.NODE_ENV === 'dev'
        ? '.localhost:3000'
        : '.moderne.st'
  }
}
