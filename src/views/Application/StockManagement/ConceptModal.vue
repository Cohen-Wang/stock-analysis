<template>
  <a-modal :visible="isVisible"
           :title="title"
           :confirm-loading="isLoading"
           :mask-closable="false"
           :width="$constant.modal.size['sm']"
           ok-text="确定"
           @ok="onSubmit"
           cancel-text="取消"
           @cancel="hideModal">
    <div>
      <a-form-model ref="ruleForm"
                    :model="form"
                    :rules="rules"
                    label-align="right"
                    layout="horizontal"
                    :label-col="{ labelCol: { span: 4 } }">
        <!-- 概念名称 -->
        <a-form-model-item label="概念名称" prop="name">
          <a-input v-model="form.name"
                   has-feedback
                   placeholder="请输入概念名称"
                   :max-length="10"/>
        </a-form-model-item>
        <!-- 概念编号 -->
        <a-form-model-item label="概念编号" prop="code">
          <a-input v-model="form.code"
                   has-feedback
                   placeholder="请输入概念编号"
                   :max-length="6"/>
        </a-form-model-item>
        <!-- 概念描述 -->
        <a-form-model-item label="概念描述" prop="description">
          <a-textarea v-model="form.description"
                      has-feedback
                      placeholder="请输入概念描述"
                      :max-length="200"
                      :auto-size="{ minRows: 8, maxRows: 8 }"/>
        </a-form-model-item>
      </a-form-model>
    </div>
  </a-modal>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class ConceptModal extends Vue {

  @Provide()
  isVisible: boolean = false

  @Provide()
  title: string = '概念'
  @Provide()
  type: string = ''

  @Provide()
  isLoading: boolean = false

  @Provide()
  form: {
    name: string,
    code: string,
    description: string
  } = {
    name: '',
    code: '',
    description: ''
  }

  @Provide()
  rules: {
    name: any,
    code: any,
    description: any
  } = {
    name: [
      { required: true, message: '请输入概念名称', trigger: 'blur' },
      { min: 2, max: 10, message: '字符长度范围应在2~10个', trigger: 'blur' }
    ],
    code: [
      { required: true, message: '请输入概念编码', trigger: 'blur' },
      { min: 6, max: 6, message: '字符长度范围应在6个', trigger: 'blur' }
    ],
    description: [
      { max: 200, message: '字符长度范围应在200个以内', trigger: 'blur' }
    ]
  }

  // +------------------------------------------------------------------------------------------------------------------
  // | 对话框
  // +------------------------------------------------------------------------------------------------------------------
  // 显示
  showModal(): void {
    this.isVisible = true
  }

  // 隐藏
  hideModal(): void {
    this.isVisible = false
    this.resetForm()
  }

  // 重置表单
  resetForm(): void {
    this.form = {
      name: '',
      code: '',
      description: ''
    }
  }

  // +------------------------------------------------------------------------------------------------------------------
  // | 点击提交
  // +------------------------------------------------------------------------------------------------------------------
  onSubmit(): void {
    // (this as any).$refs['ruleForm'].validate(valid => {
    //   if (!valid) return
    //   alert(1)
    // })
  }
}
</script>

<style lang="scss" scoped></style>
