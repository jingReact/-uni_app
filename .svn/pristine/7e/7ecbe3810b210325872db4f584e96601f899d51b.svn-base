<template>
  <div class="demo">
    <div class="title">{{ numTitle }}</div>
    <ul class="fp-box">
      <!-- 默认进来是7位，超过自动加 -->
      <li
        ref="li"
        v-for="i in countStr.length > 5 ? countStr.length : 5"
        :key="i"
      >
        <!-- 每列中的10行数字 -->
        <span v-for="num in 10" :key="num">
          <!-- <span class="line"></span> -->
          <!-- {{ num - 1 }} -->
          <span class="num-wrap">{{ num - 1 }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wdwh-dp-number',
  props: {
    countStr: String,
    numTitle: String
  },
  data () {
    return {
      numberArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 固定每列中的19行数字
      numStr: '', // 需要展示的数字字符串
      numArr: [0, 0, 0, 0, 0] // 默认展示7个数字数组
      // countStr: "", // 需要展示的数字
    }
  },
  mounted () {
    // this.countStr = "1132";
    this.initNumCard()
  },
  methods: {
    // 初始化数字卡片
    initNumCard () {
      this.numStr = this.countStr
      this.numArr = this.numStr.split('')
      let numArrlen = this.numArr.length
      // 展示数字的处理，不够7位前面补0
      // 默认进来是7位，超过自动加
      for (
        let i = 0;
        i < (this.countStr.length > 5 ? this.countStr.length : 5) - numArrlen;
        i++
      ) {
        this.numArr.unshift(0)
      }
      this.$refs.li.forEach((item, index) => {
        let ty = this.numArr[index]
        // 滚动数字(li标签)
        item.style.transform = `translateY(-${ty * 47}px)`
      })
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.demo{
  width:170px;
}
// 这个字体是我自己项目中引进来的字体
// @font-face {
//   font-family: "Orbitron";
//   src: url("../../../public/assets/fonts/Orbitron-Bold.ttf");
// }
// // 这个字体是我自己项目中引进来的字体
// @font-face {
//   font-family: "UnidreamLED";
//   src: url("../../../public/assets/fonts/UnidreamLED.ttf");
// }
.title {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
  color: #fff;
}
.fp-box {
  display: flex;
  overflow: hidden;
  li {
    width: 30px;
    height: 47px;
    flex-direction: column;
    transition: transform 1s ease-in-out;
    margin-right: 4px;
    & > span {
      text-align: center;
      //   background: url(../../assets/num-card-bg.png);
      background: #00b6fc;

      font-size: 24px;
      color: #ffffff;
      display: flex;
      display: inline-block;
      width: 30px;
      height: 47px;
      line-height: 47px;
      float: left;
      position: relative;
      font-family: 'Orbitron';
      .line {
        display: inline-block;
        height: 1px;
        background: #001347;
        width: 100%;
        position: absolute;
        left: 0;
        top: 23px;
      }
      .num-wrap {
        font-family: 'Orbitron';
      }
    }
  }
}
</style>
