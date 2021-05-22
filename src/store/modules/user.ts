import { local } from '@/utils'

const user = {
  namespaced: true,
  state: {
    userInfo: local.get('userInfo') || {}
  },
  getters: {
    userInfo(state: any): any {
      return state.userInfo
    }
  },
  mutations: {
    // 设置用户信息
    SET_USER_INFO: (state: any, payload: any): void => {
      state.userInfo = payload
      local.set({
        name: 'userInfo',
        content: payload
      })
    },
    // 清空用户信息
    REMOVE_USER_INFO: (state: any): void => {
      state.userInfo = {}
      local.remove('userInfo')
    }
  },
  actions: {
    // 设置用户信息
    SET_USER_INFO: (context: any, payload: any): void => {
      context.commit('SET_USER_INFO', payload)
    },
    // 清空用户信息
    REMOVE_USER_INFO: (context: any): void => {
      context.commit('REMOVE_USER_INFO')
    }
  }
}

export default user