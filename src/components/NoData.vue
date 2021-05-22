<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
import { Vue, Provide } from 'vue-property-decorator'

export default class NoData extends Vue {
  @Provide()
  text: any = '暂无数据'
}
</script>

<style lang="scss" scoped></style>