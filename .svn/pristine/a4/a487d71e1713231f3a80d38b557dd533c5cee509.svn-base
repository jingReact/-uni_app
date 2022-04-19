<template>
  <div class="component-scroll-list">
    <!-- <div class="list-title">
      <span v-for="(item, index) in listConfig.listHead" :key="index">
        {{ item }}
      </span>
    </div> -->
    <div class="list-content">
      <vue-seamless-scroll
        :data="listConfig.listDatas"
        :classOption="classOption"
      >
        <div
          class="com-scroll-list-item"
          v-for="(item, index) in listConfig.listDatas"
          :key="index"
        >
          <span>
            {{ item.title }}
          </span>
          <span>
            {{ item.data }}
          </span>
        </div>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wdwh-dp-scroll-list',
  props: {
    listConfig: {
      type: Object,
      default: function () {
        return {}
      }
    },
    classOption: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.component-scroll-list {
  background: transparent;
  height: 100%;
  padding: 10px;
  .list-title {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    background: rgba(208, 220, 255, 0.15);
    span {
      color: #fff;
      line-height: 50px;
      padding: 0;
    }
  }

  .list-content {
    height: 100%;
    overflow: hidden;
  }

  // 滚动的列表样式
  .com-scroll-list-item {
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      background: rgba(208, 220, 255, 0.3) !important;
    }
    &:nth-of-type(2n) {
      background: rgba(208, 220, 255, 0.08);
    }

    span {
      color: #fff;
      padding: 0;
    }
  }
}
</style>
