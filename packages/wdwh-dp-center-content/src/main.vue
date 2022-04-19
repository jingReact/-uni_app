<template>
  <div class="ui-container-earth">
    <div class="center_earth">
      <div id="content">
        <div class="section3">
          <div class="ui_base u_p3d">
            <!-- 中间圆球 -->
            <div class="ball_c"></div>
            <!-- 外侧轨道线 1 -->
            <div class="base u_p3d" ref="baseU">
              <!-- 轨道线 2 -->
              <div class="line1"></div>
              <!-- 轨道线 3 -->
              <div class="line2"></div>
              <div
                v-for="(item, index) in contentData"
                :key="index"
                :class="'ball_base u_p3d' + ' ' + 'ball_' + (index + 1)"
              >
                <div
                  @mousemove="aa(index)"
                  @mouseout="bb"
                  class="ball"
                  @click="ballClick(index)"
                  ref="ball"
                  :class="idx == index ? 'bbb' : ''"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wdwh-dp-center-content',
  props: {
    contentData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      idx: 0
    }
  },
  methods: {
    aa (i) {
      this.$refs.baseU.style.animationPlayState = 'paused'
      this.$refs.ball.forEach(element => {
        element.style.animationPlayState = 'paused'
      })
    },
    bb () {
      this.$refs.baseU.style.animationPlayState = 'running'
      this.$refs.ball.forEach(element => {
        element.style.animationPlayState = 'running'
      })
    },
    ballClick (index) {
      this.idx = index
      this.$emit('ballClick', index)
    }
  }
}
</script>
<style lang="less" scoped>
html {
  font-size: 20px;
}
.ui-container-earth {
  width: 100%;
  height: 30rem;
}
.center_earth {
  height: 100%;
  width: 100%;
  #content {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .section3 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  .section3 .ui_base {
    /* 中间容器 */
    // perspective: 2260px;
    perspective-origin: 50% 25%;
  }

  /* 中间圆球位置 */
  .section3 .ball_c {
    transform-origin: 50% 50%;
    position: absolute;
    width: 12.5rem;
    height: 12.5rem;
    background: url('./img/yuan_bg.png') no-repeat center center;
    background-size: 100% 100%;
    left: 48%;
    top: 45%;
    transform: translate(-50%, -50%);
    border-radius: 50%; /* 加此属性为了解决图片所带阴影背景 */
  }

  /* 外侧轨道线 */
  .section3 .base {
    animation: cir 50s linear 0s infinite;
    border: 5px solid #fff;
    border-radius: 50%;
    position: relative;
  }
  /* 外侧轨道线 */
  .u_p3d {
    transform-style: preserve-3d;
  }
  /* 轨道位置 */
  .section3 .base {
    transform: rotateX(80deg) rotateY(-10deg);
    position: relative;
    width: 39rem;
    height: 39rem;
    backface-visibility: hidden;
    // top: -50px;
    // left: -50px;
  }
  /* 轨迹线2 */
  .line1 {
    width: 32.5rem;
    height: 32.5rem;
    border: 3px solid #ccc;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 轨迹线3 */
  .line2 {
    width: 25rem;
    height: 25rem;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /* 小圆球  容器 ball_base*/
  .section3 .ball_base {
    transform-origin: 1.25rem 0rem;
    width: 5rem;
    height: 5rem;
    position: absolute;
    cursor: pointer;
  }
  .section3 .ball_base .ball {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  .section3 .ball_1 {
    /*  ____ 外侧容器 */

    transform: rotateX(-90deg) rotateY(0deg) translate(0, -50%);
    position: absolute;
    left: 82%;
    top: 60%;
  }

  .section3 .ball_2 {
    /*  ____ 外侧容器 */

    transform: rotateX(-90deg) rotateY(60deg) translateY(-70px);
    position: absolute;
    top: 50%;
    /*right: 0%;*/
  }

  .section3 .ball_3 {
    /*  ____ 外侧容器 */

    transform: rotateX(-90deg) rotateY(120deg) translateY(-70px);
    position: absolute;
    top: 6%;
    left: 52%;
  }
  .section3 .ball_4 {
    /*  ____ 外侧容器  */

    transform: rotateX(-90deg) rotateY(180deg) translateY(-70px);
    position: absolute;
    bottom: 0;
    left: 20%;
  }
  .section3 .ball_5 {
    /*  ____ 外侧容器 */

    transform: rotateX(-90deg) rotateY(240deg) translateY(-70px);
    position: absolute;
    top: 28%;
    /*left: 60%;*/
  }

  .section3 .ball_1 .ball {
    transform: rotateY(10deg) rotateZ(10deg);
  }

  .section3 .ball_2 .ball {
    transform: rotateY(-50deg) rotateZ(10deg);
  }

  .section3 .ball_3 .ball {
    transform: rotateY(-110deg) rotateZ(10deg);
  }

  .section3 .ball_4 .ball {
    transform: rotateY(-170deg) rotateZ(10deg);
  }

  .section3 .ball_5 .ball {
    transform: rotateY(-230deg) rotateZ(10deg);
  }

  .section3 .ball {
    transition: all 2s ease-out 0ms;
    transform-origin: 50% 50%;
    background: url('./img/conter_qiu.png') no-repeat center center;
    background-size: 100% 100%;
    text-align: center;
    width: 6rem;
    height: 6rem;
    color: #fff;
    font-size: 0.9rem;
    padding: 1.5rem;
    padding-left: 1rem;
  }
  .section3 .bbb {
    transition: all 2s ease-out 0ms;
    transform-origin: 50% 50%;
    background: url('./img/active_qiu.png') no-repeat center center;
    background-size: 100% 100%;
    text-align: center;
    width: 7.5rem;
    height: 7.5rem;
    color: #fff;
    font-size: 0.9rem;
    padding: 1.5rem;
    padding-left: 1rem;
  }

  .section3 .ball_1 .ball {
    transition-delay: 1100ms;
  }

  .section3 .ball_2 .ball {
    transition-delay: 900ms;
  }

  .section3 .ball_3 .ball {
    transition-delay: 700ms;
  }

  .section3 .ball_4 .ball {
    transition-delay: 500ms;
  }

  .section3 .ball_5 .ball {
    transition-delay: 300ms;
  }

  .section3 .ball_1 .ball {
    animation: cir1 50s linear 0s infinite;
  }

  .section3 .ball_2 .ball {
    animation: cir2 50s linear 0s infinite;
  }

  .section3 .ball_3 .ball {
    animation: cir3 50s linear 0s infinite;
  }

  .section3 .ball_4 .ball {
    animation: cir4 50s linear 0s infinite;
  }

  .section3 .ball_5 .ball {
    animation: cir5 50s linear 0s infinite;
  }

  @keyframes cir1 {
    0% {
      transform: rotateY(0deg) rotateZ(10deg);
    }
    100% {
      transform: rotateY(-360deg) rotateZ(10deg);
    }
  }

  @keyframes cir2 {
    0% {
      transform: rotateY(-60deg) rotateZ(10deg);
    }
    100% {
      transform: rotateY(-420deg) rotateZ(10deg);
    }
  }

  @keyframes cir3 {
    0% {
      transform: rotateY(-120deg) rotateZ(10deg);
    }
    100% {
      transform: rotateY(-480deg) rotateZ(10deg);
    }
  }

  @keyframes cir4 {
    0% {
      transform: rotateY(-180deg) rotateZ(10deg);
    }
    100% {
      transform: rotateY(-540deg) rotateZ(10deg);
    }
  }

  @keyframes cir5 {
    0% {
      transform: rotateY(-240deg) rotateZ(10deg);
    }
    100% {
      transform: rotateY(-600deg) rotateZ(10deg);
    }
  }

  @keyframes cir {
    0% {
      transform: rotateX(80deg) rotateY(-10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(80deg) rotateY(-10deg) rotateZ(-360deg);
    }
  }
}
</style>
