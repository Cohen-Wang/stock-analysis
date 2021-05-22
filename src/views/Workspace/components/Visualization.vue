<template>
  <div class="workspace-height">
    <div class="margin-bottom-sm bg-white">
      <div class="border-rb border-gray border-solid">
        <main-title text="重大事件"/>
      </div>
      <div class="border-right border-gray border-solid padding-lr-lg padding-tb">
        <div ref="eventGraph" style="height: 500px;">
          <!-- 重大事件图 -->
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="border-rb border-gray border-solid">
        <main-title text="个股"/>
      </div>
      <div class="border-right border-gray border-solid padding-lr-lg padding-tb">
        <div ref="eventGraph2" style="height: 500px;">
          <!-- 重大事件图 -->
        </div>
      </div>
    </div>

    <!-- 组件：事件详情 -->
    <event-detail-index ref="EventDetailIndex"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import { Chart } from '@antv/g2'
import DataSet from '@antv/data-set'
// 组件
import MainTitle from '@/components/MainTitle.vue'
import EventDetailIndex from '@/components/EventDetail/EventDetailIndex.vue'

@Component({
  components: {
    MainTitle,
    EventDetailIndex
  }
})

export default class TestPanel extends Vue {
  @Provide() chart: any = null

  mounted(): void {
    this.initChart()
    this.initChart2()
  }

  // +---------------------------------------------------------------------------------------------
  // | 雷达图
  // +---------------------------------------------------------------------------------------------
  // 画图
  initChart(): void {
    const data = [
      { group: 'All Survey Responses', type: 'All Survey Responses', total: 565, 'Strongly Agree': 50.1, Agree: 40.7, 'No Opinion': 4.8, Disagree: 3.7, 'Strongly Disagree': 0.7 },
      { group: 'Employment sector', type: 'Academic(nonstudent)', total: 253, 'Strongly Agree': 64.0, Agree: 30.8, 'No Opinion': 3.2, Disagree: 2.0, 'Strongly Disagree': 0.0 },
      { group: 'Employment sector', type: 'Business and industry', total: 176, 'Strongly Agree': 40.6, Agree: 50.0, 'No Opinion': 2.8, Disagree: 6.3, 'Strongly Disagree': 0.0 },
      { group: 'Employment sector', type: 'Federal, state, and local government', total: 71, 'Strongly Agree': 38.0, Agree: 47.9, 'No Opinion': 7.0, Disagree: 4.2, 'Strongly Disagree': 2.8 },
      { group: 'Employment sector', type: 'Private consultant/self-employed', total: 28, 'Strongly Agree': 39.3, Agree: 53.6, 'No Opinion': 7.1, Disagree: 0.0, 'Strongly Disagree': 0.0 },
      { group: 'Employment sector', type: 'Other', total: 34, 'Strongly Agree': 29.4, Agree: 44.1, 'No Opinion': 14.7, Disagree: 5.9, 'Strongly Disagree': 5.9 },
      { group: 'Race', type: 'White', total: 400, 'Strongly Agree': 50.0, Agree: 41.8, 'No Opinion': 4.5, Disagree: 2.8, 'Strongly Disagree': 1.0 },
      { group: 'Race', type: 'Asian', total: 122, 'Strongly Agree': 53.3, Agree: 40.2, 'No Opinion': 3.3, Disagree: 3.3, 'Strongly Disagree': 0.0 },
      { group: 'Race', type: 'Black or African American', total: 10, 'Strongly Agree': 40.0, Agree: 30.0, 'No Opinion': 20.0, Disagree: 10.0, 'Strongly Disagree': 0.0 },
      { group: 'Education', type: "Associate's and Bachelor's", total: 175, 'Strongly Agree': 37.1, Agree: 49.1, 'No Opinion': 5.7, Disagree: 6.9, 'Strongly Disagree': 1.1 },
      { group: 'Education', type: "Master's and Above", total: 388, 'Strongly Agree': 55.9, Agree: 36.9, 'No Opinion': 4.4, Disagree: 2.3, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: 'Male', total: 356, 'Strongly Agree': 50.6, Agree: 41, 'No Opinion': 4.2, Disagree: 3.4, 'Strongly Disagree': 0.8 },
      { group: 'Gender', type: 'Female', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '张三', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '李四', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '王二麻子', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '刘德华', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '蔡依林', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '周杰伦', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '林俊杰', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '萧亚轩', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '吴宗宪', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '温岚', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '科比', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '詹姆斯', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: '孙燕姿', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 }
    ]

    const dv = new DataSet.DataView()
    dv.source(data)
            .transform({
              type: 'map',
              callback(row) {
                row['Strongly Disagree'] *= -1
                row.Disagree *= -1
                return row
              }
            })
            .transform({
              type: 'fold',
              fields: ['Disagree', 'Strongly Disagree', 'No Opinion', 'Agree', 'Strongly Agree'],
              key: 'opinion',
              value: 'value',
              retains: ['group', 'type']
            })

    const colorMap = {
      'Strongly Agree': '#3561A7',
      Agree: '#80B2D3',
      'No Opinion': '#D9F0F6',
      Disagree: '#EC7743',
      'Strongly Disagree': '#CB2920'
    }

    const chart = new Chart({
      container: (this as any).$refs['eventGraph'],
      autoFit: true,
      height: (this as any).$refs['eventGraph'].clientHeight
    })

    chart.coordinate('rect').transpose()

    chart.data(dv.rows);
    chart.scale('value', {
      nice: true
    })

    chart.axis('type', {
      title: null,
      // @ts-ignore
      labelOffset: 10
    })
    chart.axis('value', {
      position: 'right',
      title: null,
      tickLine: null,
      // @ts-ignore
      formatter(val: any) {
        return val + '%'
      }
    })

    chart.on('click', () => {
      (this.$refs['EventDetailIndex'] as any).showDrawer({
        title: '事件详情'
      })
    })

    chart.tooltip({
      shared: true,
      showMarkers: false,
    })

    chart.legend({
      position: 'right-bottom'
    })

    chart
            .interval()
            .adjust('stack')
            .position('type*value')
            .color('opinion', (opinion) => {
              return (colorMap as any)[opinion]
            })

    chart.interaction('active-region')

    chart.render()
  }

  // 画图
  initChart2(): void {
    const data = [
      { group: 'All Survey Responses', type: 'All Survey Responses', total: 565, 'Strongly Agree': 50.1, Agree: 40.7, 'No Opinion': 4.8, Disagree: 3.7, 'Strongly Disagree': 0.7 },
      { group: 'Employment sector', type: 'Academic(nonstudent)', total: 253, 'Strongly Agree': 64.0, Agree: 30.8, 'No Opinion': 3.2, Disagree: 2.0, 'Strongly Disagree': 0.0 },
      { group: 'Employment sector', type: 'Business and industry', total: 176, 'Strongly Agree': 40.6, Agree: 50.0, 'No Opinion': 2.8, Disagree: 6.3, 'Strongly Disagree': 0.0 },
      { group: 'Employment sector', type: 'Federal, state, and local government', total: 71, 'Strongly Agree': 38.0, Agree: 47.9, 'No Opinion': 7.0, Disagree: 4.2, 'Strongly Disagree': 2.8 },
      { group: 'Employment sector', type: 'Private consultant/self-employed', total: 28, 'Strongly Agree': 39.3, Agree: 53.6, 'No Opinion': 7.1, Disagree: 0.0, 'Strongly Disagree': 0.0 },
      { group: 'Employment sector', type: 'Other', total: 34, 'Strongly Agree': 29.4, Agree: 44.1, 'No Opinion': 14.7, Disagree: 5.9, 'Strongly Disagree': 5.9 },
      { group: 'Race', type: 'White', total: 400, 'Strongly Agree': 50.0, Agree: 41.8, 'No Opinion': 4.5, Disagree: 2.8, 'Strongly Disagree': 1.0 },
      { group: 'Race', type: 'Asian', total: 122, 'Strongly Agree': 53.3, Agree: 40.2, 'No Opinion': 3.3, Disagree: 3.3, 'Strongly Disagree': 0.0 },
      { group: 'Race', type: 'Black or African American', total: 10, 'Strongly Agree': 40.0, Agree: 30.0, 'No Opinion': 20.0, Disagree: 10.0, 'Strongly Disagree': 0.0 },
      { group: 'Education', type: "Associate's and Bachelor's", total: 175, 'Strongly Agree': 37.1, Agree: 49.1, 'No Opinion': 5.7, Disagree: 6.9, 'Strongly Disagree': 1.1 },
      { group: 'Education', type: "Master's and Above", total: 388, 'Strongly Agree': 55.9, Agree: 36.9, 'No Opinion': 4.4, Disagree: 2.3, 'Strongly Disagree': 0.5 },
      { group: 'Gender', type: 'Male', total: 356, 'Strongly Agree': 50.6, Agree: 41, 'No Opinion': 4.2, Disagree: 3.4, 'Strongly Disagree': 0.8 },
      { group: 'Gender', type: 'Female', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 }
    ]

    const dv = new DataSet.DataView()
    dv.source(data)
            .transform({
              type: 'map',
              callback(row) {
                row['Strongly Disagree'] *= -1
                row.Disagree *= -1
                return row
              }
            })
            .transform({
              type: 'fold',
              fields: ['Disagree', 'Strongly Disagree', 'No Opinion', 'Agree', 'Strongly Agree'],
              key: 'opinion',
              value: 'value',
              retains: ['group', 'type']
            })

    const colorMap = {
      'Strongly Agree': '#3561A7',
      Agree: '#80B2D3',
      'No Opinion': '#D9F0F6',
      Disagree: '#EC7743',
      'Strongly Disagree': '#CB2920'
    }

    const chart = new Chart({
      container: (this as any).$refs['eventGraph2'],
      autoFit: true,
      height: (this as any).$refs['eventGraph2'].clientHeight
    })

    chart.coordinate('rect').transpose()

    chart.data(dv.rows);
    chart.scale('value', {
      nice: true
    })

    chart.axis('type', {
      title: null,
      // @ts-ignore
      labelOffset: 10
    })
    chart.axis('value', {
      position: 'right',
      title: null,
      tickLine: null,
      // @ts-ignore
      formatter(val: any) {
        return val + '%'
      }
    })

    chart.on('click', () => {
      (this.$refs['EventDetailIndex'] as any).showDrawer({
        title: '事件详情'
      })
    })

    chart.tooltip({
      shared: true,
      showMarkers: false,
    })

    chart.legend({
      position: 'right-bottom'
    })

    chart
            .interval()
            .adjust('stack')
            .position('type*value')
            .color('opinion', (opinion) => {
              return (colorMap as any)[opinion]
            })

    chart.interaction('active-region')

    chart.render()
  }

}
</script>

<style lang="scss" scoped>
  .graph {
    width: 400px;
    height: 400px;
  }
</style>
