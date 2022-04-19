<template>
  <div class="content-flex">
    <div class="ui-container">
      <div class="ellipse-box"></div>
      <div class="center-circle">
        <p>{{ dataConfig.centerInfo.value }}</p>
        <p>{{ dataConfig.centerInfo.title }}</p>
      </div>
      <div
        v-for="(item, index) in dataConfig.ballData"
        :key="index"
        :class="['ball', 'ball' + (index + 1)]"
      >
        <div class="img-box">
          <img :src="item.iconSrc" />
        </div>
        <div class="info">
          <count-to
            :start-val="0"
            :end-val="item.endVal"
            :duration="3000"
            style="font-size: 20px; color: #9ecbff"
          ></count-to>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wdwh-dp-center-content-1',
  props: {
    dataConfig: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  font-size: 20px;
}

.content-flex{
  display: flex;
  justify-content: center;
}

.ui-container {
  position: relative;

  .center-circle {
    width: 10rem;
    height: 10rem;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50%;
    background: rgba(64, 149, 216, 0.7);
    box-shadow: rgba(75, 75, 77, 0.8) 0px 0px 30px 5px inset;
    p {
      color: #fff;
      font-size: 1.6rem;
      padding: 0;
      margin: 0;
      &:nth-of-type(1) {
        padding-top: 2rem;
      }
    }
  }
}
.ellipse-box {
  width: 30rem;
  height: 30rem;
  border: 1px solid #185593;
  border-radius: 50%;
  position: relative;
  transform: rotateX(-38deg) rotateY(-6deg);

  &::after {
    content: '';
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
    width: 28rem;
    height: 28rem;
    border: 3px solid rgba(120, 165, 246, 0.09);
    border-radius: 50%;
  }
}

@keyframes animX {
  0% {
    left: -2rem;
  }
  100% {
    left: 27rem;
  }
}
@keyframes animY {
  0% {
    top: 1rem;
  }
  100% {
    top: 25rem;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}

.ball {
  position: absolute;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .img-box {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid #185593;
    text-align: center;
    position: relative;
    img {
      width: 3rem;
      height: 3rem;
      flex-shrink: 0;
      position: absolute;
      top: 0.5rem;
      left: 0.7rem;
    }
  }

  .info {
    margin-left: 5px;
    p {
      color: #1c7bc5;
      font-size: 14px;
      width: 100px;
    }
  }
}
//5个圆,x和y轴动画加起来是30s , 30s/5 等于 6s
//每个球y轴动画延迟 从0递减6s,x轴与y相差动画时长的一半（15s/2）
.ball1 {
  animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -7.5s infinite alternate,
    animY 15s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 30s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
}

.ball2 {
  animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -13.5s infinite alternate,
    animY 15s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate,
    scale 30s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate;
}

.ball3 {
  animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -19.5s infinite alternate,
    animY 15s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate,
    scale 30s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
}

.ball4 {
  animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -25.5s infinite alternate,
    animY 15s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate,
    scale 30s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate;
}

.ball5 {
  animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -31.5s infinite alternate,
    animY 15s cubic-bezier(0.36, 0, 0.64, 1) -24s infinite alternate,
    scale 30s cubic-bezier(0.36, 0, 0.64, 1) -24s infinite alternate;
}
</style>
