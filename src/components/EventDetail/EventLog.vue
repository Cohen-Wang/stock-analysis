<template>
  <div class="bg-white">
    <div>
      <a-timeline>
        <a-timeline-item v-for="(item, index) in list"
                         :key="index"
                         color="green">
          <timeline-item :info="item"/>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
// 组件
import TimelineItem from '@/components/TimelineItem.vue'

@Component({
  components: {
    TimelineItem
  }
})

export default class PersonalLog extends Vue {

  @Provide()
  list: Array<any> = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ]
}
</script>

<style lang="scss" scoped></style>