<template>
  <div class="bg-white">
    <div class="padding-lr-lg padding-tb border-bottom border-solid border-gray">
      个人信息
    </div>
    <div class="main-height">
      <a-descriptions layout="vertical" bordered>
        <a-descriptions-item label="Product">
          Cloud Database
        </a-descriptions-item>
        <a-descriptions-item label="Billing Mode">
          Prepaid
        </a-descriptions-item>
        <a-descriptions-item label="Automatic Renewal">
          YES
        </a-descriptions-item>
        <a-descriptions-item label="Order time">
          2018-04-24 18:00:00
        </a-descriptions-item>
        <a-descriptions-item label="Usage Time" :span="2">
          2019-04-24 18:00:00
        </a-descriptions-item>
        <a-descriptions-item label="Status" :span="3">
          <a-badge status="processing" text="Running" />
        </a-descriptions-item>
        <a-descriptions-item label="Negotiated Amount">
          $80.00
        </a-descriptions-item>
        <a-descriptions-item label="Discount">
          $20.00
        </a-descriptions-item>
        <a-descriptions-item label="Official Receipts">
          $60.00
        </a-descriptions-item>
        <a-descriptions-item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class PersonalInfo extends Vue {

  @Provide()
  tabPosition: string = 'left'
}
</script>

<style lang="scss" scoped>
  .main-height {
    height: calc(100vh - 187px);
    overflow-y: auto;
  }
</style>