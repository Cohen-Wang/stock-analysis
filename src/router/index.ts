import Vue from 'vue'
import VueRouter, {RawLocation, RouteConfig} from 'vue-router'
import Layout from '@/views/Layout/Index.vue'
import { session } from '@/utils'

Vue.use(VueRouter)

/**
 * 报错解决方案
 * Error: Avoided redundant navigation to current location: '/home'.'
 * @type {{(location: RawLocation): Promise<Route>; (location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void}}
 * 有空了解下为什么会有这个报错！！
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: RawLocation) {
  return (originalPush.call(this, location) as any).catch((err: any) => err)
}

export const asyncRouterMap: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: { isShow: true, title: '首页', icon: 'home' },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/HomeIndex.vue')
      }
    ]
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: Layout,
    meta: { isShow: true, title: '工作台', icon: 'solution' },
    redirect: '/workspace/workspace-index',
    children: [
      {
        path: '/workspace/workspace-index',
        name: 'workspace',
        component: () => import('@/views/Workspace/WorkspaceIndex.vue'),
        meta: { isShow: true, title: '工作台首页', icon: 'solution' }
      }
    ]
  },
  {
    path: '/application',
    name: 'application',
    component: Layout,
    meta: { isShow: true, title: '应用', icon: 'appstore' },
    redirect: '/application/stock-management',
    children: [
      {
        path: '/application/stock-management',
        name: 'stock-management',
        component: () => import('@/views/Application/StockManagement.vue'),
        meta: { isShow: true, title: '股票管理', icon: 'dropbox' }
      },
      {
        path: '/application/event-management',
        name: 'event-management',
        component: () => import('@/views/Application/EventManagement.vue'),
        meta: { isShow: true, title: '事件管理', icon: 'codepen-circle' }
      },
      {
        path: '/application/event-hall',
        name: 'event-hall',
        component: () => import('@/views/Application/EventHall.vue'),
        meta: { isShow: true, title: '事件大厅', icon: 'medium' }
      },
      {
        path: '/application/translation',
        name: 'translation',
        component: () => import('@/views/Application/Translation.vue'),
        meta: { isShow: true, title: '翻译', icon: 'slack-square' }
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: Layout,
    meta: { isShow: true, title: '设置', icon: 'setting' },
    redirect: '/setting/user-management',
    children: [
      {
        path: '/setting/user-management',
        name: 'user-management',
        component: () => import('@/views/Setting/UserManagement.vue'),
        meta: { isShow: true, title: '用户管理', icon: 'user' }
      },
      {
        path: '/setting/role-management',
        name: 'role-management',
        component: () => import('@/views/Setting/RoleManagement.vue'),
        meta: { isShow: true, title: '角色管理', icon: 'yuque' }
      },
      {
        path: '/setting/system-log',
        name: 'system-log',
        component: () => import('@/views/Setting/SystemLog.vue'),
        meta: { isShow: true, title: '系统日志', icon: 'slack' }
      }
    ]
  },
  {
    path: '/personal',
    name: 'personal',
    component: Layout,
    meta: { isShow: false, title: '个人中心'},
    redirect: '/personal/personal-center',
    children: [
      {
        path: '/personal/personal-center',
        name: 'personal-center',
        component: () => import('@/views/PersonalCenter/Index.vue'),
        meta: { isShow: false, title: '个人中心', icon: 'solution' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { isShow: false },
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { isShow: false },
    component: () => import('@/views/Login/Register.vue')
  },
  {
    path: '/404',
    name: 'not-found',
    meta: { isShow: false },
    component: () => import('@/views/404.vue')
  },
  {
    path: '*',
    meta: { isShow: false },
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history', // 路由的使用模式   #/home(hash)   /home(h5 history)
  base: process.env.BASE_URL, // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 '/app/'。默认值: '/'
  routes: asyncRouterMap // 配置
  // modules: {} // 进行路由模块划分
})

/**
 * 拦截器
 */
router.beforeEach((to: any, from: any, next: any) => {
  const isLogin = !!session.get('access_token')
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
