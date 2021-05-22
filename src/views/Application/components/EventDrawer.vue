<template>
  <a-drawer :visible="visible"
            :title="title"
            :width="720"
            :mask-closable="false"
            placement="right"
            :body-style="{ paddingBottom: '80px' }"
            @close="hideDrawer">
    <a-form-model ref="ruleForm"
                  :model="form"
                  :rules="rules"
                  layout="vertical">
      <a-row :gutter="16">
        <!-- 用户名 -->
        <a-col :span="12">
          <a-form-model-item label="用户名" prop="username">
            <a-input v-model="form.name" placeholder="请输入用户名" :maxLength="20"/>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <!-- 影响时间（开始） -->
        <a-col :span="12">
          <a-form-model-item label=" 影响时间（开始）" prop="birthday">
            <a-date-picker v-model="form.startTime"
                           mode="date"
                           :locale="locale"
                           placeholder="请选择日期"
                           style="width: 100%;"
                           @change="onStartTimeChange"/>
          </a-form-model-item>
        </a-col>
        <!-- 影响时间（结束） -->
        <a-col :span="12">
          <a-form-model-item label="影响时间（结束）" prop="birthday">
            <a-date-picker v-model="form.endTime"
                           mode="date"
                           :locale="locale"
                           placeholder="请选择日期"
                           style="width: 100%;"
                           @change="onEndTimeChange"/>
          </a-form-model-item>
        </a-col>
        <!-- 描述 -->
        <a-col :span="24">
          <a-form-model-item label="描述">
            <a-input v-model="form.introduce"
                     type="textarea"
                     placeholder="请填写描述"
                     rows="5"
                     style="resize: none"/>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
    <div style="position: absolute;right: 0;bottom: 0;width: 100%;border-top: 1px solid #e9e9e9; padding: 10px 16px;background: #fff;text-align: right;z-index: 1;">
      <a-button class="margin-right" @click="hideDrawer">
        取消
      </a-button>
      <a-button type="primary" @click="onSubmit">
        确定
      </a-button>
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
  FORM: {} = {
    name: '',
    startTime: 543543543543,
    endTime: 534231242343,
    introduce: '我是好先生'
  }

  @Provide()
  locale: any = ''

  @Provide()
  form: any = {
    name: '',
    startTime: 543543543543,
    endTime: 534231242343,
    introduce: '我是好先生'
  }

  @Provide()
  rules: any = {
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 4, max: 20, message: '字符长度范围应在2~10个', trigger: 'blur' }
    ],
    startTime: [
      { required: true, message: '请选择生日', trigger: ['blur', 'change'] }
    ],
    endTime: [
      { required: true, message: '请选择生日', trigger: ['blur', 'change'] }
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

  // +----------------------------------------------------------------------------------------------------------------
  // | 抽屉
  // +----------------------------------------------------------------------------------------------------------------
  showDrawer(param: any): void {
    this.visible = true
    this.title = param.title
    this.type = param.type
    // ...
    if (this.type === 'edit') {
      this.form = param.item
    }
  }

  hideDrawer(): void {
    this.visible = false
    this.form = JSON.parse(JSON.stringify(this.FORM))
  }

  onStartTimeChange(): void {
    console.log('onStartTimeChange')
  }

  onEndTimeChange(): void {
    console.log('onEndTimeChange')
  }

  // +----------------------------------------------------------------------------------------------------------------
  // | 抽屉
  // +----------------------------------------------------------------------------------------------------------------
  onSubmit() {
    // (this as any).$refs['ruleForm'].validate((valid: boolean) => {
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
