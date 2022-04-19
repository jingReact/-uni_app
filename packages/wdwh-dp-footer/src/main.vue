<template>
  <div class="commonFooter">
    <p class="copyrightClass">
      <span>©{{ newTime + footerCopy }}{{versionNumber}}</span>
      <span></span>
    </p>
  </div>
</template>
<script>
export default {
  name: "wdwh-dp-footer",
  props: {
    footerCopy: {
      type: String,
      default: true,
    },
    versionNumber: {
      type: String,
      default: false,
    },
  },
  data() {
    return {
      newTime: "",
    };
  },
  mounted() {
    this.newTime = new Date().getFullYear();
    // this.copName = sessionStorage.getItem('copName')
  },
};
</script>
<style lang="less" scoped>
.commonFooter {
  flex-grow: 0;
  flex-shrink: 0;
  height: 40px;
  line-height: 40px;
  // box-shadow: -4px -1px 6px 1px #ececec;
  position: relative;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .copyrightClass {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    span:last-child {
      margin-left: 50px;
    }
  }
}
</style>


