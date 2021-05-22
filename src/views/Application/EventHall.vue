<template>
  <div class="bg-white">
    <!-- 搜索区 -->
    <div class="padding-lr-lg padding-tb border-bottom border-solid border-gray">
      <a-input-search placeholder="请输入事件名称"
                      enter-button
                      style="width: 250px;"
                      @search="onSearch"/>
    </div>
    <!-- 卡片区 -->
    <div class="main-height padding-lr-lg padding-tb border-bottom border-solid border-gray">
      <a-row :gutter="16">
        <vue-draggable v-model="eventList" @start="onDragStart" @end="onDragEnd">
          <transition-group>
            <template v-for="(item, index) in eventList">
              <a-col :key="index"
                     :xs="24" :sm="24" :md="12" :lg="8" :xl="6"
                     class="margin-bottom pointer">
                <a-card size="small"
                        class="hover-shadow"
                        :title="`${index+1}. ${item.name}`"
                        @click="onShowEventDetail">
                  <a-icon slot="extra" class="cursor-move" title="可拖拽" type="ellipsis" />
                  <p><i class="blank text-gray iconfont icon-daiban"/><span class="semicolon">开始时间</span>{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</p>
                  <p><i class="blank text-gray iconfont icon-chuli"/><span class="semicolon">影响起始</span>{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</p>
                  <p><i class="blank text-gray iconfont icon-canyu"/><span class="semicolon">影响结束</span>{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</p>
                  <p><i class="blank text-gray iconfont icon-faqi"/><span class="semicolon">结束时间</span>{{ $moment().format('YYYY-MM-DD HH:mm:ss') }}</p>
                </a-card>
              </a-col>
            </template>
          </transition-group>
        </vue-draggable>
      </a-row>
    </div>
    <!-- 分页 -->
    <div class="padding-lr-lg padding-tb flex justify-end">
      <a-pagination show-quick-jumper
                    :default-current="2"
                    :total="500"
                    show-size-changer
                    :page-size-options="['10', '20', '30', '40', '50']"
                    :page-size="pageSize"
                    @change="onChange"/>
    </div>

    <!-- 事件详情 -->
    <event-detail-index ref="EventDetailIndex"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
// 组件
import VueDraggable from 'vuedraggable'
import EventDetailIndex from '@/components/EventDetail/EventDetailIndex.vue'


@Component({
  components: {
    VueDraggable,
    EventDetailIndex
  }
})

export default class EventHall extends Vue {

  @Provide()
  eventList: Array<any> = [
    { name: '刘德华', createTime: '', startTime: '', endTime: '' },
    { name: '周杰伦', createTime: '', startTime: '', endTime: '' },
    { name: '郭富城', createTime: '', startTime: '', endTime: '' },
    { name: '蔡依林', createTime: '', startTime: '', endTime: '' },
    { name: '张国荣', createTime: '', startTime: '', endTime: '' },
    { name: '张学友', createTime: '', startTime: '', endTime: '' },
    { name: '张信哲', createTime: '', startTime: '', endTime: '' },
    { name: '林俊杰', createTime: '', startTime: '', endTime: '' },
    { name: '萧亚轩', createTime: '', startTime: '', endTime: '' },
    { name: '陈奕迅', createTime: '', startTime: '', endTime: '' },
    { name: '王菲', createTime: '', startTime: '', endTime: '' },
    { name: '许慧欣', createTime: '', startTime: '', endTime: '' }
  ]

  @Provide()
  pageSize: number = 12

  @Provide()
  current: number = 1

  @Provide()
  total: number = 99

  onSearch(): void {
  }

  /**
   * 查看详情
   */
  onShowEventDetail(): void {
    (this.$refs['EventDetailIndex'] as any).showDrawer({
      title: '事件详情'
    })
  }

  // +------------------------------------------------------------------------------------------------------------------
  // | 拖拽事件
  // +------------------------------------------------------------------------------------------------------------------
  // 拖拽开始
  onDragStart() {}

  // 拖拽结束
  onDragEnd() {}

  onShowSizeChange(current: number = 1, pageSize: number = 10): void {
    this.pageSize = pageSize
  }

  onChange(pageNumber: number = 1) {
    console.log('Page: ', pageNumber);
  }
}
</script>

<style lang="scss" scoped>
  .main-height {
    height: calc(100vh - 262px);
    overflow-y: auto;
  }
</style>
