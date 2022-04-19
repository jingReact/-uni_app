<template>
  <div :id="elId" style="height:100%,width:100%;" />
</template>
<script>
import { linear, linearGradientColorList } from "./color";
export default {
  name: "wdwh-dp-pictorial-bar1",
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
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
    // 绘图
    initChart() {
      if (!document.getElementById(this.elId)) return;
      this.chart = this.$echarts.init(document.getElementById(this.elId));
      // 处理数据
      let legend = [];
      let series = [];
      let x = this.chartdata.barWidth; //barWidth
      let y = x / 4; //barCategoryGap
      if (!this.chartdata.series || !(this.chartdata.series instanceof Array))
        return;
      // 计算symbolOffset数组
      let num = this.chartdata.series.length;
      let l = 0;
      let middle = 0;
      let arr = []; //symbolOffset数组
      let offest = 0;
      for (let i = 1; i <= num; i++) {
        if (num > 1) {
          middle = (x * (num + 1)) / 2 + ((num + 1) / 2 - 1) * y;
          if (i == (num + 1) / 2) {
            offest = 0;
          } else {
            offest = 2 * (i - (num + 1) / 2);
          }
          l = i * x + (i - 1) * y - middle - offest;
        } else {
          l = 0;
        }
        arr.push(l);
      }
      // console.log(arr);
      this.chartdata.series.forEach((item, index) => {
        legend.push(item.name);
        let seriesTemp = [
          {
            name: item.name,
            type: "bar",
            barWidth: x,
            barCategoryGap: y,
            data: item.data,
            itemStyle: {
              // 柱体渐变色
              color: linear(
                linearGradientColorList[index].startColor,
                linearGradientColorList[index].endColor
              ),
              borderWidth: 0,
            },
          },
          {
            name: item.name,
            type: "pictorialBar",
            symbolSize: [x, y],
            // 这个属性很重要，直接决定了顶部跟柱子是否契合
            symbolOffset: [arr[index], -y / 2],
            z: 12,
            itemStyle: {
              color: linearGradientColorList[index].endColor,
              borderWidth: 0,
            },
            symbolPosition: "end",
            // 要给成武汉这两个柱子的值，这是圆柱顶部，值不给对高度会对不上
            data: item.data,
          },
          {
            name: item.name,
            type: "pictorialBar",
            symbolSize: [x, y],
            symbolOffset: [arr[index], y / 2],
            z: 12,
            itemStyle: {
              color: linearGradientColorList[index].endColor,
              borderWidth: 0,
            },
            symbolPosition: "start", // 这个给成大于 0 的值就行，设置了 position，一定会在柱子底部展示
            data: item.data,
          },
        ];
        series = series.concat(seriesTemp);
      });

      let option = {
        tooltip: {
          trigger: "axis",
          confine: true,
          axisPointer: { type: "none" },
          textStyle: { fontSize: 12, fontWeight: 500 },
          formatter(params) {
            // 只展示柱子对应的内容，把顶部底部的 tooltip 过滤掉
            return params.reduce((pre, i) => {
              if (i.componentSubType === "bar") {
                i.marker = i.marker.replace(
                  /\[object Object\]/,
                  i.color.colorStops[1].color
                );
                i.value = `<span style="flex: 1; text-align: right; margin-left: 16px;">${i.value}</span>`;
                const current = `<div style="display: flex; align-items: center; height: 26px;">${i.marker}${i.seriesName} ${i.value}</div>`;
                return `${pre}${current}`;
              }
              return pre;
            }, "");
          },
        },
        legend: {
          data: legend,
          right: 10,
          top: 12,
          type: "scroll",
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 16,
          textStyle: {
            color: "#F2F4F7",
          },
          // 因为柱子顶部和底部是通过 offset 跟柱子结合起来的，如果取消选中，柱子数量变化，又要重新计算 offset，为了简单点就直接禁掉了
          selectedMode: false,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true,
          borderWidth: 0,
        },
        xAxis: {
          type: "category",
          data: this.chartdata.xAxis,
          axisLine: { lineStyle: { color: "#F2F4F7" } },
          axisTick: { show: false },
          axisLabel: { color: "#585D63" },
        },
        yAxis: {
          boundaryGap: [0, 0.01],
          axisLine: { lineStyle: { color: "#F2F4F7" } },
          axisTick: { show: false },
          axisLabel: { color: "#585D63" },
          splitLine: { lineStyle: { color: "#F2F4F7" } },
        },
        series: series,
        // legend 对应的 color，实际上柱状图的颜色都是在 itemStyle 里定义的
        color: ["#C65FF9", "#FF704C", "#2872FC"],
      };
      this.chart.setOption(option);
      const that = this;
      this.$echartsResize(that.chart);
    },
  },
};
</script>
