<template>
  <div class="wdwh-dp-list1">
    <div class="mode-content">
      <ul class="list-rlzy">
        <li class="rlzy-item" v-for="(item, index) in wdwh_dp_list1" :key="index">
          <img :src="item.imgUrl" />
          <div class="info">
            <p>{{ item.title }}</p>
            <p>
              <!-- <span class="num">{{ item.num }}</span> 人 -->
              <span class="num">
                <countTo class="com-font-size-20 com-number" :key="new Date().getTime()" :separator="''" :endVal="item.num || 0" :duration="3000"></countTo>
              </span><span>人</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "wdwh-dp-data-stats",
  props: {
    wdwh_dp_list1: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.wdwh-dp-list1 {
  .mode-content {
    padding-top: 20px;
    .list-rlzy {
      display: flex;
      padding: 0 40px;
      .rlzy-item {
        width: 50%;
        margin-bottom: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 71px;
          height: 86px;
        }
        .info {
          padding-left: 23px;
          font-size: 20px;
          color: #fff;
          .num {
            font-size: 28px;
            color: #1cfeff;
          }
        }
      }
    }
  }
}
</style>