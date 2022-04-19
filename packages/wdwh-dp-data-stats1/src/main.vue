<template>
  <div class="wdwh_dp_list1">
    <ul>
      <li v-for="(item,index) in wdwh_dp_list" :key="index">
        <div class="img">
          <img src="./img/type/list_1.png" alt="" />
          <img class="img1" src="./img/type/list_2.png" alt="" />
        </div>
        <div class="msg">
          <p>{{item.name}}</p>
          <p class="p1">
            <countTo
              class="com-font-size-20 com-number"
              :key="new Date().getTime()"
              :separator="''"
              :endVal="item.num || 0"
              :duration="3000"
            ></countTo>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "wdwh-dp-data-stats-1",
  props:{
     wdwh_dp_list:{
         type:Array,
         default:(()=>[])
     } 
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.wdwh_dp_list1 {
  height: 100%;
  ul {
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
      position: relative;
      height: 100px;
      font-size: 24px;
      width: 200px;
      color: #fff;
      list-style: none;
      .img {
        position: absolute;
        width: 100%;
        height: 100%;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .img1 {
          top: 50%;
          height: 2px;
        }
      }
      .msg {
        font-size: 20px;
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
        .p1 {
          font-size: 30px;
              color: #dbd525;
        }
      }
    }
  }
}
</style>