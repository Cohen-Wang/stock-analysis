import Vue from 'vue'
import App from './App.vue'

// iconfont
import '@/assets/iconfont/iconfont.css'

// 样式
import './style/global.scss'

// ...
import router from './router'
import store from './store'

// ant-design-vue
import Antd from 'ant-design-vue'
import '@/style/antd.min.css'

// directives
// import 'directives.ts'

// aos
// @ts-ignore
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
Vue.use(AOS)
AOS.init()

// moment
import moment from 'moment'
Vue.prototype.$moment = moment

// 封装通知
import note from '@/utils/modules/note'
Vue.prototype.$note = note

// 常量配置
import constant from '@/constant/index'
Vue.prototype.$constant = constant

// axios
import apiServer from '@/service'
Vue.prototype.$apiServer = apiServer
// /**
//  * axios并没有install 方法，所以是不能使用vue.use()方法的。
//  * 引入axios，并加到原型链中
//  */
// Vue.prototype.$axios = axios

// 调用 ant-design框架
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
