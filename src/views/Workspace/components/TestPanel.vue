<template>
  <div class="workspace-height bg-white">
    <div class="padding border-bottom border-solid border-gray">
      <a-row :gutter="16">
        <a-col :span="4">
          <a-card size="small">
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
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card size="small">
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
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card size="small">
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
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card size="small">
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
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card size="small">
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
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card size="small">
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
          </a-card>
        </a-col>
      </a-row>
    </div>
    <!-- 图形区 -->
    <div class="padding border-bottom border-solid border-gray">
      <div id="radarContainer" ref="radarContainer" class="graph">
        <!-- 图形 -->
      </div>
    </div>
    <!-- 表格区 -->
    <div class="padding">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-table :columns="columns"
                   :data-source="tableData"
                   bordered
                   size="small"
                   rowKey="id"
                   :scroll="{ x: true, y: 300 }"
                   :pagination="false">
            <!-- 用户名 -->
            <template slot="username" slot-scope="text">
              <span class="text-blue">{{ text || '-/-' }}</span>
            </template>
            <!-- 姓名 -->
            <template slot="realName" slot-scope="text">
              <span>{{ text || '-/-' }}</span>
            </template>
            <!-- 性别 -->
            <template slot="gender" slot-scope="text">
              <span>{{ $constant.user.gender_config[text] || '-/-' }}</span>
            </template>
          </a-table>
        </a-col>
        <a-col :span="8">
          <a-table :columns="columns"
                   :data-source="tableData"
                   bordered
                   size="small"
                   rowKey="id"
                   :scroll="{ x: true, y: 300 }"
                   :pagination="false">
            <!-- 用户名 -->
            <template slot="username" slot-scope="text">
              <span class="text-blue">{{ text || '-/-' }}</span>
            </template>
            <!-- 姓名 -->
            <template slot="realName" slot-scope="text">
              <span>{{ text || '-/-' }}</span>
            </template>
            <!-- 性别 -->
            <template slot="gender" slot-scope="text">
              <span>{{ $constant.user.gender_config[text] || '-/-' }}</span>
            </template>
          </a-table>
        </a-col>
        <a-col :span="8">
          <a-table :columns="columns"
                   :data-source="tableData"
                   bordered
                   size="small"
                   rowKey="id"
                   :scroll="{ x: true, y: 300 }"
                   :pagination="false">
            <!-- 用户名 -->
            <template slot="username" slot-scope="text">
              <span class="text-blue">{{ text || '-/-' }}</span>
            </template>
            <!-- 姓名 -->
            <template slot="realName" slot-scope="text">
              <span>{{ text || '-/-' }}</span>
            </template>
            <!-- 性别 -->
            <template slot="gender" slot-scope="text">
              <span>{{ $constant.user.gender_config[text] || '-/-' }}</span>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide } from 'vue-property-decorator'
  import { Chart, Util } from '@antv/g2'

  @Component({
    components: {}
  })

  export default class Visualization extends Vue {
    @Provide() chart: any = null

    @Provide()
    columns: any = [
      {
        title: '序号',
        width: 70,
        align: 'center',
        customRender: (text: any, record: any, index: number) => `${index + 1}`
      },
      {
        title: '用户名',
        key: 'username',
        dataIndex: 'username',
        slots: { title: 'customTitle' },
        width: 160,
        ellipsis: true,
        scopedSlots: { customRender: 'username' }
      },
      {
        title: '姓名',
        key: 'realName',
        dataIndex: 'realName',
        slots: { title: 'customTitle' },
        width: 160,
        ellipsis: true,
        scopedSlots: { customRender: 'realName' }
      },
      {
        title: '性别',
        key: 'gender',
        dataIndex: 'gender',
        slots: { title: 'customTitle' },
        width: 70,
        ellipsis: true,
        scopedSlots: { customRender: 'gender' }
      }
    ]

    @Provide()
    tableData: any = [
      {
        id: 1,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 2,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 3,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 4,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 5,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 6,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 7,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 8,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 9,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 10,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      },
      {
        id: 11,
        username: 'wanghaitao',
        realName: '王海涛',
        portrait: '',
        gender: 1,
        birthday: 5434223232332,
        hometown: [],
        phone: '13812345678',
        email: '615940742@qq.com',
        createTime: 133567896554,
        updateTime: 435445454666,
        introduce: 'hahahahahah',
        isAllow: true
      }
    ]

    mounted(): void {
      this.initChart()
    }

    // +---------------------------------------------------------------------------------------------
    // | 雷达图
    // +---------------------------------------------------------------------------------------------
    // 画图
    initChart(): void {
      const data = [
        { type: '一线城市', value: 0.19 },
        { type: '二线城市', value: 0.21 },
        { type: '三线城市', value: 0.27 },
        { type: '四线及以下', value: 0.33 }
      ]

      const chart = new Chart({
        container: (this as any).$refs['radarContainer'],
        autoFit: true,
        height: 500,
      })
      chart.data(data)

      chart.coordinate('theta', {
        radius: 0.75
      })

      chart.tooltip({
        showMarkers: false
      })

      const interval = chart
              .interval()
              .adjust('stack')
              .position('value')
              .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060'])
              .style({ opacity: 0.4 })
              .state({
                active: {
                  style: (element) => {
                    const shape = element.shape
                    return {
                      matrix: Util.zoom(shape, 1.1),
                    }
                  }
                }
              })
              .label('type', (val) => {
                const opacity = val === '四线及以下' ? 1 : 0.5
                return {
                  offset: -30,
                  style: {
                    opacity,
                    fill: 'white',
                    fontSize: 12,
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, .45)'
                  },
                  content: (obj) => {
                    return obj.type + '\n' + obj.value + '%'
                  }
                }
              })

      chart.interaction('element-single-selected')

      chart.render()
    }

  }
</script>

<style lang="scss" scoped>
  .graph {
    /*background-color: #f8f8f8;*/
    width: 400px;
    height: 400px;
  }
</style>
