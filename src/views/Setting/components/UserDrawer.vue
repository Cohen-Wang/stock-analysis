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
            <a-input v-model="form.username" placeholder="请输入用户名" :maxLength="20"/>
          </a-form-model-item>
        </a-col>
        <!-- 头像 -->
        <a-col :span="12">
          <a-form-item label="头像">
            <a-upload name="avatar"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      :before-upload="beforeUpload"
                      @change="handleChange">
              <img v-if="imageUrl" :src="imageUrl" alt="avatar"/>
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'"/>
                <div class="ant-upload-text">
                  Upload
                </div>
              </div>
            </a-upload>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <!-- 密码 -->
        <a-col :span="12">
          <a-form-model-item label="密码" prop="password">
            <a-input v-model="form.password" type="password" placeholder="请输入密码" :disabled="type === 'edit'" :maxLength="20"/>
          </a-form-model-item>
        </a-col>
        <!-- 确认密码 -->
        <a-col :span="12">
          <a-form-model-item label="确认密码" prop="confirmPassword">
            <a-input v-model="form.confirmPassword" type="password" placeholder="请输入确认密码" :disabled="type === 'edit'" :maxLength="20"/>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <!-- 姓名 -->
        <a-col :span="12">
          <a-form-model-item label="姓名" prop="realName">
            <a-input v-model="form.realName" placeholder="请输入姓名" :maxLength="20"/>
          </a-form-model-item>
        </a-col>
        <!-- 性别 -->
        <a-col :span="11" style="height: 93px;">
          <a-form-model-item label="性别" prop="gender">
            <a-radio-group v-model="form.gender">
              <a-radio v-for="(item, key, index) in $constant.user.gender_config"
                       :key="index"
                       :label="item"
                       :value="key">
                {{ item }}
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <!-- 生日 -->
        <a-col :span="12">
          <a-form-model-item label="生日" prop="birthday">
            <a-date-picker v-model="form.birthday"
                           mode="date"
                           :locale="locale"
                           placeholder="请选择日期"
                           style="width: 100%;"
                           @change="onBirthdayChange"/>
          </a-form-model-item>
        </a-col>
        <!-- 家乡 -->
        <a-col :span="12">
          <a-form-model-item label="家乡" prop="hometown">
            <a-cascader v-model="form.hometown"
                        :options="regionData"
                        placeholder="请选择您的家乡"
                        @change="onAddressChange"/>
          </a-form-model-item>
        </a-col>
        <!-- 电话号码 -->
        <a-col :span="12">
          <a-form-model-item label="电话号码" prop="phone">
            <a-input v-model="form.phone" placeholder="请输入电话号码" :maxLength="11"/>
          </a-form-model-item>
        </a-col>
        <!-- 邮箱 -->
        <a-col :span="12">
          <a-form-model-item label="邮箱" prop="email">
            <a-input v-model="form.email" placeholder="请输入邮箱" :maxLength="20"/>
          </a-form-model-item>
        </a-col>
        <!-- 自我描述 -->
        <a-col :span="24">
          <a-form-model-item label="自我描述">
            <a-input v-model="form.introduce"
                     type="textarea"
                     placeholder="请填写自我描述"
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

<script>
import { isPasswordStrong, isPhoneLegal, isEmailLegal } from '@/utils'
import { regionData } from 'element-china-area-data'
import DeXie from 'dexie'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'

const FORM = {
  username: 'cohen',
  portrait: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1729510474,1941158659&fm=26&gp=0.jpg',
  password: 'Abc@0.123',
  confirmPassword: 'Abc@0.123',
  realName: '王海涛',
  gender: '1',
  birthday: undefined,
  hometown: undefined,
  phone: '13812345678',
  email: '543543@qq.com',
  introduce: '我是好先生',
  isAllow: false
}
const RULES = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 4, max: 20, message: '字符长度范围应在2~10个', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: isPasswordStrong, trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
    { validator: isPasswordStrong, trigger: 'blur' }
  ],
  realName: [
    { required: true, message: '请输入名称', trigger: 'blur' },
    { min: 2, max: 10, message: '字符长度范围应在2~10个', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: ['blur', 'change'] }
  ],
  birthday: [
    { required: true, message: '请选择生日', trigger: ['blur', 'change'] }
  ],
  hometown: [
    { required: true, message: '请选择家乡', trigger: ['blur', 'change'] }
  ],
  phone: [
    { required: false, message: '请输入手机号码', trigger: 'blur' },
    { validator: isPhoneLegal, trigger: 'blur' }
  ],
  email: [
    { required: false, message: '请输入邮箱', trigger: 'blur' },
    { validator: isEmailLegal, trigger: 'blur' }
  ]
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export default {
  name: 'UserDrawer',
  data() {
    // 重复密码验证
    const confirmPasswordCheck = async(rule, value, callback) => {
      if (value !== this.form.password) {
        return callback(new Error('两次输入密码不一致！'))
      } else {
        callback()
      }
    }
    return {
      // 配置
      regionData,
      locale,
      // ...
      visible: false,
      title: '',
      type: '',
      loading: false,
      // ...
      imageUrl: '',
      form: Object.assign({}, FORM),
      rules: Object.assign({}, RULES, {
        confirmPassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: confirmPasswordCheck, trigger: 'blur' }
        ]
      })
    }
  },
  methods: {
    // +----------------------------------------------------------------------------------------------------------------
    // | 抽屉
    // +----------------------------------------------------------------------------------------------------------------
    showDrawer(param) {
      this.visible = true
      this.title = param.title
      this.type = param.type
      // ...
      if (this.type === 'edit') {
        this.form = param.item
      }
    },
    hideDrawer() {
      this.visible = false
      this.form = JSON.parse(JSON.stringify(FORM))
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 表单
    // +----------------------------------------------------------------------------------------------------------------
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 头像
    // +----------------------------------------------------------------------------------------------------------------
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('只能上传jpg，png图片!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('图片大小必须小于2MB!')
      }
      return isJpgOrPng && isLt2M
    },
    onBirthdayChange(val) {
      console.log(val)
    },
    onAddressChange(val) {
      console.log(val)
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | 抽屉
    // +----------------------------------------------------------------------------------------------------------------
    onSubmit() {
      this.$refs['ruleForm'].validate(valid => {
        if (!valid) return
        if (this.type === 'add') this.addUser()
        if (this.type === 'edit') this.editUser()
      })
    },
    async addUser() {
      const workbenchDB = new DeXie('workbench')

      // 创建表（懒加载，在创建第一条数据之前，是没有这个数据库的）
      workbenchDB.version(1).stores({
        user: '++id, username, portrait, password, realName, gender, birthday, hometown, phone, email, introduce'
      })

      // 增
      this.form.createTime = new Date().getTime()
      workbenchDB.user.add(JSON.parse(JSON.stringify(this.form)))

      // 关闭
      // workbenchDB.close()
      this.$message.success('新增用户成功')
      // 重置
      this.afterSuccess()
    },
    async editUser() {
      const workbenchDB = new DeXie('workbench')
      // 创建表（懒加载，在创建第一条数据之前，是没有这个数据库的）
      workbenchDB.version(1).stores({
        user: '++id, username, portrait, password, realName, gender, birthday, hometown, phone, email, introduce'
      })
      // 改
      this.form.updateTime = new Date().getTime()
      workbenchDB.user.put(JSON.parse(JSON.stringify(this.form)))
      // 关闭
      // workbenchDB.close()
      this.$message.success('编辑用户成功')
      // 重置
      this.afterSuccess()
    },
    // 操作成功后
    afterSuccess() {
      this.hideDrawer()
      this.$emit('afterSuccess')
    }
  }
}
</script>

<style scoped>

</style>
