<template>
  <a-modal title="个性化"
           :visible="visible"
           :width="$constant.modal.size['df']"
           okText="确认"
           cancelText="取消"
           @ok="hideModal"
           @cancel="hideModal">
    <a-form-model :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-model-item label="选择主题">
        <a-radio-group :value="theme"
                       @change="onChangeTheme"><!-- ❤❤❤❤：千万不能写成v-model="theme" -->
          <a-radio v-for="(themeItem, themeIndex) in $constant.individuation.theme.config"
                   :key="themeIndex"
                   :value="themeItem.value">
            {{ themeItem.label }}
          </a-radio>
        </a-radio-group>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  components: {}
})

export default class IndividuationModal extends Vue {

  @Provide() visible: boolean = false
  @Getter('common/theme') theme: any

  showModal(): void {
    this.visible = true
  }

  hideModal(): void {
    this.visible = false
  }

  // 切换主题
  onChangeTheme(e: any): void {
    const newValue = e.target.value
    this.$store.dispatch('common/SET_CURRENT_THEME', newValue)
  }
}
</script>

<style lang="scss" scoped></style>
