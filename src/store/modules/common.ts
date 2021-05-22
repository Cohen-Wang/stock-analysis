import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { local } from '@/utils'

const common: any = {
  namespaced: true,
  state: {
    // 当前一级导航
    currentNav: 'home',
    // 主题
    theme: local.get('theme') || 'dark',
    // 导航菜单宽度
    collapsed: local.get('collapsed') || false
  },
  getters: {
    currentNav(state: any): any {
      return state.currentNav
    },
    theme(state: any): any {
      return state.theme
    },
    collapsed(state: any): any {
      return state.collapsed
    }
  },
  mutations: {
    // 当前导航
    SET_CURRENT_NAV: (state: any, payload: any): void => {
      state.currentNav = payload
      local.set({
        name: 'currentNav',
        content: payload
      })
    },
    // 设置主题
    SET_CURRENT_THEME: (state: any, payload: any): void => {
      state.theme = payload
      local.set({
        name: 'theme',
        content: payload
      })
      const body = document.getElementsByTagName('body')[0]
      if (payload === 'light') {
        body.classList.remove('dark')
        body.classList.add('light')
        return
      }
      if (payload === 'dark') {
        body.classList.remove('light')
        body.classList.add('dark')
        return
      }
    },
    // 设置导航菜单宽度
    SET_CURRENT_COLLAPSED: (state: any, payload: any): void => {
      state.collapsed = payload
      local.set({
        name: 'collapsed',
        content: payload
      })
    }
  },
  actions: {
    // 当前导航
    SET_CURRENT_NAV: (context: any, payload: any): void => {
      context.commit('SET_CURRENT_NAV', payload)
    },
    // 设置主题
    SET_CURRENT_THEME: (context: any, payload: any): void => {
      context.commit('SET_CURRENT_THEME', payload)
    },
    // 设置导航菜单宽度
    SET_CURRENT_COLLAPSED: (context: any, payload: any): void => {
      context.commit('SET_CURRENT_COLLAPSED', payload)
    }
  }
}

export default common
