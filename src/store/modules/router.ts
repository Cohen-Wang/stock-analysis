import { asyncRouterMap } from '@/router' // asideBar 导航处需要的router数据

const router = {
  namespaced: true,
  state: {
    // 全局路由配置
    routes: asyncRouterMap || []
  },
  getters: {
    routes(state: any): any {
      return state.routes
    }
  },
  mutations: {
    // 全局路由配置
    SET_ROUTES: (state: any, payload: any): void => {
      state.routes = payload
    }
  },
  actions: {
    // 全局路由配置
    SET_ROUTES: (context: any, payload: any): void => {
      context.commit('SET_ROUTES', payload)
    }
  }
}

export default router
