import { session } from '@/utils'

const token = {
  namespaced: true,
  state: {
    token: session.get('access_token') || ''
  },
  getters: {
  },
  mutations: {
    // 设置token
    SET_TOKEN: (state: any, payload: any): void => {
      state.token = payload
      session.set({
        name: 'access_token',
        content: payload
      })
    },
    // 清空token
    REMOVE_TOKEN: (state: any): void => {
      state.token = ''
      session.remove('access_token')
    }
  },
  actions: {
    // 设置token
    SET_TOKEN: (context: any, payload: any): void => {
      context.commit('SET_TOKEN', payload)
    },
    // 清空token
    REMOVE_TOKEN: (context: any): void => {
      context.commit('REMOVE_TOKEN')
    }
  }
}

export default token
