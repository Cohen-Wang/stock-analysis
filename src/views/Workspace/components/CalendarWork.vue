<template>
  <div class="workspace-height bg-white">
    <div class="padding border-bottom border-solid border-gray">
      <a-calendar @panelChange="onPanelChange" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class CalendarWord extends Vue {

  onPanelChange(value: any, mode: any) {
    console.log(value, mode)
  }
}
</script>

<style lang="scss" scoped></style>
