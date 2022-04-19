<template>
  <div class="ui-data-status">
    <div class="data-list">
      <div class="center-icon">
        <i class="el-icon-star-off"></i>
      </div>
      <div
        v-for="(item, index) in dataInfo"
        :key="index"
        :class="['data-item', item.isDanger ? 'item-danger' : '']"
      >
        <p>{{ item.title }}</p>
        <countTo
          class="count"
          :key="new Date().getTime()"
          :separator="''"
          :endVal="item.count || 0"
          :duration="2000"
        ></countTo>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wdwh-dp-data-stats-2',
  props: {
    dataInfo: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-data-status {
  html: 20px;

  .data-list {
    display: flex;
    flex-wrap: wrap;
    width: 22rem;
    position: relative;

    .center-icon {
      width: 3rem;
      height: 3rem;
      line-height: 2.9rem;
      border-radius: 50%;
      border: 1px solid rgba(49, 167, 245, 0.64);
      position: absolute;
      left: 8.9rem;
      top: 3.9rem;
      color: rgba(219, 240, 255, 0.9);
      background: #282c34;
      font-size: 28px;
      text-align: center;
    }

    .item-danger {
      width: 10rem;
      height: 5rem;
      border: 1px solid rgba(253, 132, 132, 0.16);
      text-align: center;
      color: rgba(255, 223, 223, 0.9);
      border-radius: 5px;
      margin: 0 10px 10px 0;
      background: linear-gradient(
        to right,
        rgba(198, 26, 26, 0.14),
        transparent
      );

      &:nth-of-type(2n) {
        background: linear-gradient(
          to left,
          rgba(198, 26, 26, 0.14),
          transparent
        );
      }

      p {
        color: rgba(255, 223, 223, 0.9);
      }
    }
  }
  .data-item {
    width: 10rem;
    height: 5rem;
    border: 1px solid rgba(49, 167, 245, 0.17);
    text-align: center;
    color: rgba(219, 240, 255, 0.9);
    border-radius: 5px;
    margin: 0 10px 10px 0;
    background: linear-gradient(to right, rgba(26, 130, 198, 0.25), transparent);

    &:nth-of-type(2n) {
      background: linear-gradient(
        to left,
        rgba(26, 130, 198, 0.25),
        transparent
      );
    }

    p {
      font-size: 14px;
      margin-top: 0.8rem;
      color: rgba(219, 240, 255, 0.9);
    }

    .count {
      font-size: 22px;
    }
  }
}
</style>
