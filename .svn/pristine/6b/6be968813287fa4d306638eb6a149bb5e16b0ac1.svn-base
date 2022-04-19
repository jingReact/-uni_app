<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="rect" :id="rect" :style="{ height: '300px', width: '100%' }" />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-progress-2',
  props: {
    rectData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    rectId: {
      type: String,
      default: 'rect'
    }
  }, // 满足一个页面有多个饼图，建议传入不同id
  data () {
    return {
      rect: this.rectId,
      charts: ''
    }
  },
  mounted () {
    this.drawRect()
  },
  methods: {
    drawRect () {
      let that = this
      this.charts = echarts.init(document.getElementById(this.rectId))
      this.charts.setOption({
        tooltip: {},
        xAxis: {
          max: that.rectData.maxCount,
          splitLine: { show: false },
          offset: 10,
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          data: that.rectData.xData,
          inverse: true,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 16
          }
        },
        grid: {
          top: 'center',
          height: 200,
          left: 120,
          right: 100
        },
        series: [
          {
            // current data
            type: 'pictorialBar',
            symbol: '',
            symbolRepeat: 'fixed',
            symbolMargin: '25%',
            symbolClip: true,
            symbolSize: [10, 20],
            symbolBoundingData: that.rectData.maxCount,
            data: that.rectData.opinionData,
            itemStyle: {
              color: '#00D58F'
            },
            markLine: {
              symbol: 'none',
              label: {
                formatter: 'max: {c}',
                position: 'start',
                color: '#fff'
              },
              lineStyle: {
                color: 'green',
                type: 'dotted',
                opacity: 0.2,
                width: 2
              },
              data: [
                {
                  type: 'max'
                }
              ]
            },
            z: 10
          },
          {
            // full data
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: 'rgba(50,71,179,0.2)'
              }
            },
            label: {
              show: true,
              formatter: function (params) {
                return ((params.value / that.rectData.maxCount) * 100).toFixed(2) + ' %'
              },
              position: 'right',
              offset: [10, 0],
              color: 'green',
              fontSize: 18
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '25%',
            symbol: '',
            symbolSize: [10, 20],
            symbolBoundingData: that.rectData.maxCount,
            data: that.rectData.opinionData,
            z: 5
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
