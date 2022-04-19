<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else>
      <!-- <mainHeader></mainHeader> -->
      <div v-if="!isIndex" class="main-content">
        <mainHeader></mainHeader>
        <div class="main-container">
          <div class="container">
            <sideNav class="nav"></sideNav>
            <el-scrollbar style="height:100%" ref="myScrollbar">
              <router-view class="view"></router-view>
            </el-scrollbar>
          </div>
        </div>

      </div>

      <router-view class="page" v-else></router-view>
      <!-- <mainFooter v-if="!isIndex"></mainFooter> -->
    </div>
  </div>
</template>

<script>
import mainHeader from "./components/header.vue";
import mainFooter from "./components/footer.vue";
import sideNav from "./components/side-nav.vue";
import mainSkeleton from "./main.skeleton.vue";

export default {
  name: "app",
  data() {
    return {
      init: false,
      isIndex: true,
    };
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === "index"||this.$route.name === "demo";
      if (this.$refs.myScrollbar) {
        this.$refs.myScrollbar.wrap.scrollTop = 0; //这句重置滚动条高度
      }
    },
  },
  mounted() {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true;
    }, 250);
  },
  components: {
    mainHeader,
    sideNav,
    mainFooter,
    mainSkeleton,
  },
};
</script>

<style lang="less" type="text/less">
@import "./assets/less/index";
#app {
  height: 100%;
  & > div {
    height: 100%;
  }
  .main-content {
    height: 100%;
  }
}
.main-container {
  padding-top: 100px;
  height: ~"calc(100% - 100px)";
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.container {
  // margin: 48px auto;
  position: relative;
  // top: 125px;
  margin: 0px auto;
  // width: 90%;
  height: 100%;
  padding: 0 0 0 60px;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    // float: left;
    width: calc(~"100% - 0px");
    padding: 32px 48px 48px;
    box-sizing: border-box;
    height: 100%;
  }
}

.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>
