<template>
    <div class="bar" :id="bar" :style="{ height: '300px', width: '100%' }"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "wdwh-dp-bar-6",
  props: {
    // 接收父组件传递过来的信息
    barData: {
      type: Object,
      default: {},
    },
    barId: {
      type: String,
      default: "bar",
    },
  },
  data() {
    return {
      bar: this.barId,
      charts: "",
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(
        document.getElementById(this.barId)
      );
      //   let val = this.pictorialBarData.Xdata;
      //   let zbsj = this.pictorialBarData.Ydata;
      // 绘制图表
      myChart.setOption({
        grid: {
          // 直角坐标系内绘图网格
          left: '7%',
          right: '7%',
          top: '14%',
          bottom: '10%',
          containLabel: true, //gid区域是否包含坐标轴的刻度标签。为true的时候，
          // left/right/top/bottom/width/height决定的是包括了坐标轴标签在内的
          //所有内容所形成的矩形的位置.常用于【防止标签溢出】的场景
        },
        xAxis: {
          //直角坐标系grid中的x轴,
          //一般情况下单个grid组件最多只能放上下两个x轴,
          //多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
          type: "value", //坐标轴类型,分别有：
          //'value'-数值轴；'category'-类目轴;
          //'time'-时间轴;'log'-对数轴
          splitLine: { show: false }, //坐标轴在 grid 区域中的分隔线
          axisLabel: { show: false }, //坐标轴刻度标签
          axisTick: { show: false }, //坐标轴刻度
          axisLine: { show: false }, //坐标轴轴线
        },
        yAxis: {
          type: "category",
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: "#fff",
            fontSize: 14,
          },
          data: this.barData.Namedata, //类目数据，在类目轴（type: 'category'）中有效。
          //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
        },
        series: [
          //系列列表。每个系列通过 type 决定自己的图表类型
          {
            name: "%", //系列名称
            type: "bar", //柱状、条形图
            barWidth: 16, //柱条的宽度,默认自适应
            data: this.barData.Xdata, //系列中数据内容数组
            label: {
              //图形上的文本标签
              show: true,
              position: "right", //标签的位置
              offset: [0, -20], //标签文字的偏移，此处表示向上偏移40
              formatter: "{c}{a}", //标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
              color: "#fff", //标签字体颜色
              fontSize: 14, //标签字号
            },
            itemStyle: {
              //图形样式
              normal: {
                //normal 图形在默认状态下的样式;
                //emphasis图形在高亮状态下的样式
                barBorderRadius: 10, //柱条圆角半径,单位px.
                //此处统一设置4个角的圆角大小;
                //也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#00BA9E", //柱图渐变色起点颜色
                  },
                  {
                    offset: 1,
                    color: "#18ED90", //柱图渐变色终点颜色
                  },
                ]),
              },
            },
            zlevel: 1, //柱状图所有图形的 zlevel 值,
            //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
          },
          {
            name: "进度条背景",
            type: "bar",
            barGap: "-100%", //不同系列的柱间距离，为百分比。
            // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
            // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
            //并且是对此坐标系中所有 'bar' 系列生效。
            barWidth: 16,
            data: this.barData.Ydata,
            color: "rgba(0, 213, 143, .3)", //柱条颜色
            itemStyle: {
              normal: {
                barBorderRadius: 10,
              },
            },
          },
        ],
      });
      this.$echartsResize(myChart);
    },
  },
};
</script>