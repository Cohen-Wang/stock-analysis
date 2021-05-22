<template>
  <div class="padding-lr-sm padding-top-sm">
    <a-tabs default-active-key="1"
            size="small"
            :tab-position="tabPosition">
      <a-tab-pane key="1" tab="个人信息">
        <personal-info/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="我的日志">
        <personal-log/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
// 组件
import PersonalInfo from '@/views/PersonalCenter/PersonalInfo.vue'
import PersonalLog from '@/views/PersonalCenter/PersonalLog.vue'

@Component({
  components: {
    PersonalInfo,
    PersonalLog
  }
})

export default class PersonalCenter extends Vue {

  @Provide()
  tabPosition: string = 'left'
}
</script>

<style lang="scss" scoped>
  /deep/ .ant-tabs .ant-tabs-left-content {
    padding-left: 0;
  }
</style>