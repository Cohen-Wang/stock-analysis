<template>
  <div>
    <a-tabs type="card"
            default-active-key="1"
            tab-position="top">
      <a-tab-pane key="1" tab="可视化">
        <visualization/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="表格">
        <table-work/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="时间轴">
        <timeline-work/>
      </a-tab-pane>
      <a-tab-pane key="4" tab="日历">
        <calendar-work/>
      </a-tab-pane>
      <a-tab-pane key="5" tab="面板">
        <test-panel/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// 组件
import Visualization from './components/Visualization.vue'
import TableWork from './components/TableWork.vue'
import TimelineWork from './components/TimelineWork.vue'
import CalendarWork from './components/CalendarWork.vue'
import TestPanel from './components/TestPanel.vue'

@Component({
  components: {
    Visualization,
    TableWork,
    TimelineWork,
    CalendarWork,
    TestPanel
  }
})

export default class WorkspaceIndex extends Vue {
}

</script>

<style lang="scss" scoped>
  /deep/ .workspace-height {
    height: calc(100vh - 173px);
    overflow-y: auto;
  }

  /deep/ .ant-tabs-bar {
    margin: 0;
  }
</style>
