export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i&display=swap'
      },
      {
        rel: 'stylesheet',
        href: '/css/open-iconic-bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/animate.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/magnific-popup.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/aos.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/ionicons.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/flaticon.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/icomoon.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap/bootstrap-grid.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/style.css'
      }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/jquery-migrate-3.0.1.min.js' },
      { src: '/js/popper.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/jquery.easing.1.3.js' },
      { src: '/js/jquery.waypoints.min.js' },
      { src: '/js/jquery.stellar.min.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/jquery.magnific-popup.min.js' },
      { src: '/js/aos.js' },
      { src: '/js/jquery.animateNumber.min.js' },
      { src: '/js/scrollax.min.js' },
      // { src: '/js/google-map.js' },
      { src: '/js/main.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [    
    {src: '~/plugins/vuelidate.js', mode: 'client'}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
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
    extend (config, ctx) {}
  }
}
