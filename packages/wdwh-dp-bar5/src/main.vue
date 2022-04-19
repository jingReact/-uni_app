<template>
  <div>
    <div class="bar" :id="bar" :style="{ height: '300px', width: '100%' }"></div>
  </div>

</template>
<script>
// 引入echarts
import * as echarts from "echarts";
export default {
  name: "wdwh-dp-bar-5",
  props: {
    // 接收父组件传递过来的信息
     barData: {
      type: Object,
      default: {}
    },
    barId: {
      type: String,
      default: 'bar'
    }
  },
  data() {
    return {
      bar: this.barId,
      charts: ''
    };
  },
  methods: {
    drawChart() {
       let that = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.barId));
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: 'ECharts'
        // },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "#ffffff",
          },
        },
        tooltip: {},
        xAxis: {
          data:that.barData.xData,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: that.barData.opinionData1,
            itemStyle: {
              //  color: function (params) {
              //     const colorList = this.chartData.colorArray;
              //     return this.chartData.colorArray.length > 0
              //       ? colorList[params.dataIndex]
              //       : "#EA8187";
              //   },
            },
          },
        ],
      });
      this.$echartsResize(myChart);

      myChart.on("click", function (param) {
        //param.name x轴值,param.data y轴值
        //  _this.CeshiVisible = true
        vm.$emit("needEcharsBar", true);
      });
    },
  },

  computed: {
    echarts() {
      return "echarts" + Math.random() * 100000;
    },
  },
  mounted: function () {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {},
};
</script>

<style scoped>
</style>
