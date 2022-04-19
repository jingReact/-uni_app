<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="bar" :id="bar" :style="{ height: '300px', width: '100%' }" />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-bar-4',
  props: {
    barData: {
      type: Object,
      default: {}
    },
    barId: {
      type: String,
      default: 'bar'
    }
  }, // 满足一个页面有多个饼图，建议传入不同id
  data () {
    return {
      bar: this.barId,
      charts: ''
    }
  },
  mounted () {
    this.drawBar()
  },
  methods: {
    drawBar () {
      let that = this
      this.charts = echarts.init(document.getElementById(this.barId))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: [that.barData.legend1, that.barData.legend2],
          textStyle: {
            color: '#ccc'
          }
        },
        xAxis: {
          data: that.barData.xData,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        series: [
          {
            name: that.barData.legend1,
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: that.barData.opinionData1
          },
          {
            name: that.barData.legend2,
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              borderRadius: 5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#14c8d4' },
                { offset: 1, color: '#43eec6' }
              ])
            },
            data: that.barData.opinionData2
          },
          {
            name: that.barData.legend1,
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(20,200,212,0.5)' },
                { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                { offset: 1, color: 'rgba(20,200,212,0)' }
              ])
            },
            z: -12,
            data: that.barData.opinionData1
          },
          {
            name: that.barData.legend1,
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              color: '#0f375f'
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: that.barData.opinionData1
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
