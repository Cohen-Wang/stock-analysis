<template>
  <a-drawer v-if="visible"
            :visible="visible"
            :title="title"
            :width="1200"
            :mask-closable="false"
            placement="right"
            :body-style="{ paddingBottom: '80px' }"
            @close="hideDrawer">
    <!-- 主体 -->
    <div>
      <!-- 步骤条区 -->
      <div class="padding-tb-lg">
        <a-steps :current="1">
          <a-step>
            <template slot="title">
              基本信息
            </template>
            <span slot="description">事件基本信息</span>
          </a-step>
          <a-step title="思维导图" sub-title="Left 00:00:08" description="思维导图的描述" />
          <a-step title="自我反思" description="自我反思的描述" />
        </a-steps>
      </div>
      <!-- 表单区 -->
      <div class="padding-tb-lg padding-lr">
        <a-form-model ref="ruleForm"
                      :model="form"
                      :rules="rules"
                      layout="vertical">
          <a-row>
            <!-- 事件名称 -->
            <a-col :span="8" offset="8">
              <a-form-model-item label="事件名称" prop="name">
                <a-input v-model="form.name" placeholder="请输入事件名称" :max-length="20"/>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <!-- 开始时间 -->
            <a-col :span="8" offset="4">
              <a-form-model-item label="开始时间" prop="startTime">
                <a-date-picker v-model="form.startTime"
                               mode="date"
                               :locale="locale"
                               placeholder="请选择影响的开始时间"
                               style="width: 100%;"
                               @change="onStartTimeChange"/>
              </a-form-model-item>
            </a-col>
            <!-- 结束时间 -->
            <a-col :span="8">
              <a-form-model-item label="结束时间" prop="endTime">
                <a-date-picker v-model="form.endTime"
                               mode="date"
                               :locale="locale"
                               placeholder="请选择影响的结束时间"
                               style="width: 100%;"
                               @change="onEndTimeChange"/>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <!-- 影响时间（开始） -->
            <a-col :span="8" offset="4">
              <a-form-model-item label="影响时间（开始）" prop="startTime">
                <a-date-picker v-model="form.startTime"
                               mode="date"
                               :locale="locale"
                               placeholder="请选择影响的开始时间"
                               style="width: 100%;"
                               @change="onStartTimeChange"/>
              </a-form-model-item>
            </a-col>
            <!-- 影响时间（结束） -->
            <a-col :span="8">
              <a-form-model-item label="影响时间（结束）" prop="endTime">
                <a-date-picker v-model="form.endTime"
                               mode="date"
                               :locale="locale"
                               placeholder="请选择影响的结束时间"
                               style="width: 100%;"
                               @change="onEndTimeChange"/>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <!-- 描述 -->
            <a-col :span="16" offset="4">
              <a-form-model-item label="描述" prop="description">
                <a-input v-model="form.description"
                         type="textarea"
                         placeholder="请填写事件描述"
                         rows="8"
                         allow-clear
                         :max-length="1000"
                         style="resize: none"/>
              </a-form-model-item>
            </a-col>
            <!-- 确定流程 -->
            <a-col :span="24">
              <a-form-model-item label="确定流程" prop="answerList">
                <a-checkbox-group v-model="form.answerList"
                                  :options="$constant.result.ANSWER_LOGIC_LIST"
                                  :default-value="['Apple']"
                                  @change="onChange">
              <span slot="label"
                    slot-scope="{ value }"
                    style="color: red">
                {{ value }}
              </span>
                </a-checkbox-group>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
      </div>
      <pre v-text="form"/>
    </div>
    <!-- 脚部 -->
    <div style="position: absolute;right: 0;bottom: 0;width: 100%;border-top: 1px solid #e9e9e9; padding: 10px 16px 10px 8px;background: #fff;text-align: right;z-index: 1;">
      <div class="flex justify-between">
        <div>
          <a-button type="link" :loading="loading">保存草稿</a-button>
        </div>
        <div>
          <a-button class="margin-right" :disabled="loading" @click="hideDrawer">取消</a-button>
          <a-button type="primary" :loading="loading" @click="onSubmit">确定</a-button>
        </div>
      </div>
    </div>
  </a-drawer>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
// 插件
import DeXie from 'dexie'
// import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'

@Component({
  components: {
  }
})

export default class EventDrawer extends Vue {

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
  title: string = ''

  @Provide()
  type: string = ''

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
    this.title = param.title
    this.type = param.type
    // ...
    if (this.type === 'edit') {
      this.form = param.item
    }
  }

  // 关闭抽屉
  hideDrawer(): void {
    this.visible = false
    this.resetForm()
  }

  // 重置form表单
  resetForm() {
    // this.form = {
    //   name: '',
    //   startTime: '',
    //   endTime: '',
    //   description: ''
    // }
  }

  // +----------------------------------------------------------------------------------------------------------------
  // | 表单
  // +----------------------------------------------------------------------------------------------------------------
  onStartTimeChange(val: any): void {
    console.log('onStartTimeChange')
  }

  onEndTimeChange(val: any): void {
    console.log('onEndTimeChange')
  }

  onChange(val: any): void {
    console.log(val)
  }
  // +----------------------------------------------------------------------------------------------------------------
  // | 抽屉
  // +----------------------------------------------------------------------------------------------------------------
  onSubmit() {
    // (this as any).$refs['ruleForm'].validate((valid: any) => {
    //   if (!valid) return
    //   if (this.type === 'add') this.addUser()
    //   if (this.type === 'edit') this.editUser()
    // })
  }

  async addUser() {
    // const workbenchDB = new DeXie('workbench')
    //
    // // 创建表（懒加载，在创建第一条数据之前，是没有这个数据库的）
    // workbenchDB.version(1).stores({
    //   user: '++id, username, portrait, password, realName, gender, birthday, hometown, phone, email, introduce'
    // })
    //
    // // 增
    // this.form.createTime = new Date().getTime()
    // workbenchDB.user.add(JSON.parse(JSON.stringify(this.form)))
    //
    // // 关闭
    // // workbenchDB.close()
    // this.$message.success('新增用户成功')
    // // 重置
    // this.afterSuccess()
  }

  async editUser() {
    // const workbenchDB: any = new DeXie('workbench')
    // // 创建表（懒加载，在创建第一条数据之前，是没有这个数据库的）
    // workbenchDB.version(1).stores({
    //   user: '++id, username, portrait, password, realName, gender, birthday, hometown, phone, email, introduce'
    // })
    // // 改
    // this.form.updateTime = new Date().getTime()
    // workbenchDB.user.put(JSON.parse(JSON.stringify(this.form)))
    // // 关闭
    // // workbenchDB.close()
    // this.$message.success('编辑用户成功')
    // // 重置
    // this.afterSuccess()
  }

  // 操作成功后
  afterSuccess() {
    this.hideDrawer()
    this.$emit('afterSuccess')
  }

}
</script>

<style lang="scss" scoped></style>
