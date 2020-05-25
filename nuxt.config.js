/**
 * 使用过程中的问题点及疑惑：
 * 1. 使用自定义的app.html时，postcss-custom-properties组件将无法自动插入自定义属性的真实值
 *  如：已定义了自定义变量--height:50px; 在使用此变量时，只能插入height:var(--height)，但无法转成height:50px;
 */
export default {
  mode: 'universal',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    host: '0.0.0.0',
    port: '3000'
  },
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': { target: 'http://api2.zolerp.cn/' }
  },
  //设置页面跳转动画
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'var(--color-primary)' },
  /*
   ** Global CSS
   */
  css: ['assets/style/var.css', 'assets/style/common.css'],
  router: {
    linkActiveClass: 'link_active', //此class在Menu.vue
    linkExactActiveClass: ''
  },
  /*
   ** Plugins to load before mounting the App
   ** 就像在SPA应用中使用UI组件库一样，如： Vue.use(某某ui)
   */
  plugins: ['@/plugins/vue-component-plugin', '@/plugins/axios'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      plugins: {
        // 开启css样式嵌套
        'postcss-preset-env': {
          stage: 2,
          features: {
            'nesting-rules': true //stage是0的情况下，默认就可以嵌套
          }
        },
        //安装依赖并配置自定义属性
        'postcss-custom-properties': {
          importFrom: [
            'assets/style/var.css' //变量文件
          ]
        }
      },
      preset: {
        autoprefixer: {}
      }
    }
  }
}
