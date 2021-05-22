<template>
  <div>
    <div class="main-content bg-white">
      <!-- 按钮区 -->
      <div class="padding-lr-lg padding-tb border-bottom border-solid border-gray">
        <a-input-search placeholder="请输入事件名称"
                        enter-button
                        style="width: 250px;"
                        @search="onSearch"/>
      </div>
      <!-- 按钮区 -->
      <div class="padding-lr-lg padding-tb">
        <a-button type="primary" class="margin-right" icon="plus" @click="onAddEvent">新增</a-button>
        <a-popconfirm title="确定删除选中用户吗？" ok-text="确定" cancel-text="取消" @confirm="onDeleteUsers">
          <a-icon slot="icon" type="question-circle-o" style="color: red"/>
          <a-button icon="delete" class="margin-right">批量删除</a-button>
        </a-popconfirm>
        <a-button icon="cloud-upload" class="margin-right" @click="onImport">导入</a-button>
        <a-popconfirm title="确定导出吗？" ok-text="确定" cancel-text="取消" @confirm="onExport">
          <a-button icon="download" class="margin-right">导出</a-button>
        </a-popconfirm>
      </div>
      <!-- 表格区 -->
      <div class="padding-lr-lg">
        <a-table :columns="columns"
                 :data-source="tableData"
                 bordered
                 rowKey="id"
                 :scroll="{ x: true, y: 600 }"
                 :pagination="false">
          <!-- 事件名称 -->
          <template slot="name" slot-scope="text">
            <span class="text-blue pointer" @click="onGotoDetail">{{ text || '-/-' }}</span>
          </template>
          <!-- 影响内容 -->
          <template slot="influence" slot-scope="text">
            <span>{{ text || '-/-' }}</span>
          </template>
          <!-- 影响时间（开始） -->
          <template slot="startTime" slot-scope="text, record">
            <span>{{ record.createTime ? $moment(record.createTime).format('YYYY-MM-DD') : '-/-' }}</span>
          </template>
          <!-- 影响时间（结束） -->
          <template slot="endTime" slot-scope="text, record">
            <span>{{ record.createTime ? $moment(record.createTime).format('YYYY-MM-DD') : '-/-' }}</span>
          </template>
          <!-- 创建时间 -->
          <template slot="createTime" slot-scope="text, record">
            <span>{{ record.createTime ? $moment(record.createTime).format('YYYY-MM-DD') : '-/-' }}</span>
          </template>
          <!-- 修改时间 -->
          <template slot="updateTime" slot-scope="text, record">
            <span>{{ record.updateTime ? $moment(record.updateTime).format('YYYY-MM-DD') : '-/-' }}</span>
          </template>
          <!-- 描述 -->
          <template slot="introduce" slot-scope="text">
            <span>{{ text || '-/-' }}</span>
          </template>
          <!-- 操作 -->
          <template slot="action" slot-scope="text">
            <a @click="onEdit(text)">编辑</a>
            <a-divider type="vertical"/>
            <a @click="onGotoDetail(text)">详情</a>
            <a-divider type="vertical"/>
            <a-popconfirm :title="`确定${text.isAllow ? '开启' : '禁用'}吗？`" ok-text="确定" cancel-text="取消" @confirm="onAllowUser(text)">
              <a-icon slot="icon" type="question-circle-o" style="color: red"/>
              <a href="#">{{ text.isAllow ? '禁用' : '开启' }}</a>
            </a-popconfirm>
            <a-divider type="vertical"/>
            <a-popconfirm title="确定删除吗？" ok-text="确定" cancel-text="取消" @confirm="onDeleteUser(text)">
              <a-icon slot="icon" type="question-circle-o" style="color: red"/>
              <a href="#">删除</a>
            </a-popconfirm>
          </template>
        </a-table>
      </div>
      <!-- 分页区 -->
      <div class="padding-lr-lg padding-tb flex justify-end">
        <a-pagination show-quick-jumper
                      :default-current="2"
                      :total="total"
                      @change="onChange"/>
      </div>
    </div>

    <!-- 组件：新增/编辑事件对话框 -->
    <event-drawer ref="EventDrawer"/>

    <!-- 组件：导入事件对话框 -->
    <event-import-modal ref="EventImportModal"/>

    <!-- 组件：事件详情 -->
    <event-detail-index ref="EventDetailIndex"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
// 组件
import EventDrawer from './TableManagement/EventDrawer.vue'
import EventImportModal from './TableManagement/EventImportModal.vue'
import EventDetailIndex from '@/components/EventDetail/EventDetailIndex.vue'

@Component({
  components: {
    EventDrawer,
    EventImportModal,
    EventDetailIndex
  }
})

export default class EventTable extends Vue {

  @Provide() columns: any = [
    {
      title: '序号',
      width: 70,
      align: 'center',
      customRender: (text: any, record: any, index: number) => `${index + 1}`
    },
    {
      title: '事件名称',
      key: 'name',
      dataIndex: 'name',
      slots: { title: 'customTitle' },
      width: 180,
      ellipsis: true,
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '影响时间（开始）',
      key: 'startTime',
      dataIndex: 'startTime',
      slots: { title: 'customTitle' },
      width: 160,
      ellipsis: true,
      scopedSlots: { customRender: 'startTime' }
    },
    {
      title: '影响时间（结束）',
      key: 'endTime',
      dataIndex: 'endTime',
      slots: { title: 'customTitle' },
      width: 160,
      ellipsis: true,
      scopedSlots: { customRender: 'endTime' }
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      width: 160,
      ellipsis: true,
      scopedSlots: { customRender: 'createTime' }
    },
    {
      title: '修改时间',
      key: 'updateTime',
      dataIndex: 'updateTime',
      width: 160,
      ellipsis: true,
      scopedSlots: { customRender: 'updateTime' }
    },
    {
      title: '描述',
      key: 'introduce',
      dataIndex: 'introduce',
      ellipsis: true,
      scopedSlots: { customRender: 'introduce' }
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      scopedSlots: { customRender: 'action' }
    }
  ]
  @Provide() tableData: any = [
    {
      id: 1,
      name: '新疆棉花事件事件事件',
      influence: '123',
      startTime: 133567896554,
      endTime: 133567896554,
      createTime: 133567896554,
      updateTime: 435445454666,
      introduce: '隔热肉丸免费玩电脑，呢，tertiary，人头，人呢，她男人，问题，二胎；隔热肉丸免费玩电脑，呢，tertiary，人头，人呢，她男人，问题，二胎；隔热肉丸免费玩电脑，呢，tertiary，人头，人呢，她男人，问题，二胎；隔热肉丸免费玩电脑，呢，tertiary，人头，人呢，她男人，问题，二胎'
    }
  ]

  @Provide() total: number = 9999

  onSearch(): void {
    console.log('onSearch')
  }

  onAddEvent(): void {
    (this.$refs['EventDrawer'] as any).showDrawer({
      title: '新增事件'
    })
  }

  onDeleteUsers(): void {
    console.log('onDeleteUsers')
  }

  onImport(): void {
    (this.$refs['EventImportModal'] as any).showModal()
  }

  onAllowUser(): void {
    console.log('onAllowUser')
  }

  rowSelection(val: any): any {
    console.log('rowSelection', val)
    return 123
  }

  onEdit(): void {
    console.log('onEdit')
  }

  /**
   * 查看详情
   */
  onGotoDetail(): void {
    (this.$refs['EventDetailIndex'] as any).showDrawer({
      title: '事件详情'
    })
  }

  onExport(): void {
    console.log('onExport')
  }

  onDeleteUser(): void {
    console.log('onDeleteUser')
  }

  onChange(): void {
    console.log('onChange')
  }

  getHometown(text: any): any {
    return text
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    height: calc(100vh - 133px);
    overflow-y: auto;
  }
</style>
