<template>
  <a-layout>
    <a-layout-sider>
      <a-menu mode="inline"
              :theme="theme"
              :default-selected-keys="[currentPath]"
              class="layout-sidebar"
              @click="handleClick">
        <!-- 只有一个元素 -->
        <template v-for="item in this.routes.find(e => e.name === 'Layout').children.find(e => e.name === this.currentNav).children">
          <a-menu-item :key="item.path" titleClick="handleTitleClick">
            <a-icon v-if="item.meta.icon" :type="item.meta.icon"/>
            <span>{{ item.meta.title }}</span> <!-- 必须有span包裹，否则字无法收缩 -->
          </a-menu-item>
        </template>
        <!-- 多个元素 -->
        <template v-for="item in haveChildrenRouter">
          <a-sub-menu :key="item.name">
            <span slot="title">
              <a-icon v-if="item.meta.icon"
                      :type="item.meta.icon"/>
              <span>{{ item.meta.title }}</span>
            </span>
            <!-- 子元素无孙元素 -->
            <!-- eslint-disable-next-line -->
            <template v-for="item2 in item.children" v-if="!item2.children">
              <a-menu-item :key="item2.path">
                <span>{{ item2.meta.title }}</span>
              </a-menu-item>
            </template>
            <!-- 子元素有孙元素 -->
            <!-- eslint-disable-next-line -->
            <template v-for="item2 in item.children" v-if="item2.children">
              <a-sub-menu :key="item2.path">
            <span slot="title">
              <span>{{ item2.meta.title }}</span>
            </span>
                <!-- 孙元素【无】孙孙元素 -->
                <!-- eslint-disable-next-line -->
                <template v-for="item3 in item2.children" v-if="!item3.children">
                  <a-menu-item :key="item3.path">
                    <span>{{ item3.meta.title }}</span>
                  </a-menu-item>
                </template>
                <!-- 孙元素【有】孙孙元素 -->
                <!-- eslint-disable-next-line -->
                <template v-for="item3 in item2.children" v-if="item3.children">
                  <a-sub-menu :key="item3.path">
                <span slot="title">
                  <span>{{ item3.meta.title }}</span>
                </span>

                    <template v-for="item4 in item3.children">
                      <a-menu-item :key="item4.path">
                        <span>{{ item4.meta.title }}</span>
                      </a-menu-item>
                    </template>
                  </a-sub-menu>
                </template>
              </a-sub-menu>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <div class="padding-lr-sm padding-top-sm">
          <div class="bg-white padding-lr-lg padding-tb-sm margin-bottom-sm">
            <a-breadcrumb separator="/">
              <a-breadcrumb-item href=""><a-icon type="bars"/></a-breadcrumb-item>
              <template v-for="(item, index) in breadcrumbItem">
                <a-breadcrumb-item :key="index">
                  <!-- 路径页面，可以点击跳转 -->
                  <router-link v-if="breadcrumbItem.indexOf(item) !== breadcrumbItem.length - 1"
                               :to="item.path">
                    {{ item.title }}
                  </router-link>
                  <!-- 当前页面，不能点击 -->
                  <span v-else>{{ item.title }}</span>
                </a-breadcrumb-item>
              </template>
            </a-breadcrumb>
          </div>
          <slot name="content"/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component, Provide, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  components: {}
})

export default class LayoutWithSidebar extends Vue {

  @Getter('common/collapsed')
  collapsed: any

  @Getter('common/theme')
  theme: any

  @Getter('common/currentNav')
  currentNav: any

  @Getter('router/routes')
  routes: any

  @Provide()
  breadcrumbItem: any = []

  @Provide()
  currentRoute: any = []

  @Provide()
  currentPath: any = ''

  @Provide()
  notHaveChildrenRouter: any = []
  @Provide()
  haveChildrenRouter: any = []

  @Watch('$route')
  handleRouterChange(to: any) {
    this.initBreadcrumbItem(to)
  }

  created(): void {
    this.initBreadcrumbItem(this.$route)
  }

  handleClick(option: any): void {
    const { key } = option
    this.$router.push(key)
  }

  /**
   * 面包屑导航的方法
   * @param route
   */
  initBreadcrumbItem(route: any) {
    this.currentPath = route.path
    // 初始化首页
    const breadcrumbItem = [{ path: '/', title: '分析管理平台' }]
    // 当前路径，注意这里用map的坑
    route.matched.forEach((item: any) => {
      if (item.meta && item.meta.title) {
        breadcrumbItem.push({
          path: item.path ? item.path : '/',
          title: item.meta.title
        })
      }
    })
    // 合并
    this.breadcrumbItem = breadcrumbItem
  }
}
</script>

<style lang="scss" scoped>
  .layout-sidebar {
    height: calc(100vh - 64px);
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar{
      display:none;
    }
  }
</style>
