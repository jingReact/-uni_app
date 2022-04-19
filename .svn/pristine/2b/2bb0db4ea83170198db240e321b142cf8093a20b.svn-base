<template>
  <div :id="elId" style="height:100%,width:100%;" />
</template>
<script>
export default {
  name: "wdwh-dp-pictorial-bar7",
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
      let fontColor = "#a8b5f7";
      let xData = ["2022", "2021", "2020", "2019"];
      let sData = ["105", "155", "175", "99"];
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
      let barTopColor = ["#31eec4", "#06c7ed", "#84a1ff", "#ca8ff4"];
      let barBottomColor = [
        "rgba(0,130,101,0.8)",
        "rgba(0, 89, 158, 0.8)",
        "rgba(31, 60, 184, 0.8)",
        "rgba(85, 68, 204, 0.8)",
      ];
      let self = this;
      let option = {
        backgroundColor: "rgba(20,30,57,.61)",
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          containLabel: true,
          top: "13%",
          right: "5%",
          left: "5%",
          bottom: "6%",
        },
        xAxis: [
          {
            type: "category",
            data: xData,
            axisLine: lineOption01,
            boundaryGap: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: lineOption01,
              },
            },
            axisLabel: {
              margin: 18,
              color: fontColor,
              fontSize: 10,
            },
            splitArea: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: fontColor,
              fontSize: 10,
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
        series: [
          {
            name: "柱顶部",
            type: "pictorialBar",
            symbolSize: [16, 7],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
              color: function (params) {
                return barTopColor[params.dataIndex];
              },
            },
            label: {
              show: true,
              color: "white",
              position: "top",
              fontSize: 12,
            },
            symbolPosition: "end",
            data: sData,
          },
          {
            name: "柱底部",
            type: "pictorialBar",
            symbolSize: [16, 7],
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
              color: function (params) {
                return barTopColor[params.dataIndex];
              },
            },
            data: sData,
          },
          {
            name: "第一圈",
            type: "pictorialBar",
            symbolSize: [27, 10],
            symbolOffset: [0, 8],
            z: 11,
            itemStyle: {
              color: "transparent",
              borderWidth: 10,
            },
            data: [
              {
                value: sData[0],
                itemStyle: {
                  borderColor: barTopColor[0],
                },
              },
              {
                value: sData[1],
                itemStyle: {
                  borderColor: barTopColor[1],
                },
              },
              {
                value: sData[2],
                itemStyle: {
                  borderColor: barTopColor[2],
                },
              },
              {
                value: sData[3],
                itemStyle: {
                  borderColor: barTopColor[3],
                },
              },
            ],
          },
          {
            name: "第二圈",
            type: "pictorialBar",
            symbolSize: [34, 14],
            symbolOffset: [0, 11],
            z: 10,
            itemStyle: {
              color: "transparent",
              borderWidth: 10,
            },
            data: [
              {
                value: sData[0],
                itemStyle: {
                  borderColor: barTopColor[0],
                },
              },
              {
                value: sData[1],
                itemStyle: {
                  borderColor: barTopColor[1],
                },
              },
              {
                value: sData[2],
                itemStyle: {
                  borderColor: barTopColor[2],
                },
              },
              {
                value: sData[3],
                itemStyle: {
                  borderColor: barTopColor[3],
                },
              },
            ],
          },
          {
            type: "bar",
            itemStyle: {
              color: function (params) {
                return new self.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: barTopColor[params.dataIndex],
                  },
                  {
                    offset: 1,
                    color: barBottomColor[params.dataIndex],
                  },
                ]);
              },
              opacity: 0.8,
            },
            z: 16,
            silent: true,
            barWidth: 16,
            barGap: "-100%", // Make series be overlap
            data: sData,
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
