// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

const login = {

  /**
   * 登录
   * @param params
   */
  login: (params: any = {}) => {
    const url = `http://jsonplaceholder.typicode.com/posts/1/comments`
    return getAction(url, params)
  },

  /**
   * 退出登录
   * @param params
   */
  logout: (params: any = {}) => {
    const url = `http://jsonplaceholder.typicode.com/posts/1/comments`
    return getAction(url, params)
  }
}

export default login
