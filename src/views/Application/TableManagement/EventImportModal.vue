<template>
  <a-modal :visible="visible"
           :title="title"
           :confirm-loading="loading"
           :mask-closable="false"
           ok-text="确定"
           @ok="hideModal"
           cancel-text="取消"
           @cancel="hideModal">
    <a-upload-dragger name="file"
                      :multiple="true"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      @change="handleChange">
      <p class="ant-upload-drag-icon"><a-icon type="inbox"/></p>
      <p class="ant-upload-text">点击或拖拽文件到此区域</p>
      <p class="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
    </a-upload-dragger>
  </a-modal>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {

  }
})

export default class EventImportModal extends Vue {

  @Provide()
  visible: boolean = false

  @Provide()
  title: string = '导入用户'

  @Provide()
  loading: boolean = false

  showModal() {
    this.visible = true
  }

  hideModal() {
    this.visible = false
  }

  handleChange() {
    console.log('handleChange')
  }

}
</script>

<style lang="scss" scoped></style>
