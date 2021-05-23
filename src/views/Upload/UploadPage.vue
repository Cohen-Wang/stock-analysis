<template>
  <div class="main-height bg-white">
    <div class="border-bottom border-solid border-gray">
      <main-title text="数据管理"/>
    </div>
    <div class="padding-lr-lg padding-tb border-bottom border-solid border-gray">
      <a-upload-dragger name="file"
                        :multiple="true"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        @change="handleChange">
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </a-upload-dragger>
    </div>
    <!-- 数据展示 -->
    <div>
      <a-row>
        <a-col :span="8">
          <div class="border-rb border-solid border-gray">
            <main-title text="股票数据"/>
          </div>
          <div class="padding-lr-lg padding-tb border-rb border-solid border-gray">
            <pre v-text="123"/>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="border-rb border-solid border-gray">
            <main-title text="事件数据"/>
          </div>
          <div class="padding-lr-lg padding-tb border-rb border-solid border-gray">
            <pre v-text="123"/>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="border-rb border-solid border-gray">
            <main-title text="关注股票"/>
          </div>
          <div class="padding-lr-lg padding-tb border-rb border-solid border-gray">
            <pre v-text="123"/>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainTitle from '@/components/MainTitle.vue'

@Component({
  components: {
    MainTitle
  }
})

export default class UploadPage extends Vue {

  handleChange(info: any) {
    const status = info.file.status
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      this.$message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      this.$message.error(`${info.file.name} file upload failed.`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-height {
    height: calc(100vh - 133px);
    overflow-y: auto;
  }
</style>