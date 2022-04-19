<template>
  <div class="pg-index">
    <div class="bg-top" style="height:80px"></div>
    <div class="index-container">
      <!-- <img src="../assets/img/logo.png"> -->
      <p>Vue 大屏数据展示组件库</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
        <a href="http://192.168.10.240:60022/#/" target="view_window" class="case-demo">案例演示</a>
      </div>
      <div class="feature-description">
        <div class="content-box">
          <div>
            <div>持续优化</div>
            <div>长期维护，不断添加新组件以丰富组件库</div>
          </div>
          <div>
            <div>开箱即用</div>
            <div>大部分组件设置宽高或配置简单的数据即可使用</div>
          </div>
          <div>
            <div>视觉绚丽</div>
            <div>通过组合不同的配置项可以达到多变的视觉效果</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: document.documentElement.clientHeight,
    };
  },
};
</script>
<style type="text/less" lang="less">
.pg-index {
  height: 100%;
  background-image: url("../assets/img/bg.jpg");

    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center center;
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%;
    // min-width: 1000px;
    // z-index: -10;
    // zoom: 1;
    // background-color: #fff;
  .index-container {
    // width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 60px 0;
    margin-top: 12%;
    p {
      // margin-top: 56px;
      // color: #8994C6;
      color: #fff;
      font-size: 32px;
    }
  }
  .separate-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    .about {
      width: 100%;
      height: 100px;
      z-index: 9;
      // background: #fff;
      text-align: center;
      a {
        color: #fff;
        background-image: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
        box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);
        display: inline-block;
        width: 190px;
        height: 56px;
        margin: 0 35px;
        font-size: 18px;
        line-height: 56px;
        border-radius: 28px;
        transition: all 0.3s;
        // opacity: 0.9;
        cursor: pointer;
      }
      a:hover{
        opacity: 0.8;
      }
      .case-demo{
         background-image: linear-gradient(90deg, #87CEFA 0%, #00BFFF 100%);
      }
      .btn-github {
        color: #316de9;
        border: 1px solid #2f6ee9;
        background: #fff;
        box-shadow: none;
      }
    }
    .feature-description {
      height: 200px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-top: 120px;
      position: fixed;
      bottom: 60px;
      .content-box {
        width: 60%;
        display: flex;
        // height: 100%;
        // border-top: 1px solid #eaecef;
        // border-bottom: 1px solid #eaecef;
        & > div {
          width: 30%;
          margin: 8px;
          padding: 0 15px;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(211, 211 ,211 , 0.1);
          & > div {
            color: #eee;
            margin: 15px 0;
          }
          & > div:first-child {
            font-size: 25px;
          }
        }
      }
    }
  }
  .separate-panel:after {
    // content: '';
    display: block;
    position: absolute;
    top: -80px;
    width: 100%;
    height: 250px;
    background: #fff;
    box-shadow: 0 -4px 30px 0 #dfe1e6;
    transform: skewY(-4deg);
  }
}
</style>
