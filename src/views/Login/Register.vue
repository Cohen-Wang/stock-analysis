<template>
  <Layout>
    <div slot="container">
      注册
    </div>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import Layout from './components/Layout.vue'

@Component({
  components: {
    Layout
  }
})
export default class Register extends Vue {

  @Provide()
  form: {
    username: string
  } = {
    username: 'admin'
  }
}
</script>

<style lang="scss" scoped></style>
