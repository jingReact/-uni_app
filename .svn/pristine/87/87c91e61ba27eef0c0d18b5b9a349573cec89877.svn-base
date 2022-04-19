<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="bar" :id="bar" :style="{ height: '300px', width: '100%' }" />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-bar-2',
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
      that.barData.colors =
        that.barData.colors && that.barData.colors.length >= 0
          ? that.barData.colors
          : []
      this.charts = echarts.init(document.getElementById(this.barId))
      this.charts.setOption({
        tooltip: {
          show: true
        },
        legend: {
          bottom: 10,
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '10%',
          right: '7%',
          top: '14%',
          bottom: '20%'
        },
        xAxis: {
          type: 'category',
          data: that.barData.xData,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#ffffff',
            fontSize: 13
          },
          axisLine: {
            show: false
          }
        },
        yAxis: [
          {
            name: that.barData.unit,
            type: 'value',
            interval: 20,
            nameTextStyle: {
              color: '#fff',
              fontSize: 16
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 13
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: that.barData.legend1,
            type: 'bar',
            barMaxWidth: 14,
            itemStyle: {
              color: that.barData.colors ? that.barData.colors[0] : '#83bff6'
            },
            data: that.barData.opinionData1
          },
          {
            name: that.barData.legend2,
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: that.barData.colors ? that.barData.colors[1] : '#FF8D2E'
              }
            },
            data: that.barData.opinionData2
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
