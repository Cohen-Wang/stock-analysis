// eslint-disable-next-line
import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

const ip = {

  /**
   * 获取IP信息
   * @param params
   */
  get: (params: any = {}) => {
    const url = `http://pv.sohu.com/cityjson?ie=utf-8`
    return getAction(url, params)
  }
}

export default ip
