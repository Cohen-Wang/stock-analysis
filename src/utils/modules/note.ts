import { notification } from 'ant-design-vue'

/**
 * 成功通知
 * @param message
 */
export const noteSuccess = (message: string): void => {
  notification.success({
    message,
    description: '',
    duration: 4
  })
}

/**
 * 信息通知
 * @param message
 */
export const noteInfo = (message: string): void => {
  notification.info({
    message,
    description: '',
    duration: 4
  })
}

/**
 * 警告通知
 * @param message
 */
export const noteWarn = (message: string): void => {
  notification.warning({
    message,
    description: '',
    duration: 4
  })
}

/**
 * 错误通知
 * @param message
 */
export const noteError = (message: string): void => {
  notification.error({
    message,
    description: '',
    duration: 4
  })
}