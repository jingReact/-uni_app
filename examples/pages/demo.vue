<template>
  <div class="back-img">
    <wdwh-dp-container>
      <wdwh-dp-header-container height="64px">
        <div class="wdwh-dp-header-container">
          <wdwh-dp-head-2 head-title="大屏框架演示大屏"></wdwh-dp-head-2>
        </div>
      </wdwh-dp-header-container>
      <wdwh-dp-main-container style="height: calc(100vh - 104px)">
        <wdwh-dp-content cols="1">
          <wdwh-dp-row span1="24" gutter="5">
            <wdwh-dp-col span="6">
              <wdwh-dp-row span1="8" gutter="5">
                <wdwh-dp-col span="24">
                  <dv-border-box-7>
                    <wdwh-dp-card-title-1 one-title="基础数据统计"></wdwh-dp-card-title-1>
                    <wdwh-dp-line-1 style="height: calc(100% - 40px)" :line-data="lineData" line-id="lineId"></wdwh-dp-line-1>
                  </dv-border-box-7>
                </wdwh-dp-col>
              </wdwh-dp-row>
              <wdwh-dp-row span1="8" gutter="5">
                <wdwh-dp-col span="24">
                  <dv-border-box-7>
                    <wdwh-dp-card-title-1 one-title="基础数据统计"></wdwh-dp-card-title-1>
                     <wdwh-dp-liquid-1 :liquid-data="liquidDatas" liquid-id="liquidId2" style="height: calc(100% - 40px)"></wdwh-dp-liquid-1>
                  </dv-border-box-7>
                </wdwh-dp-col>
              </wdwh-dp-row>
              <wdwh-dp-row span1="8" gutter="5">
                <wdwh-dp-col span="24">
                  <dv-border-box-7>
                    <wdwh-dp-card-title-1 one-title="基础数据统计"></wdwh-dp-card-title-1>
                     <wdwh-dp-pictorial-bar1 style="height: calc(100% - 40px); width: 100%" :chartdata="optionData2"></wdwh-dp-pictorial-bar1>
                  </dv-border-box-7>
                </wdwh-dp-col>
              </wdwh-dp-row>
            </wdwh-dp-col>
            <wdwh-dp-col span="12">
              <wdwh-dp-row span1="8">
                <wdwh-dp-col span="24">
                  <wdwh-dp-data-stats :wdwh_dp_list1="wdwh_dp_list1"></wdwh-dp-data-stats>
                  <wdwh-dp-data-stats :wdwh_dp_list1="wdwh_dp_list1"></wdwh-dp-data-stats>
                </wdwh-dp-col>
              </wdwh-dp-row>
              <wdwh-dp-row span1="15">
                <wdwh-dp-col span="24">
                  <!-- <wdwh-dp-bar-4
                    style="height: 100%; width: 100%"
                    :bar-data="barDashed"
                    bar-id="barId4"
                  ></wdwh-dp-bar-4> -->
                  <wdwh-dp-center-content></wdwh-dp-center-content>
                </wdwh-dp-col>
              </wdwh-dp-row>
            </wdwh-dp-col>
            <wdwh-dp-col span="6">
              <wdwh-dp-row span1="8" gutter="5">
                <wdwh-dp-col span="24">
                  <dv-border-box-7>
                    <wdwh-dp-card-title-1 one-title="基础数据统计"></wdwh-dp-card-title-1>
                     <wdwh-dp-bar-4 style="height: calc(100% - 20px); width: 100%" :bar-data="barDashed" bar-id="barId4"></wdwh-dp-bar-4>
                    
                  </dv-border-box-7>
                </wdwh-dp-col>
              </wdwh-dp-row>
              <wdwh-dp-row span1="8" gutter="5">
                <wdwh-dp-col span="24">
                  <dv-border-box-7>
                    <wdwh-dp-card-title-1 one-title="基础数据统计"></wdwh-dp-card-title-1>
                    <!-- <wdwh-dp-gauge-1 :gauge-data="gaugeData2" gauge-id="gaugeId2"></wdwh-dp-gauge-1> -->
                   
                     <wdwh-dp-pie-1 :pie-data="pieData" pie-id="pieId" style="height: calc(100% - 40px)"></wdwh-dp-pie-1>
                  </dv-border-box-7>
                </wdwh-dp-col>
              </wdwh-dp-row>
              <wdwh-dp-row span1="8" gutter="5">
                <wdwh-dp-col span="24">
                  <dv-border-box-7>
                    <wdwh-dp-card-title-1 one-title="基础数据统计"></wdwh-dp-card-title-1>
                    <wdwh-dp-scroll-list style="height: calc(100% - 65px)" :list-config="listConfig" :class-option="classOption"></wdwh-dp-scroll-list>
                  </dv-border-box-7>
                </wdwh-dp-col>
              </wdwh-dp-row>
            </wdwh-dp-col>
          </wdwh-dp-row>
        </wdwh-dp-content>
      </wdwh-dp-main-container>
      <wdwh-dp-footer-container height="40px">
        <wdwh-dp-footer footer-copy="万达信息股份有限公司 版权所有. 保留所有权利" version-number="V1.0"></wdwh-dp-footer>
      </wdwh-dp-footer-container>
    </wdwh-dp-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lineData: {
        xData: ["0201", "0202", "0203", "0204", "0205", "0206", "0207"],
        unit: "单位",
        legend1: "数据折线一",
        opinionData1: [90, 78, 75, 72, 50, 70, 74, 80],
      },
      pieData: {
        nameTitle: "性别",
        opinionData: [
          { value: 1048, name: "男" },
          { value: 735, name: "女" },
          { value: 75, name: "未知" },
        ],
      },
      liquidDatas: {
        data: 0.65,
        colors: ["rgba(89, 206, 206, 0.45)", "rgba(22, 162, 139, 0.45)"],
      },
      wdwh_dp_list1: [
        {
          imgUrl: require("../../packages/wdwh-dp-data-stats/src/img/type/rlzy-ys.png"), //路径为相对路径，需根据自己文件位置引用
          title: "医生",
          num: 78,
        },
        {
          imgUrl: require("../../packages/wdwh-dp-data-stats/src/img/type/rlzy-hs.png"),
          title: "护士",
          num: 1909,
        },
        {
          imgUrl: require("../../packages/wdwh-dp-data-stats/src/img/type/rlzy-zyys.png"),
          title: "执业医师数",
          num: 456,
        },
      ],
      barDashed: {
        xData: ["0201", "0202", "0203", "0204", "0205", "0206", "0207"],
        legend1: "数据统计一",
        legend2: "数据统计二",
        opinionData1: [86, 78, 86, 85, 79, 35, 66],
        opinionData2: [46, 58, 66, 58, 39, 15, 33],
      },
      optionData2: {
        xAxis: ["2020", "2021"],
        series: [
          { name: "武汉", data: ["11.8651", "4.9385"] },
          { name: "北京", data: ["3.7493", "1.5536"] },
        ],
        barWidth: 40,
        barCategoryGap: 10,
      },
      gaugeData2: {
        data: {
          value: 63,
          name: "标题",
        },
        colors: ["#5FDF74", "#00B19E"],
      },
      listConfig: {
        listDatas: [
          {
            title: "wewfe消息消息消息1111",
            data: "dss",
          },
          {
            title: "wewerf消息消息消息22222",
            data: "dss",
          },
          {
            title: "w546ew",
            data: "dsy65s",
          },
          {
            title: "wyew",
            data: "dstgts",
          },
          {
            title: "we34w",
            data: "dss",
          },
          {
            title: "we3476w",
            data: "dss",
          },
        ],
      },
    };
  },
  computed: {
    classOption() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
};
</script>
<style scoped>
.back-img {
  background: rgba(0, 0, 0, 0.6) url("./bg.jpeg") no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
}
</style>