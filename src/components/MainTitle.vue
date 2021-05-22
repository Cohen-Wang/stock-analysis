<template>
  <div class="title-wrapper padding-lr-lg">
    <div class="flex justify-between">
      <!-- 左边 -->
      <div>
        <span v-if="iconfont"
              class="iconfont blank"
              :class="iconfont"/>
        <span class="text-df text-black">{{ text }}</span>
      </div>
      <!-- 右边 -->
      <div><slot name="right"/></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class MainTitle extends Vue {
  @Prop(String) text!: '默认标题'
  @Prop(String) iconfont!: ''
}
</script>

<style lang="scss" scoped>
  .title-wrapper {
    height: 43px;
    line-height: 43px;
  }
</style>
