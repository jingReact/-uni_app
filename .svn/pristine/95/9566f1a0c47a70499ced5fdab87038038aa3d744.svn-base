<template>
  <div class="rem-container">
    <slot />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import {debounce} from "@/utils/debounce.js";
export default {
  name: "rem-container",
  props: {
    defaultWidth: {
      type: Number,
      default: 1920,
    },
    defaultHeight: {
      type: Number,
      default: 1080,
    },
    defaultFontSize: {
      type: Number,
      default: 100,
    },
    minWidth: {
      type: Number,
      default: 1200,
    },
  },
  computed: {
    // ...mapState(["globalScale", "startVal", "durationAnimate"]),
  },
  mounted() {
    this.setHtmlSize();
    window.addEventListener("resize", this.resizeCall);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeCall);
    // this.changeGlobalScale(1);
    document.querySelector("html").style.fontSize = "";
  },
  methods: {
    // ...mapMutations(["changeGlobalScale", "changeTimeKey"]),
    /**
     * 页面适配
     */
    setHtmlSize() {
      const { defaultWidth, defaultHeight, defaultFontSize, minWidth } = this;
      let wd = document.body.clientWidth;
      let fontSize;
      let globalScale = wd / defaultWidth;
      if (wd > defaultWidth) {
        fontSize = defaultFontSize;
      } else if (wd < minWidth) {
        globalScale = minWidth / defaultWidth;
        fontSize = (minWidth / defaultWidth) * defaultFontSize;
      } else {
        fontSize = (wd / defaultWidth) * defaultFontSize;
      }
      // console.log(fontSize);
      this.changeGlobalScale(globalScale);
      document.querySelector("html").style.fontSize = fontSize + "px";
      document.body.style.minHeight =
        (wd / defaultWidth) * defaultHeight + "px";
    },
    /**
     * window size 事件回调
     */
    resizeCall() {
      // this.debounce(50, )
      this.setHtmlSize();
    },
  },
};
</script>

<style lang="scss" scoped>
.rem-container {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
}
</style>
