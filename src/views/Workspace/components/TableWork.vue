<template>
  <div class="workspace-height bg-white">
    <div class="padding border-bottom border-solid border-gray">
      <a-row :gutter="16">
        <a-col :span="4">
          <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
          <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
        </a-col>
        <a-col :span="4">
          <a-statistic-countdown title="Countdown"
                                 :value="deadline"
                                 style="margin-right: 50px"
                                 @finish="onFinish"/>
        </a-col>
        <a-col :span="4">
          <a-statistic-countdown title="Million Seconds"
                                 :value="deadline"
                                 format="HH:mm:ss:SSS"
                                 style="margin-right: 50px"/>
        </a-col>
        <a-col :span="4">
          <a-statistic-countdown title="Day Level" :value="deadline" format="D 天 H 时 m 分 s 秒" />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class TableWork extends Vue {

  @Provide()
  deadline: any = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30

  onFinish(): void {
    console.log('onFinish')
  }
}
</script>

<style lang="scss" scoped></style>
