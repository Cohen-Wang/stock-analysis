<template>
  <div>
    <div class="flex justify-between padding-lr-sm">
        <!-- 左边 -->
        <div>
          <a-button :icon="collapsed ? 'menu-unfold' : 'menu-fold'" @click="setCollapsed"/>
        </div>
        <!-- 右边 -->
        <div>
          <a-dropdown>
            <a class="ant-dropdown-link margin-right-lg"
               @click="e => e.preventDefault()">
              <span>你好，{{ userInfo.realName }}</span>
              <a-icon type="down"/>
            </a>
            <a-menu slot="overlay">
              <a-menu-item><a href="javascript:void(0)" @click="$router.push('/personal-center')">个人中心</a></a-menu-item>
              <a-menu-item><a href="javascript:void(0)" @click="showIndividuationDialog">个性化</a></a-menu-item>
              <a-menu-divider/>
              <a-menu-item><a href="javascript:void(0)" @click="gotoMessage">个人消息（23）</a></a-menu-item>
              <a-menu-divider/>
              <a-menu-item><a href="javascript:void(0)" @click="onLogout">退出登录</a></a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-badge dot>
            <a-avatar shape="square" :src="userInfo.avatarUrl"/>
          </a-badge>
        </div>
    </div>

    <!-- 组件：个性化对话框 -->
    <individuation-modal ref="IndividuationModal"/>

    <!-- 组件：对话框 - 名言警句 -->
    <wisdom-modal ref="WisdomModal"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
// 组件
import IndividuationModal from './components/IndividuationModal.vue'
import WisdomModal from '@/components/WisdomModal.vue'

@Component({
  components: {
    IndividuationModal,
    WisdomModal
  }
})

export default class NavHeader extends Vue {
  @Getter('user/userInfo') userInfo: any
  @Getter('common/theme') theme: any
  @Getter('common/collapsed') collapsed: any
  @Provide() title: string = process.env.VUE_APP_TITLE
  @Provide() version: string = process.env.VUE_APP_VERSION
  @Provide() duration: number = 5 * 1000

  mounted(): void {
    // this.showWisdomModal()
  }

  // 显示跑马灯
  showWisdomModal(): void {
    const _this: any = this
    window.setInterval(() => {
      const text: string = (this as any).$constant.wisdom.WISDOM_LIST[~~(Math.random() * (this as any).$constant.wisdom.WISDOM_LIST.length)]
      _this.$refs['WisdomModal'].showModal(text)
    }, _this.duration)
  }

  // 设置折叠
  setCollapsed(): void {
    this.$store.dispatch('common/SET_CURRENT_COLLAPSED', !this.collapsed)
  }

  // 跳转消息中心
  gotoMessage(): void {
    this.$message.info('暂无此功能')
  }

  // 个性化弹窗
  showIndividuationDialog(): void {
    (this as any).$refs['IndividuationModal'].showModal()
  }

  // 退出登录
  onLogout(): void {
    const _this = this
    this.$confirm({
      title: '确认退出登录吗？',
      okText: '确认',
      cancelText: '取消',
      onCancel() {},
      onOk() {
        _this.logout()
      }
    })
  }

  logout(): void {
    // (this as any).$apiServer.login.logout().then((res: any) => {
    //   // 清除token
    //   this.$store.dispatch('user/REMOVE_USER_INFO')
    //   this.$store.dispatch('token/REMOVE_TOKEN')
    //   // 跳转login
    //   this.$router.push('/login')
    // })
    // 清除token
    this.$store.dispatch('user/REMOVE_USER_INFO')
    this.$store.dispatch('token/REMOVE_TOKEN')
    // 跳转login
    this.$router.push('/login')
  }
}

</script>

<style lang="scss" scoped></style>
