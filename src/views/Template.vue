<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class Setting extends Vue {
}
</script>

<style lang="scss" scoped></style>