<template>
<div class="all">
  <div class="body">
  </div>
  <div class="input-card">
      <div class="input-item">
        <button id="province" @click="returnHb">{{ serveName }}</button>
      </div>
      <div class="input-item">
        <select id="city" @change="cityOrdistrict('city')"></select>
      </div>
      <div class="input-item">
        <select id="district" @change="cityOrdistrict('district')"></select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "streetDialog",
  props: {
    serveName: {
      type:String,
      default: "湖北省"
    },
     typeCode: {
       type:Number,
      default: 420000
    }
  },
  data() {
    return{
      
    }
  },
  mounted() {},
  computed: {},
  created() {},
  methods: {
    cityOrdistrict(CityCode) {
      this.$emit("change", CityCode);
    },
    returnHb() {
      this.$emit("getTypeCode", this.typeCode);
    }
  }
};
</script>
<style lang="less" scoped>
@color:#000001;
@color2:#fff;
@color1:#0080a1;
.all{
  position: relative;
  z-index: 1;
}
.body {
  height: 70vh;
  margin-left: -10%;
  .input-card {
    z-index: 99;
    position: relative;
    height: 118px;
    width: 200px;
    transform: translate(70.2vw,-70vh);
    background: @color;
    color: @color2;
    border: none;
    #province,
    #city,
    #district {
      width: 100%;
      padding: 3px 0;
      margin: 5px 1px;
      text-align: center;
      background: @color;
      color: @color1;
      border: 1px solid @color1;
    }
  }
}

</style>
