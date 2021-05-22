<template>
  <div class="main-content">
    <!-- 卡片区域 -->
    <div class="padding-lr-sm padding-top-sm">
      <a-row :gutter="12">
        <a-col :span="6">
          <div>
            <a-card>
              <div class="margin-bottom-sm">
                <a-statistic title="Feedback"
                             :value="11.28"
                             :precision="2"
                             suffix="%"
                             :value-style="{ color: '#3f8600' }"
                             style="margin-right: 50px">
                  <template #prefix>
                    <a-icon type="arrow-up" />
                  </template>
                </a-statistic>
              </div>
              <div>
                <div ref="first1" style="height: 150px;"/>
              </div>
            </a-card>
          </div>
        </a-col>
        <a-col :span="6">
          <div>
            <a-card>
              <div class="margin-bottom-sm">
                <a-statistic title="Idle"
                             :value="9.3"
                             :precision="2"
                             suffix="%"
                             class="demo-class"
                             :value-style="{ color: '#cf1322' }">
                  <template #prefix>
                    <a-icon type="arrow-down" />
                  </template>
                </a-statistic>
              </div>
              <div>
                <div ref="first2" style="height: 150px;"/>
              </div>
            </a-card>
          </div>
        </a-col>
        <a-col :span="6">
          <div>
            <a-card>
              <div class="margin-bottom-sm">
                <a-statistic title="Feedback"
                             :value="11.28"
                             :precision="2"
                             suffix="%"
                             :value-style="{ color: '#3f8600' }"
                             style="margin-right: 50px">
                  <template #prefix>
                    <a-icon type="arrow-up" />
                  </template>
                </a-statistic>
              </div>
              <div>
                <div ref="first3" style="height: 150px;"/>
              </div>
            </a-card>
          </div>
        </a-col>
        <a-col :span="6">
          <div>
            <a-card>
              <div class="margin-bottom-sm">
                <a-statistic title="Idle"
                             :value="9.3"
                             :precision="2"
                             suffix="%"
                             class="demo-class"
                             :value-style="{ color: '#cf1322' }">
                  <template #prefix>
                    <a-icon type="arrow-down" />
                  </template>
                </a-statistic>
              </div>
              <div>
                <div ref="first4" style="height: 150px;"/>
              </div>
            </a-card>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- 区域2 -->
    <div class="padding-lr-sm padding-top-sm">
      <div class="bg-white">
        <a-row>
          <a-col :span="16">
            <div class="border-right border-solid border-gray">
              <a-tabs>
                <a-tab-pane key="1" tab="成功率">
                  <div class="padding-lr-lg">
                    <div ref="lineGraph" style="height: 364px;"/>
                  </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="参与人数">
                  Content of tab 2
                </a-tab-pane>
              </a-tabs>
            </div>
          </a-col>
          <a-col :span="8">
            <div>
              <div class="border-rb border-solid border-gray">
                <main-title text="测试服务"/>
              </div>
              <div class="padding-lr-lg">
                <a-list item-layout="horizontal" :data-source="data">
                  <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta description="Ant Design, a design language for background applications, is refined by Ant UED Team">
                      <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                      <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 区域3 -->
    <div class="padding-lr-sm padding-top-sm">
      <a-row :gutter="12">
        <a-col :span="12">
          <div class="bg-white">
            <div class="border-bottom border-solid border-gray">
              <main-title text="用户数据"/>
            </div>
            <div class="padding-lr-lg padding-tb">
              <a-row>
                <a-col :span="12">
                  <div>
                    <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
                    <div ref="areaGraph1" style="height: 200px;"/>
                  </div>
                </a-col>
                <a-col :span="12">
                  <div>
                    <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
                    <div ref="areaGraph2" style="height: 200px;"/>
                  </div>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="bg-white">
            <div class="border-bottom border-solid border-gray">
              <main-title text="图饼数据"/>
            </div>
            <div>
              <div ref="lineGraph3" style="height: 293px;"/>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- 区域4 -->
    <div class="padding-lr-sm padding-top-sm">
      <div class="bg-white">
        <div class="border-bottom border-solid border-gray">
          <main-title text="事件数据"/>
        </div>
        <div>
          <div ref="lineGraph4" style="height: 500px;"/>
        </div>
      </div>
    </div>

    <!-- 本地信息 -->
    <div class="padding-sm">
      <div class="bg-white">
        <div class="border-bottom border-solid border-gray">
          <main-title text="本地信息"/>
        </div>
        <div>
          <local-info/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import DataSet from '@antv/data-set'
import { Chart } from '@antv/g2'
// 组件
import MainTitle from '@/components/MainTitle.vue'
import LocalInfo from '@/views/Home/components/LocalInfo.vue'

@Component({
  components: {
    MainTitle,
    LocalInfo
  }
})

export default class Home extends Vue {

  @Provide()
  data: Array<any> = [
    { title: 'Ant Design Title 1' },
    { title: 'Ant Design Title 2' },
    { title: 'Ant Design Title 3' },
    { title: 'Ant Design Title 4' },
    { title: 'Ant Design Title 5' }
  ]

  mounted(): void {
    this.createFirstGraph()
    this.createSecondGraph()
    this.create3Graph()
    this.create4Graph()
    this.createGraph()
    this.createAreaGraph1()
    this.createAreaGraph2()
    this.createGraph3()
    this.createLineGraph4()
  }

  createFirstGraph(): void {
    const data = [
      { time: '9:00-10:00', value: 30 },
      { time: '10:00-11:00', value: 90 },
      { time: '11:00-12:00', value: 50 },
      { time: '12:00-13:00', value: 30 },
      { time: '13:00-14:00', value: 70 }
    ]

    const chart = new Chart({
      container: (this as any).$refs['first1'],
      autoFit: true,
      height: (this as any).$refs['first1'].clientHeight
    })
    chart.data(data)
    chart.scale('value', {
      alias: '销售额(万)',
      nice: true
    })
    chart.axis('time', {
      tickLine: null
    })

    chart.tooltip({
      showMarkers: false
    })
    chart.interaction('active-region')

    chart.interval().position('time*value')
            .style('time', val => {
              if (val === '13:00-14:00') {
                return {
                  fillOpacity: 0.4,
                  lineWidth: 1,
                  stroke: '#636363',
                  lineDash: [3, 2]
                }
              }
              return {
                fillOpacity: 1,
                lineWidth: 0,
                stroke: '#636363',
                lineDash: [3, 2]
              }
            })

    chart.render()
  }

  createSecondGraph(): void {
    const data = [
      { Date: '22 February', 订阅数: 50000, 月收入: 125000 },
      { Date: '28 February', 订阅数: 60000, 月收入: 150000 },
      { Date: '3 March', 订阅数: 100000, 月收入: 250000 },
      { Date: '20 March', 订阅数: 200000, 月收入: 500000 },
      { Date: '7 April', 订阅数: 250000, 月收入: 625000 },
      { Date: '13 June', 订阅数: 210000, 月收入: 525000 },
    ];

    const chart = new Chart({
      container: (this as any).$refs['first2'],
      autoFit: true,
      height: (this as any).$refs['first2'].clientHeight,
      padding: 0
    })

    chart.scale('Date', {
      range: [0, 1],
      tickCount: 10,
      type: 'timeCat',
      mask: 'MM-DD'
    })
    chart.scale({
      range: {
        nice: true,
        sync: true
      },
      value: {
        nice: true,
        sync: true
      }
    })
    chart.axis('value', {
      label: {
        formatter: (text) => {
          return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        }
      }
    })
    chart.tooltip({
      showCrosshairs: true,
      shared: true
    })

    const ds = new DataSet()

    // view1
    const dv = ds
            .createView()
            .source(data)
            .transform({
              type: 'map',
              callback(row) {
                row.range = [row.订阅数, row.月收入]
                return row
              }
            })
    const view1 = chart.createView({
      padding: [8, 8, 48, 64]
    })
    view1.data(dv.rows)
    view1.axis(false)
    view1.tooltip(false)
    view1
            .area()
            .position('Date*range')
            .color('#8d8d8d')
            .style({
              fillOpacity: 0.1
            })

    // view2
    const dv2 = ds
            .createView()
            .source(data)
            .transform({
              type: 'fold',
              fields: ['订阅数', '月收入'],
              key: 'type',
              value: 'value',
              retains: ['Date']
            })
    const view2 = chart.createView({
      padding: [8, 8, 48, 64]
    })

    view2.data(dv2.rows)
    view2.line().position('Date*value').color('type')
    view2.point().position('Date*value').color('type').shape('circle')
    chart.removeInteraction('legend-filter') // 关闭图例过滤交互
    chart.render()
  }

  create3Graph(): void {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 }
    ]
    const chart = new Chart({
      container: (this as any).$refs['first3'],
      autoFit: true,
      height: (this as any).$refs['first3'].clientHeight
    })

    chart.data(data)

    chart.tooltip({
      showMarkers: false
    })

    chart.interval().position('year*value')

    chart.interaction('element-active')

    chart.render()
  }

  create4Graph(): void {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
    ];
    const chart = new Chart({
      container: (this as any).$refs['first4'],
      autoFit: true,
      height: (this as any).$refs['first4'].clientHeight
    })

    chart.data(data);
    chart.tooltip({
      showMarkers: false
    })

    chart
            .interval()
            .position('year*value')
            .color('year')

    chart.interaction('element-highlight')
    chart.interaction('element-list-highlight')
    chart.interaction('legend-highlight')
    chart.interaction('axis-label-highlight')

    chart.render()
  }

  createGraph(): void {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/fireworks-sales.json')
        .then(res => res.json())
        .then(data => {
          const chart = new Chart({
            container: (this as any).$refs['lineGraph'],
            autoFit: true,
            padding: [20, 50, 30, 50],
            height: (this as any).$refs['lineGraph'].clientHeight
          })
          chart.data(data)
          chart.scale('Data', {
            range: [0, 1],
            tickCount: 10,
            type: 'timeCat'
          })
          chart.scale('sales', {
            nice: true
          })
          chart.axis('sales', {
            label: {
              formatter: text => {
                return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
              }
            }
          })
          chart.tooltip({
            showCrosshairs: true
          })

          chart.annotation().dataMarker({
            position: ['2014-01', 1750],
            top: true,
            text: {
              content: '因政策调整导致销量下滑',
              style: {
                fontSize: 13
              }
            },
            line: {
              length: 30
            }
          })

          chart.line().position('Data*sales')
          chart.area().position('Data*sales')
          chart.render()
        })
  }

  createAreaGraph1(): void {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/fireworks-sales.json')
        .then(res => res.json())
        .then(data => {
          const chart = new Chart({
            container: (this as any).$refs['areaGraph1'],
            autoFit: true,
            padding: [20, 50, 30, 50],
            height: (this as any).$refs['areaGraph1'].clientHeight
          })
          chart.data(data)
          chart.scale('Data', {
            range: [0, 1],
            tickCount: 10,
            type: 'timeCat'
          })

          chart.line().position('Data*sales')
          chart.area().position('Data*sales')
          chart.render()
        })
  }

  createAreaGraph2(): void {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/fireworks-sales.json')
        .then(res => res.json())
        .then(data => {
          const chart = new Chart({
            container: (this as any).$refs['areaGraph2'],
            autoFit: true,
            padding: [20, 50, 30, 50],
            height: (this as any).$refs['areaGraph2'].clientHeight
          })
          chart.data(data)
          chart.scale('Data', {
            range: [0, 1],
            tickCount: 10,
            type: 'timeCat'
          })

          chart.line().position('Data*sales')
          chart.area().position('Data*sales')
          chart.render()
        })
  }


  createGraph3(): void {
    const data = [
      { item: '事例一', count: 40, percent: 0.4 },
      { item: '事例二', count: 21, percent: 0.21 },
      { item: '事例三', count: 17, percent: 0.17 },
      { item: '事例四', count: 13, percent: 0.13 },
      { item: '事例五', count: 9, percent: 0.09 },
    ];

    const chart = new Chart({
      container: (this as any).$refs['lineGraph3'],
      autoFit: true,
      padding: [20, 50, 30, 50],
      height: (this as any).$refs['lineGraph3']
    })

    chart.data(data)

    chart.coordinate('theta', {
      radius: 0.85
    })

    chart.scale('percent', {
      formatter: (val) => {
        val = val * 100 + '%'
        return val
      }
    })

    chart.tooltip({
      showTitle: false,
      showMarkers: false
    })
    chart.axis(false) // 关闭坐标轴

    const interval = chart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('item')
        .label('percent', {
          offset: -40,
          style: {
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
            fill: '#fff'
          }
        })
        .tooltip('item*percent', (item, percent) => {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
    chart.interaction('element-single-selected')
    chart.render()

    // 默认选择
    interval.elements[0].setState('selected', true)
  }

  createLineGraph4() {
    const SECOND = 1000;
    const MINUTE = 1000 * 60;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;

    function toInteger(number: number = 0, fix = 1) {
      if (Math.round(number) === number) {
        return number;
      }
      return Number(number).toFixed(fix);
    }

    function humanizeDuration(duration: number = 0, fix = 1) {
      if (duration === 0) {
        return '0';
      }
      if (duration < MINUTE) {
        return toInteger(duration / SECOND, fix) + ' 秒';
      }
      if (duration < HOUR) {
        return toInteger(duration / MINUTE, fix) + ' 分';
      }
      if (duration < DAY) {
        return toInteger(duration / HOUR, fix) + '小时';
      }
      return toInteger(duration / HOUR / 24, fix) + ' 天';
    }

    const data = [
      { date: 1489593600000, pv: 17, time: 12351000 },
      { date: 1489680000000, pv: 10, time: 18000 },
      { date: 1489766400000, pv: 3, time: 0 },
      { date: 1489852800000, pv: 3, time: 0 },
      { date: 1489939200000, pv: 18, time: 21157000 },
      { date: 1490025600000, pv: 32, time: 3543000 },
      { date: 1490112000000, pv: 25, time: 10000 },
      { date: 1490198400000, pv: 23, time: 24000 },
      { date: 1490284800000, pv: 7, time: 0 },
    ];

    const chart = new Chart({
      container: (this as any).$refs['lineGraph4'],
      autoFit: true,
      padding: [30, 50, 50, 50],
      height: (this as any).$refs['lineGraph4'].clientHeight,
    })

    chart.data(data)
    chart.scale({
      date: {
        alias: '日期',
        type: 'time'
      },
      pv: {
        alias: '进入次数',
        min: 0,
        sync: true, // 将 pv 字段数值同 time 字段数值进行同步
        nice: true
      },
      time: {
        alias: '平均时长',
        formatter: (value) => {
          return humanizeDuration(value, 0);
        },
        sync: true,  // 将 pv 字段数值同 time 字段数值进行同步
        nice: true
      },
      count: {
        alias: '次数'
      }
    })

    chart.axis('time', {
      grid: null,
      title: {}
    })
    chart.axis('pv', {
      title: {}
    })

    chart.tooltip({
      showCrosshairs: true,
      shared: true
    })

    chart
        .line()
        .position('date*pv')
        .color('#4FAAEB')
    chart
        .line()
        .position('date*time')
        .color('#9AD681')
        .shape('dash')
    chart.render()
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }

  .bg {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url('~@/assets/image/home.jpg');
  }
</style>
