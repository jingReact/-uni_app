<template>
  <div :id="elId" style="height:100%,width:100%;" />
</template>
<script>
export default {
  name: "wdwh-dp-pictorial-bar3",
  data() {
    return {
      elId: "",
      chart: null,
    };
  },
  props: {
    chartdata: {
      type: Object,
      default: {},
    },
  },
  created() {
    this.elId = this.uuid();
  },
  mounted() {
    // 实例化echarts对象
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    chartdata: {
      deep: true,
      handler: function () {
        this.$nextTick(() => {
          this.initChart();
        });
      },
    },
  },
  methods: {
    // 生成唯一uuid做为唯一标识符
    uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
    // 绘图
    initChart() {
      if (!document.getElementById(this.elId)) return;
      this.chart = this.$echarts.init(document.getElementById(this.elId));
      let chartData = {
        axisData: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
        data01: [30, 40, 35, 18, 55, 25, 26, 56, 60],
        data02: [25, 35, 30, 13, 50, 20, 21, 51, 55],
        data03: [22, 32, 27, 10, 47, 17, 18, 48, 52],
      };
      let fontColor = "#a8b5f7";
      let colorStyle = [
          "rgba(254,227,54,.4)",
          "rgba(58,155,255,.4)",
          "rgba(164,115,255,.4)",
          "rgba(49,238,196,.4)",
        ],
        lineOption = {
          lineStyle: {
            color: "rgba(56,76,131,.3)",
            type: "solid",
          },
        };
      let lineOption01 = {
        lineStyle: {
          color: "rgba(169,219,255,.3)",
          type: "solid",
        },
      };
      let option = {
        backgroundColor: "rgba(20,30,57,.61)",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          containLabel: true,
          top: "8%",
          right: "5%",
          left: "5%",
          bottom: "6%",
        },
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: fontColor,
              textStyle: {
                fontSize: 10,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: lineOption,
          },
        ],
        xAxis: [
          {
            type: "category",
            data: chartData.axisData,
            min: -1,
            max: 9,
            axisLine: lineOption01,
            boundaryGap: false,
            axisTick: {
              show: true,
              lineStyle: {
                color: lineOption01,
              },
              interval: (index) => {
                if (index === -1 || index === 9) {
                  return false;
                } else {
                  return true;
                }
              },
            },
            axisLabel: {
              margin: 10,
              color: fontColor,
              interval: 0,
              textStyle: {
                fontSize: 10,
              },
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "hill",
            barMinHeight: 2,
            type: "pictorialBar",
            barCategoryGap: "-60%",
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            label: {
              show: false,
            },
            data: chartData.data01.map((item, index) => {
              return {
                value: item,
                itemStyle: {
                  color: colorStyle[index % 4],
                },
              };
            }),
            z: 10,
          },
          {
            type: "line",
            symbol: "circle",
            symbolSize: 3,
            itemStyle: {
              color: "#48abff",
            },
            lineStyle: {
              width: 0,
            },
            data: chartData.data02,
            z: 11,
          },
          {
            type: "line",
            symbol: "circle",
            symbolSize: 3,
            itemStyle: {
              color: "#fee131",
            },
            lineStyle: {
              width: 0,
            },
            data: chartData.data03,
            z: 11,
          },
        ],
      };
      this.chart.setOption(option);
      const that = this;
      this.$echartsResize(that.chart);
    },
  },
};
</script>
