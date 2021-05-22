<template>
  <div>
    <a-layout>
      <a-layout-sider width="250">
        <div class="border-bottom border-solid border-gray">
          <main-title text="概念">
            <div slot="right">
              <a-dropdown>
                <a-icon type="setting"/>
                <a-menu slot="overlay">
                  <a-menu-item><a href="javascript:void(0);" @click="onShowStockModal"><a-icon type="plus" class="blank"/>新增</a></a-menu-item>
                  <a-menu-item><a href="javascript:void(0);"><a-icon type="edit" class="blank"/>修改</a></a-menu-item>
                  <a-menu-item><a href="javascript:void(0);"><a-icon type="delete" class="blank"/>删除</a></a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </main-title>
        </div>
        <div class="main-content padding-lr padding-top">
          <a-input-search style="margin-bottom: 8px"
                          placeholder="概念名称"
                          @change="onChange" />
          <a-tree :treeData="treeData"
                  :show-line="true"
                  :show-icon="true"
                  draggable
                  :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
                  @select="onSelect">
            <a-icon slot="icon" type="carry-out" />
            <a-tree-node key="0-0">
              <a-icon slot="icon" type="carry-out" />
              <span slot="title" style="color: #1890ff">科技板块</span>
              <a-tree-node key="0-0-0" title="5G">
                <a-icon slot="icon" type="carry-out" />
                <a-tree-node key="0-0-0-0" title="4G">
                  <a-icon slot="icon" type="carry-out" />
                </a-tree-node>
                <a-tree-node key="0-0-0-1" title="3G">
                  <a-icon slot="icon" type="carry-out" />
                </a-tree-node>
              </a-tree-node>
              <a-tree-node key="0-0-1" title="面板">
                <a-icon slot="icon" type="carry-out" />
                <a-tree-node key="0-0-1-0" title="小面板">
                  <a-icon slot="icon" type="carry-out" />
                </a-tree-node>
              </a-tree-node>
              <a-tree-node key="0-0-2" title="半导体">
                <a-icon slot="icon" type="carry-out" />
                <a-tree-node key="0-0-2-0" title="小半导体">
                  <a-icon slot="icon" type="carry-out" />
                </a-tree-node>
              </a-tree-node>
            </a-tree-node>
          </a-tree>
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <div class="padding-left-sm">
            <div class="bg-white">
              <!-- 标题 -->
              <div class="border-bottom border-solid border-gray">
                <main-title text="股票" iconfont="icon-gupiao"/>
              </div>
              <div class="main-content">
                <!-- 按钮区 -->
                <div class="padding-lr-lg padding-tb border-bottom border-solid border-gray">
                  <a-input-search placeholder="请输入股票名称"
                                  enter-button
                                  style="width: 250px;"
                                  @search="onSearch"/>
                </div>
                <!-- 按钮区 -->
                <div class="padding-lr-lg padding-tb">
                  <a-button type="primary" class="margin-right" icon="plus" @click="onAddUser">新增</a-button>
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
                    <!-- 用户名 -->
                    <template slot="username" slot-scope="text">
                      <span>{{ text || '-/-' }}</span>
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
            </div>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>

    <!-- 组件：新增/编辑概念对话框 -->
    <Concept-modal ref="ConceptModal"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Provide} from 'vue-property-decorator'
// 组件
import MainTitle from '@/components/MainTitle.vue'
import ConceptModal from '@/views/Application/StockManagement/ConceptModal.vue'

@Component({
  components: {
    MainTitle,
    ConceptModal
  }
})

export default class StockManagement extends Vue {

  @Provide()
  treeData: Array<any> = [
    {
      title: '科技',
      key: '0-0',
      slots: {
        icon: 'smile'
      },
      children: [
        {
          title: '5G',
          key: '0-0-0',
          slots: { icon: 'meh' },
          children: [
            { title: '华为', key: '1-0-0', slots: { icon: 'meh' } },
            { title: '联通', key: '1-0-1', scopedSlots: { icon: 'custom' } }
          ]
        },
        {
          title: '4G',
          key: '0-0-1',
          scopedSlots: { icon: 'custom' } }
      ]
    },
    {
      title: 'parent 1',
      key: '1-0',
      slots: {
        icon: 'smile'
      },
      children: [
        { title: 'leaf', key: '1-0-0', slots: { icon: 'meh' } },
        { title: 'leaf', key: '1-0-1', scopedSlots: { icon: 'custom' } }
      ]
    }
  ]

  @Provide() columns: any = [
    {
      title: '序号',
      width: 70,
      align: 'center',
      customRender: (text: any, record: any, index: number) => `${index + 1}`
    },
    {
      title: '股票名称',
      key: 'username',
      dataIndex: 'username',
      slots: { title: 'customTitle' },
      width: 120,
      ellipsis: true,
      scopedSlots: { customRender: 'username' }
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      width: 120,
      ellipsis: true,
      scopedSlots: { customRender: 'createTime' }
    },
    {
      title: '修改时间',
      key: 'updateTime',
      dataIndex: 'updateTime',
      width: 120,
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
      width: 110,
      align: 'center',
      fixed: 'right',
      ellipsis: true,
      scopedSlots: { customRender: 'action' }
    }
  ]
  @Provide() tableData: any = [
    {
      id: 1,
      username: '爱婴室',
      createTime: 133567896554,
      updateTime: 435445454666,
      introduce: 'hahahahahah',
      isAllow: true
    },
    {
      id: 2,
      username: '奥美医疗',
      createTime: 133567896554,
      updateTime: 435445454666,
      introduce: 'hahahahahah',
      isAllow: true
    },
    {
      id: 3,
      username: '山西汾酒',
      createTime: 133567896554,
      updateTime: 435445454666,
      introduce: 'hahahahahah',
      isAllow: true
    },
    {
      id: 4,
      username: '山西焦煤',
      createTime: 133567896554,
      updateTime: 435445454666,
      introduce: 'hahahahahah',
      isAllow: true
    },
    {
      id: 5,
      username: '华银电力',
      createTime: 133567896554,
      updateTime: 435445454666,
      introduce: 'hahahahahah',
      isAllow: true
    }
  ]
  @Provide() total: number = 9999

  @Provide()
  showLine: boolean= false

  @Provide()
  showIcon: boolean= false

  @Provide() gData = []

  // +------------------------------------------------------------------------------------------------------------------
  // | 概念
  // +------------------------------------------------------------------------------------------------------------------
  // 打开对话框
  onShowStockModal(): void {
    (this as any).$refs['ConceptModal'].showModal()
  }

  onDragEnter(info: any) {
    console.log(info)
    // expandedKeys 需要受控时设置
    // this.expandedKeys = info.expandedKeys
  }

  onDrop(info: any) {
    console.log(info)
    const dropKey = info.node.eventKey
    const dragKey = info.dragNode.eventKey
    const dropPos = info.node.pos.split('-')
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
    const loop = (data: any, key: any, callback: any) => {
      data.forEach((item: any, index: any, arr: any) => {
        if (item.key === key) {
          return callback(item, index, arr)
        }
        if (item.children) {
          return loop(item.children, key, callback)
        }
      });
    };
    const data = [...this.gData]

    // Find dragObject
    let dragObj: any
    loop(data, dragKey, (item: any, index: any, arr: any) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item: any) => {
        item.children = item.children || []
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj)
      })
    } else if (
            (info.node.children || []).length > 0 && // Has children
            info.node.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item: any) => {
        item.children = item.children || []
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.unshift(dragObj)
      });
    } else {
      let ar: any
      let i: any
      loop(data, dropKey, (item: any, index: any, arr: any) => {
        ar = arr
        i = index
      })
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj)
      } else {
        ar.splice(i + 1, 0, dragObj)
      }
    }
    this.gData = data
  }




  onSelect(): void {
    console.log('onSelect')
  }

  onSearch(): void {
    console.log('onSearch')
  }

  onAddUser(): void {
    console.log('onAddUser')
  }

  onDeleteUsers(): void {
    console.log('onDeleteUsers')
  }

  onImport(): void {
    console.log('onImport')
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
    height: calc(100vh - 177px);
    overflow-y: auto;
  }

  /deep/ .ant-layout-sider {
    background-color: #FFFFFF;
  }
</style>
