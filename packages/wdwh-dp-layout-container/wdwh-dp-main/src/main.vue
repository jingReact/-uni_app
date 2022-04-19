<template>
  <main class="wdwh-dp-main-container" :style="{ height }">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "wdwh-dp-main-container",
  componentName: "wdwh-dp-main-container",
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
.wdwh-dp-main-container{
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
}
</style>