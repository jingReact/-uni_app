<template>
  <!-- //header 便于 SEO -->
  <header class="wdwh-dp-header-container" :style="{ height:height }">
    <!-- //  height  这里传入的 height 是需要带单位的 -->
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "wdwh-dp-header-container",

  componentName: "wdwh-dp-header-container",

  props: {
    //通过属性来控制 header 高度
    height: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>

.wdwh-dp-header-container{
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0; //表示即使空间不够，也不会缩小 <el-header> 所占空间。
}
</style>