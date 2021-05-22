<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  components: {}
})

export default class App extends Vue {

  @Getter('common/theme') theme: any

  created(): void {
    // 1.设置主题色
    this.$store.dispatch('common/SET_CURRENT_THEME', this.theme)
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
