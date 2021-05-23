import { notification } from 'ant-design-vue'

/**
 * 成功通知
 * @param message
 * @param description
 * @param duration
 */
const noteSuccess = (message: string = '', description: string = '', duration: number = 6): void => {
  notification.success({
    message,
    description: '',
    duration
  })
}

/**
 * 信息通知
 * @param message
 * @param description
 * @param duration
 */
const noteInfo = (message: string = '', description: string = '', duration: number = 6): void => {
  notification.info({
    message,
    description,
    duration
  })
}

/**
 * 警告通知
 * @param message
 * @param description
 * @param duration
 */
const noteWarn = (message: string = '', description: string = '', duration: number = 6): void => {
  notification.warning({
    message,
    description,
    duration
  })
}

/**
 * 错误通知
 * @param message
 * @param description
 * @param duration
 */
const noteError = (message: string = '', description: string = '', duration: number = 6): void => {
  notification.error({
    message,
    description,
    duration
  })
}

/**
 * 默认通知
 * @param message
 * @param description
 * @param duration
 */
const noteDefault = (message: string = '', description: string = '', duration: number = 6): void => {
  notification.open({
    message,
    description,
    duration
  })
}

export default {
  success: noteSuccess,
  info: noteInfo,
  warn: noteWarn,
  error: noteError,
  default: noteDefault
}
