<template>
  <div class="main-content bg-white">
    <!-- 按钮区 -->
    <div class="padding-lr-lg padding-tb border-bottom border-solid border-gray">
      <a-input-search placeholder="请输入用户名"
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
    <div>
      <a-table :columns="columns"
               :data-source="tableData"
               bordered
               rowKey="id"
               :scroll="{ x: true, y: 600 }"
               :pagination="false">
        <!-- 用户名 -->
        <template slot="username" slot-scope="text">
          <span class="text-blue">{{ text || '-/-' }}</span>
        </template>
        <!-- 姓名 -->
        <template slot="realName" slot-scope="text">
          <span>{{ text || '-/-' }}</span>
        </template>
        <!-- 头像 -->
        <template slot="portrait" slot-scope="text, record">
          <a-popover :title="`${record.realName}的头像`">
            <template slot="content">
              <img :src="text" width="300">
            </template>
            <a-avatar :src="text"
                      shape="square"
                      size="small"/>
          </a-popover>
        </template>
        <!-- 性别 -->
        <template slot="gender" slot-scope="text">
          <span>{{ $constant.user.gender_config[text] || '-/-' }}</span>
        </template>
        <!-- 生日 -->
        <template slot="birthday" slot-scope="text">
          <span>{{ text ? $moment(text).format('YYYY-MM-DD') : '-/-' }}</span>
        </template>
        <!-- 家乡 -->
        <template slot="hometown" slot-scope="text">
          <span>{{ getHometown(text) || '-/-' }}</span>
        </template>
        <!-- 手机号 -->
        <template slot="phone" slot-scope="text">
          <span>{{ text || '-/-' }}</span>
        </template>
        <!-- 邮箱 -->
        <template slot="email" slot-scope="text">
          <span>{{ text || '-/-' }}</span>
        </template>
        <!-- 创建时间 -->
        <template slot="createTime" slot-scope="text, record">
          <span>{{ record.createTime ? $moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') : '-/-' }}</span>
        </template>
        <!-- 修改时间 -->
        <template slot="updateTime" slot-scope="text, record">
          <span>{{ record.updateTime ? $moment(record.updateTime).format('YYYY-MM-DD HH:mm:ss') : '-/-' }}</span>
        </template>
        <!-- 描述 -->
        <template slot="introduce" slot-scope="text">
          <span>{{ text || '-/-' }}</span>
        </template>
        <!-- 操作 -->
        <template slot="action" slot-scope="text">
          <a @click="onEdit(text)">编辑</a>
          <a-divider type="vertical"/>
          <a>授权</a>
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
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class UserManagement extends Vue {

  @Provide() columns: any = [
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
      title: '头像',
      key: 'portrait',
      dataIndex: 'portrait',
      slots: { title: 'customTitle' },
      width: 70,
      ellipsis: true,
      scopedSlots: { customRender: 'portrait' }
    },
    {
      title: '性别',
      key: 'gender',
      dataIndex: 'gender',
      slots: { title: 'customTitle' },
      width: 70,
      ellipsis: true,
      scopedSlots: { customRender: 'gender' }
    },
    {
      title: '生日',
      key: 'birthday',
      dataIndex: 'birthday',
      slots: { title: 'customTitle' },
      width: 120,
      ellipsis: true,
      scopedSlots: { customRender: 'birthday' }
    },
    {
      title: '家乡',
      key: 'hometown',
      dataIndex: 'hometown',
      slots: { title: 'customTitle' },
      width: 180,
      ellipsis: true,
      scopedSlots: { customRender: 'hometown' }
    },
    {
      title: '手机号',
      key: 'phone',
      dataIndex: 'phone',
      slots: { title: 'customTitle' },
      width: 120,
      ellipsis: true,
      scopedSlots: { customRender: 'phone' }
    },
    {
      title: '邮箱',
      key: 'email',
      dataIndex: 'email',
      slots: { title: 'customTitle' },
      width: 180,
      ellipsis: true,
      scopedSlots: { customRender: 'email' }
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      width: 180,
      ellipsis: true,
      scopedSlots: { customRender: 'createTime' }
    },
    {
      title: '修改时间',
      key: 'updateTime',
      dataIndex: 'updateTime',
      width: 180,
      ellipsis: true,
      scopedSlots: { customRender: 'updateTime' }
    },
    {
      title: '描述',
      key: 'introduce',
      dataIndex: 'introduce',
      width: 150,
      ellipsis: true,
      scopedSlots: { customRender: 'introduce' }
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      ellipsis: true,
      scopedSlots: { customRender: 'action' }
    }
  ]
  @Provide() tableData: any = [
    {
      id: 123,
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
  @Provide() total: number = 9999

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
    height: calc(100vh - 133px);
    overflow-y: auto;
  }
</style>
