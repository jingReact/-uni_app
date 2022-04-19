<template>
  <div class="modeTop">
    <label for="">{{ oneTitle }}</label>
  </div>
</template>
<script>
export default {
  name:"wdwh-dp-card-title",
  props: {
    oneTitle: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.modeTop {
  padding: 0px 10px;
  text-align: left;
  background-image: url("./img/title_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-left: 25px;
  label {
    font-size: 14px;
    margin: 0 10px;
    color: #fff;
  }
}
</style>