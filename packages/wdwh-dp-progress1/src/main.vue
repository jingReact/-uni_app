<template>
  <div class="component-progress">
    <div
      class="progress-list"
      v-for="(item, index) in progressList"
      :key="index"
    >
      <div class="com-flex">
        <p>{{ item.name }}(%)</p>
        <el-progress
          :stroke-width="10"
          :color="
            item.value < 30
              ? '#f56c6c'
              : item.value < 50
              ? '#FF8D2E'
              : item.value < 70
              ? '#188df0'
              : item.value < 90
              ? '#96bfff'
              : '#00d58f'
          "
          style="width: 80%; display: flex"
          :percentage="+item.value"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wdwh-dp-progress-1',
  props: {
    progressList: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.progress-list {
  .com-flex {
    display: flex;
    align-items: center;

    p {
      width: 15%;
      flex-shrink: 0;
      color: #eee;
    }
  }

  /deep/ .el-progress-bar__outer {
    background-color: rgba(
      63,
      62,
      62,
      0.733
    ) !important; //elementUi修改环形进度条底色
  }
  /deep/.el-progress__text {
    color: #eee !important;
    font-size: 14px !important;
  }
}
</style>
