import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'
// 模块
import common from './modules/common'
import router from './modules/router'
import token from './modules/token'
import user from './modules/user'

export default new Vuex.Store({
  strict: true,
  // 插件
  // plugins: [createPersistedState({
  //   storage: window.localStorage
  // })],
  modules: {
    common,
    router,
    token,
    user
  }
})
