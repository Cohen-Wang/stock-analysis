<template>
  <a-layout>
    <a-layout-sider v-model="collapsed" class="sidebar-height">
      <!-- 标题 -->
      <div class="flex justify-center">
        <span class="text-grey text-bold text-lg" style="line-height: 64px;">
          {{ collapsed ? '析' : '分析平台' }}
        </span>
      </div>
      <!-- 侧边栏 -->
      <sidebar/>
    </a-layout-sider>
    <a-layout>
      <!-- 导航栏 -->
      <a-layout-header class="padding-0">
        <nav-header/>
      </a-layout-header>
      <!-- 内容 -->
      <a-layout-content class="padding-lr-sm padding-top-sm">
        <!-- 面包屑导航 -->
        <div class="bg-white padding-lr-lg padding-tb-sm margin-bottom-sm">
          <a-breadcrumb separator="/">
            <template v-for="(item, index) in breadCrumbItems">
              <a-breadcrumb-item :key="index">
                <!-- 路径页面，可以点击跳转 -->
                <router-link v-if="breadCrumbItems.indexOf(item) !== breadCrumbItems.length - 1"
                             :to="item.path">
                  {{ item.title }}
                </router-link>
                <!-- 当前页面，不能点击 -->
                <span v-else>{{ item.title }}</span>
              </a-breadcrumb-item>
            </template>
          </a-breadcrumb>
        </div>
        <!-- 主体内容 -->
        <router-view class=""/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component, Provide, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
// 组件
import NavHeader from '@/views/Layout/NavHeader.vue'
import Sidebar from '@/views/Layout/Sidebar.vue'

@Component({
  components: {
    NavHeader,
    Sidebar
  }
})

export default class Layout extends Vue {

  @Getter('common/collapsed') collapsed: any
  @Provide() breadCrumbItems: any = []

  @Watch('$route')
  handleRouterChange (to: any) {
    this.initBreadCrumbItems(to);
  }

  created () {
    this.initBreadCrumbItems(this.$route);
  }

  /**
   * 面包屑导航的方法
   * @param router
   */
  initBreadCrumbItems(router: any): void {
    // 根路由title
    let breadCrumbItems: any = [{
      path: '/',
      title: '分析平台'
    }]
    // 遍历父级到当前子路由的页面的title和path 存储到数组里面
    for (const index in router.matched) {
      if (router.matched[index].meta && router.matched[index].meta.title) {
        breadCrumbItems.push({
          path: router.matched[index].path ? router.matched[index].path : '/',
          title: router.matched[index].meta.title
        })
      }
    }
    //
    this.breadCrumbItems = breadCrumbItems
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-height {
    height: 100vh;
    overflow-y: auto;
  }
</style>
