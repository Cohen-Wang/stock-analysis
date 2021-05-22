<template>
  <a-layout>
    <a-layout-header class="padding-0">
      <nav-header/>
    </a-layout-header>
    <a-layout-content>
      <!-- 视图 -->
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
// 组件
import NavHeader from './NavHeader.vue'

@Component({
  components: {
    NavHeader
  }
})

export default class Layout extends Vue {
}
</script>

<style lang="scss" scoped></style>
