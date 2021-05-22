<template>
  <a-modal :visible="isVisible"
           :title="title"
           :mask="false"
           :mask-closable="false"
           :footer="null"
           :width="$constant.modal.size['sm']"
           @cancel="hideModal">
    <div>
      <marquee>
        <div class="text-bold text-black text-df">{{ text }}</div>
      </marquee>
    </div>
  </a-modal>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class ConceptModal extends Vue {

  @Provide() isVisible: boolean = false
  @Provide() title: string = '股市名言'
  @Provide() text: string = ''

  // +------------------------------------------------------------------------------------------------------------------
  // | 对话框
  // +------------------------------------------------------------------------------------------------------------------
  // 显示
  showModal(text: string): void {
    this.isVisible = true
    this.text = text
  }

  // 隐藏
  hideModal(): void {
    this.isVisible = false
  }
}
</script>

<style lang="scss" scoped></style>
