<template>
  <div>
    <a-input v-model="text"/>
    <a-button type="primary" @click="onTranslate">翻译</a-button>
    <a-textarea v-model="translatedText"
                placeholder="翻译结果"
                disabled
                :auto-size="{ minRows: 3, maxRows: 5 }"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class Translation extends Vue {

  @Provide()
  text: string = ''

  @Provide()
  translatedText: string = ''

  /**
   * 翻译事件
   */
  onTranslate(): void {
    this.translate()
  }

  /**
   * 翻译
   */
  translate(): void {
    console.log('onTranslate')
  }

}
</script>

<style lang="scss" scoped></style>