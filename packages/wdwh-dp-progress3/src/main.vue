<template>
  <div class="ui-progress-3">
    <div class="pro-list">
      <div class="pro-item" v-for="(item, index) in circleList" :key="index">
        <el-progress
          type="circle"
          :width="80"
          :color="item.color"
          :percentage="item.value"
        ></el-progress>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wdwh-dp-progress-3',
  props: {
    circleList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pro-list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .pro-item {
    // margin-right: 20px;
    p {
      font-size: 16px;
      color: #eee;
      text-align: center;
    }
  }
  /deep/.el-progress__text {
    color: #eee !important;
  }
  /deep/ .el-progress-circle__track {
    stroke: rgba(63, 62, 62, 0.733); //elementUi修改环形进度条底色
  }
}
</style>
