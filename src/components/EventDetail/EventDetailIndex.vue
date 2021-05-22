<template>
  <a-drawer v-if="visible"
            :visible="visible"
            title="事件详情"
            :width="1200"
            :closable="true"
            :mask-closable="false"
            placement="right"
            :body-style="{ paddingBottom: '80px' }"
            @close="hideDrawer">
    <div>
      <div class="margin-bottom-xl">
        <!-- 相关信息 -->
        <div class="margin-bottom">
          <div>
            <a-row>
              <a-col :span="6">
                <a-statistic title="参与人数"
                             :value="78"
                             :value-style="{ color: '#40a9ff' }">
                </a-statistic>
              </a-col>
              <a-col :span="6">
                <a-statistic title="关注人数"
                             :value="3277"
                             :value-style="{ color: '#3f8600' }">
                </a-statistic>
              </a-col>
              <a-col :span="6">
                <a-statistic title="点赞"
                             :value="287"
                             :value-style="{ color: '#e6a23c' }">
                </a-statistic>
              </a-col>
              <a-col :span="6">
                <a-statistic title="评分"
                             :value="9.28"
                             :precision="2"
                             :value-style="{ color: '#f56c6c' }">
                </a-statistic>
              </a-col>
            </a-row>
          </div>
        </div>
        <!-- 基本信息 -->
        <a-divider>基本信息</a-divider>
        <div>
          <a-descriptions layout="vertical" :column="4">
            <a-descriptions-item label="事件名称">新疆棉事件</a-descriptions-item>
            <a-descriptions-item label="创建人">王海涛</a-descriptions-item>
            <a-descriptions-item label="创建时间">{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</a-descriptions-item>
          </a-descriptions>
          <a-descriptions layout="vertical" :column="4">
            <a-descriptions-item label="开始时间">{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</a-descriptions-item>
            <a-descriptions-item label="影响启时">{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</a-descriptions-item>
            <a-descriptions-item label="影响尾时">{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</a-descriptions-item>
            <a-descriptions-item label="结束时间">{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</a-descriptions-item>
          </a-descriptions>
          <!-- 事件描述 -->
          <a-descriptions layout="vertical" :column="4">
            <a-descriptions-item label="事件描述">
              2019年7月，美国国际开发署向欧洲盟友兜售了一份“反俄计划”，名为《抵抗克里姆林宫邪恶影响力发展框架》，号称要帮助欧洲摆脱所谓的俄罗斯干涉和侵犯。俄罗斯外交部对此予以强烈谴责，并指出单从这份文件的名称就坐实了美国国际开发署的意图不是打造合作，而是进行意识形态斗争和洗脑工作。
              早在2012年，俄罗斯外交部就要求美国国际开发署停止在俄境内的活动。因为该机构试图通过资金对俄罗斯各级选举等政治进程施加影响。
              2013年，时任玻利维亚总统莫拉莱斯也曾公开宣布将美国国际开发署驱逐出境，指责其活动含有政治目的，阴谋反对玻利维亚政府。
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </div>
      <!-- 时间 -->
      <a-divider>时间线</a-divider>
      <div>
        <div ref="timelineGraph" style="height: 150px;"/>
      </div>
      <!-- 逻辑导图 -->
      <a-divider>逻辑导图</a-divider>
      <div>
        <div ref="logicGraph" id="logicGraph" style="height: 800px; background-color: #F8F8F8;"/>
      </div>
      <!-- 详情 -->
      <a-divider>详情</a-divider>
      <div class="margin-bottom-sm">
        <div>
          <a-tabs type="card" @change="onChangeTab">
            <a-tab-pane key="1" tab="事件观点">
              <div>
                <a-comment>
                  <span slot="actions" key="comment-nested-reply-to">Reply to</span>
                  <a slot="author">Han Solo</a>
                  <a-avatar slot="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"/>
                  <p slot="content">
                    We supply a series of design principles, practical patterns and high quality design resources
                    (Sketch and Axure).
                  </p>
                  <a-comment>
                    <span slot="actions">Reply to</span>
                    <a slot="author">Han Solo</a>
                    <a-avatar slot="avatar"
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                              alt="Han Solo"/>
                    <p slot="content">
                      We supply a series of design principles, practical patterns and high quality design
                      resources (Sketch and Axure).
                    </p>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                  </a-comment>
                  <a-comment>
                    <span slot="actions">Reply to</span>
                    <a slot="author">Han Solo</a>
                    <a-avatar slot="avatar"
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                              alt="Han Solo"/>
                    <p slot="content">
                      We supply a series of design principles, practical patterns and high quality design
                      resources (Sketch and Axure).
                    </p>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                  </a-comment>
                  <a-comment>
                    <span slot="actions">Reply to</span>
                    <a slot="author">Han Solo</a>
                    <a-avatar slot="avatar"
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                              alt="Han Solo"/>
                    <p slot="content">
                      We supply a series of design principles, practical patterns and high quality design
                      resources (Sketch and Axure).
                    </p>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                  </a-comment>
                  <a-comment>
                    <span slot="actions">Reply to</span>
                    <a slot="author">Han Solo</a>
                    <a-avatar slot="avatar"
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                              alt="Han Solo"/>
                    <p slot="content">
                      We supply a series of design principles, practical patterns and high quality design
                      resources (Sketch and Axure).
                    </p>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                  </a-comment>
                  <a-comment>
                    <span slot="actions">Reply to</span>
                    <a slot="author">Han Solo</a>
                    <a-avatar slot="avatar"
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                              alt="Han Solo"/>
                    <p slot="content">
                      We supply a series of design principles, practical patterns and high quality design
                      resources (Sketch and Axure).
                    </p>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                    <a-comment>
                      <span slot="actions">Reply to</span>
                      <a slot="author">Han Solo</a>
                      <a-avatar slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"/>
                      <p slot="content">
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                      </p>
                    </a-comment>
                  </a-comment>
                </a-comment>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="事件跟踪">
              <event-log/>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
      <!-- 脚部 -->
      <div style="position: absolute;right: 0;bottom: 0;width: 100%;border-top: 1px solid #e9e9e9; padding: 10px 16px 10px 8px;background: #fff;text-align: right;z-index: 1;">
        <div class="flex justify-between">
          <div></div>
          <div>
            <a-button class="margin-right" :disabled="loading" @click="hideDrawer">取消</a-button>
          </div>
        </div>
      </div>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
// 插件
import { Chart } from '@antv/g2'
import DataSet from '@antv/data-set'
import G6 from '@antv/g6'
import DeXie from 'dexie'
// import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
// 组件
import MainTitle from '@/components/MainTitle.vue'
import EventLog from '@/components/EventDetail/EventLog.vue'

@Component({
  components: {
    MainTitle,
    EventLog
  }
})

export default class EventDetailIndex extends Vue {

  @Provide()
  locale: any = ''

  @Provide()
  form: {
    name: string,
    startTime: string,
    endTime: string,
    description: string
    answerList: Array<any>
  } = {
    name: '',
    startTime: '',
    endTime: '',
    description: '',
    answerList: []
  }

  @Provide()
  rules: any = {
    name: [
      { required: true, message: '请输入事件名称', trigger: 'blur' },
      { min: 4, max: 20, message: '字符长度范围应在4~20个', trigger: 'blur' }
    ],
    startTime: [
      { required: true, message: '请选择影响的开始时间', trigger: ['blur', 'change'] }
    ],
    endTime: [
      { required: true, message: '请选择影响的结束时间', trigger: ['blur', 'change'] }
    ],
    description: [
      { required: true, message: '请填写事件描述', trigger: 'blur' },
      { max: 1000, message: '字符长度范围应在1000字内', trigger: 'blur' }
    ]
  }

  @Provide()
  visible: boolean = false

  @Provide()
  loading: boolean = false

  @Provide()
  options: Array<any> = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ]

  // +----------------------------------------------------------------------------------------------------------------
  // | 抽屉
  // +----------------------------------------------------------------------------------------------------------------
  // 显示抽屉
  showDrawer(param: any): void {
    this.visible = true
    // TODO
    setTimeout(() => {
      this.initChart()
      this.createLogicGraph()
    }, 1000)
  }

  // 关闭抽屉
  hideDrawer(): void {
    this.visible = false
  }

  onChangeTab(): void {
    console.log('onChangeTab')
  }

  // 画图
  initChart(): void {
    const data = [
      { group: 'Gender', type: '新疆棉事件', total: 200, 'Strongly Agree': 51.0, Agree: 39.0, 'No Opinion': 6.0, Disagree: 3.5, 'Strongly Disagree': 0.5 }
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
      container: (this as any).$refs['timelineGraph'],
      autoFit: true,
      height: (this as any).$refs['timelineGraph'].clientHeight
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

  createLogicGraph(): void {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
            .then((res) => res.json())
            .then((data) => {
              const container: any = document.getElementById('logicGraph')
              const width = container.scrollWidth
              const height = container.scrollHeight || 500
              const graph = new G6.TreeGraph({
                container: 'logicGraph',
                width,
                height,
                modes: {
                  default: [
                    {
                      type: 'collapse-expand',
                      onChange: function onChange(item: any, collapsed) {
                        const data = item.getModel()
                        data.collapsed = collapsed
                        return true
                      }
                    },
                    'drag-canvas',
                    'zoom-canvas'
                  ]
                },
                defaultNode: {
                  size: 26,
                  anchorPoints: [
                    [0, 0.5],
                    [1, 0.5]
                  ]
                },
                defaultEdge: {
                  type: 'cubic-horizontal'
                },
                layout: {
                  type: 'compactBox',
                  direction: 'LR',
                  getId: function getId(d: any) {
                    return d.id
                  },
                  getHeight: function getHeight() {
                    return 16
                  },
                  getWidth: function getWidth() {
                    return 16
                  },
                  getVGap: function getVGap() {
                    return 10
                  },
                  getHGap: function getHGap() {
                    return 100
                  }
                }
              })

              graph.node(function (node) {
                return {
                  label: node.id,
                  labelCfg: {
                    offset: 10,
                    position: node.children && node.children.length > 0 ? 'left' : 'right'
                  }
                }
              })

              graph.data(data)
              graph.render()
              graph.fitView()

              if (typeof window !== 'undefined')
                window.onresize = () => {
                  if (!graph || graph.get('destroyed')) return
                  if (!container || !container.scrollWidth || !container.scrollHeight) return
                  graph.changeSize(container.scrollWidth, container.scrollHeight)
                }
            })
  }

}
</script>

<style lang="scss" scoped></style>
