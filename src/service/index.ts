import login from '@/service/modules/login'
import user from '@/service/modules/user'
import role from '@/service/modules/role'
import ip from '@/service/modules/ip'

const apiServer = {
  login,
  ip,
  user,
  role
}

export default apiServer
