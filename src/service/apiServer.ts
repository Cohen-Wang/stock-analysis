import axiosInterceptor from '@/service/axiosInterceptor'

/**
 * GET
 * @param url
 * @param param
 * @returns {*}
 */
export const getAction = function(url: string = '', param: any = {}) {
  return axiosInterceptor.get(url, param)
}

/**
 * POST
 * @param url
 * @param data
 * @param config
 * @returns {*}
 */
export const postAction = function(url: string = '', data: any = {}, config: any = {}) {
  return axiosInterceptor.post(url, data, config)
}

/**
 * PUT
 * @param url
 * @param data
 * @param config
 * @returns {*}
 */
export const putAction = function(url: string = '', data: any = {}, config: any = {}) {
  return axiosInterceptor.put(url, data, config)
}

/**
 * DELETE
 * @param url
 * @param data
 * @returns {*}
 */
export const deleteAction = function(url: string = '', data: any = {}) {
  return axiosInterceptor.delete(url, data)
}
