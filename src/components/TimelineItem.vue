<template>
  <div class="padding-right-lg">
    <div class="flex justify-between">
      <div class="text-bold">关注了《新疆棉事件》</div>
      <div>{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</div>
    </div>
    <div class="text-gray">
      无限滚动加载在互联网上到处都有应用：
      豆瓣首页是一个，Facebook的Timeline是一个，Tweeter的话题列表也是一个。当你向下滚动，新的内容就神奇的“无中生有”了。这是一个得到广泛赞扬的用户体验。
      无限滚动加载背后的技术挑战其实比想象中要多不少。尤其是要考虑页面性能，需要做到极致。
      本文通过代码实例，来实现一个无限滚动加载效果。更重要的是，在实现过程中，对于页面性能的分析和处理力图做到最大化，希望对读者有所启发，同时也欢迎与我讨论。
      无限滚动加载在互联网上到处都有应用：
      豆瓣首页是一个，Facebook的Timeline是一个，Tweeter的话题列表也是一个。当你向下滚动，新的内容就神奇的“无中生有”了。这是一个得到广泛赞扬的用户体验。
      无限滚动加载背后的技术挑战其实比想象中要多不少。尤其是要考虑页面性能，需要做到极致。
      本文通过代码实例，来实现一个无限滚动加载效果。更重要的是，在实现过程中，对于页面性能的分析和处理力图做到最大化，希望对读者有所启发，同时也欢迎与我讨论。
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class TimelineItem extends Vue {
}
</script>

<style lang="scss" scoped></style>