<template>
  <div>
    <a-menu mode="inline"
            theme="dark"
            :default-selected-keys="[$route.fullPath]"
            :default-open-keys="[$route.matched[0].path]"
            @click="handleClick">
      <template v-for="item in this.routes">
        <template v-if="item.meta.isShow">
          <!-- 只有一个元素 -->
          <a-menu-item v-if="item.children.length === 1"
                       :key="item.children[0].path"
                       titleClick="handleTitleClick">
            <a-icon v-if="item.meta.icon" :type="item.meta.icon"/>
            <span>{{ item.meta.title }}</span> <!-- 必须有span包裹，否则字无法收缩 -->
          </a-menu-item>
          <!-- 多个元素 -->
          <a-sub-menu v-else
                      :key="item.path">
            <span slot="title">
              <a-icon v-if="item.meta.icon"
                      :type="item.meta.icon"/>
              <span>{{ item.meta.title }}</span>
            </span>
            <!-- 子元素无孙元素 -->
            <!-- eslint-disable-next-line -->
            <template v-for="item2 in item.children" v-if="!item2.children">
              <a-menu-item :key="item2.path" :title="item2.meta.title">
                <span>{{ item2.meta.title }}</span>
              </a-menu-item>
            </template>
            <!-- 子元素有孙元素 -->
            <!-- eslint-disable-next-line -->
            <template v-for="item2 in item.children" v-if="item2.children">
              <a-sub-menu :key="item2.path">
                <span slot="title">
                  <span>{{ item2.meta.title }}</span>
                </span>
                <!-- 孙元素【无】孙孙元素 -->
                <!-- eslint-disable-next-line -->
                <template v-for="item3 in item2.children" v-if="!item3.children">
                  <a-menu-item :key="item3.path">
                    <span>{{ item3.meta.title }}</span>
                  </a-menu-item>
                </template>
                <!-- 孙元素【有】孙孙元素 -->
                <!-- eslint-disable-next-line -->
                <template v-for="item3 in item2.children" v-if="item3.children">
                  <a-sub-menu :key="item3.path">
                <span slot="title">
                  <span>{{ item3.meta.title }}</span>
                </span>
                    <template v-for="item4 in item3.children">
                      <a-menu-item :key="item4.path">
                        <span>{{ item4.meta.title }}</span>
                      </a-menu-item>
                    </template>
                  </a-sub-menu>
                </template>
              </a-sub-menu>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  components: {}
})

export default class Sidebar extends Vue {

  @Getter('router/routes') routes: any

  handleClick(option: any): void {
    console.log(this.$route)
    const { key } = option
    this.$router.push(key)
  }
}
</script>

<style lang="scss" scoped></style>