<template>
  <div class="headBox">
    <span class="gradient-text">{{ headTitle }}</span>
  </div>
</template>
<script>
export default {
  name: 'wdwh-dp-head-1',
  props: {
    headTitle: String,
    default: false
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.headBox {
  z-index: 2;
  position: relative;
  height: 5rem;
  line-height: 5rem;
  background: url('./header-bg.png') no-repeat;
  background-size: 100% 100%;
  .gradient-text {
    display: block;
    text-align: center;
    font-size: 1.7rem;
    // font-weight: bold;
    color: #ededed;
    letter-spacing: 2px;
    text-shadow: 0 0 5px #040d1e;
    height: 5rem;
    line-height: 5rem;
  }
}
</style>
