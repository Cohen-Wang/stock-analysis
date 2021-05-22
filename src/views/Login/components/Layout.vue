<template>
  <div class="container">
    <div class="middle">
      <div class="heading">
        <div class="title">{{ title }}</div>
      </div>
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class Layout extends Vue {
  @Provide() title: string = process.env.VUE_APP_TITLE
}
</script>

<style lang="scss" scoped>
  .container {
    min-width: 800px;
    width: 100%;
    height: 100%;
    background: url("../../../assets/image/login/login-back.svg");
    background-repeat: no-repeat;
    background-position: center 100px;
    background-size: 100%;

    .middle {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      width: 312px;
      min-height: 50px;
      max-height: 600px;

      &>div {}
      padding: 10px 15px;

      .heading {
        margin-bottom: 20px;

        .title {
          text-align: center;
          font-family: "方正兰亭超细黑简体",sans-serif;
          font-size: 44px;
          font-weight: bolder;
          color: #777777;
        }
      }
    }
  }
</style>
