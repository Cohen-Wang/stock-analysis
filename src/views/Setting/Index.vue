<template>
  <div>
    <div>
      <layout-with-sidebar>
        <router-view slot="content"/>
      </layout-with-sidebar>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutWithSidebar from '@/components/LayoutWithSidebar.vue'

@Component({
  components: {
    LayoutWithSidebar
  }
})

export default class Setting extends Vue {

}
</script>

<style lang="scss" scoped></style>