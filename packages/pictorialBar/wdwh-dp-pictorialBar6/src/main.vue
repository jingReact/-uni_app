<template>
  <div :id="elId" style="height:100%,width:100%;" />
</template>
<script>
export default {
  name: "wdwh-dp-pictorial-bar6",
  data() {
    return {
      elId: "",
      chart: null,
    };
  },
  props: {
    chartdata: {
      type: Array,
      default: ()=>[],
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
      let fontColor = "#a8b5f7";
      let MaxData = [];

      let xData = [];
      let sData = [];
      let max = 200;
      this.chartdata.forEach((item) => {
        xData.push(item.name);
        sData.push(item.value);
        MaxData.push(max);
      });

      let lineOption = {
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
        backgroundColor: "rgba(20,30,57,.61)",  //调整echarts背景色，可设置两种风格，dark和light
        // backgroundColor: "#ffff",  //调整echarts背景色，可设置两种风格，dark和light
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          containLabel: true,
          top: "12%",
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
            data: xData,
            axisLine: lineOption01,
            boundaryGap: true,
            axisTick: {
              show: true,
              lineStyle: {
                color: lineOption01,
              },
            },
            axisLabel: {
              margin: 10,
              color: fontColor,
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
            name: "样式1",
            type: "bar",
            barWidth: 8,
            data: this.chartdata,
            itemStyle: {
              barBorderRadius: 2,
            },
            markPoint: {
              symbol:'pin',
              symbolSize: 33,
              label: {
                color: "#fff",
                fontSize: 11,
              },
              data: [
                {
                  type: "max",
                  name: "最大值",
                  itemStyle: {
                    color: "#ee7d14",
                  },
                },
                {
                  type: "min",
                  name: "最小值",
                  itemStyle: {
                    color: "#146aed",
                  },
                },
              ],
            },
            markLine: {
              symbolSize: [3, 12],
              lineStyle: {
                color: "#ff524f",
                type: "dashed",
              },
              label: {
                show: false,
              },
              data: [
                {
                  name: "平均线",
                  type: "average",
                },
              ],
            },
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
