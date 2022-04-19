<template>
  <!-- //is-vertical 判断是是否为垂直布局
//section 利于`SEO`的语义化`tag`标签 -->
  <section class="wdwh-dp-container" :class="{ 'is-vertical': isVertical }">
    <!-- //通过内容分发 -->
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "wdwh-dp-container",

  componentName: "wdwh-dp-container", //自定义属性

  props: {
    direction: String, //方向  horizontal =》 水平  vertical =》垂直
  },

  computed: {
    isVertical() {
    //   if (this.direction === "vertical") {
    //       console.log(2222);
    //     return true;
    //   } else if (this.direction === "horizontal") {
    //       console.log(3333);
    //     return false;
    //   }
      //this.$slots.default是个数组，里面的每个元素都是一个VNode，VNode是虚拟dom中的虚拟节点，当组件被编译时，每个<...>就会生成一个虚拟的节点，
      //通过 vnode.componentOptions.tag 来判断这个 vnode 是不是 <el-header> 或者是 <el-footer>。
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vnode) => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === "wdwh_dp_Header" || tag === "wdwh_dp_Footer";
          })
        : false;
    },
  },
};
</script>
<style lang="scss" scoped>
.wdwh-dp-container {
    width: 100%;
    height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  flex-flow: column;
}

.vertical {
  //当是垂直方向排列，则设置为 column
  flex-direction: column;
}
</style>