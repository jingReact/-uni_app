<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div
    class="pictorialBar"
    :id="pictorialId"
    :style="{ height: '300px', width: '100%' }"
  />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-pictorial-bar2',
  props: {
    pictorialData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    pictorialId: {
      type: String,
      default: 'pictorialBar'
    }
  }, // 满足一个页面有多个饼图，建议传入不同id
  data () {
    return {
      charts: ''
    }
  },
  mounted () {
    this.drawPictorialBar()
  },
  methods: {
    drawPictorialBar () {
      let that = this
      this.charts = echarts.init(document.getElementById(this.pictorialId))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return params[0].name + ': ' + params[0].value
          }
        },
        xAxis: {
          data: that.pictorialData.xData,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: '#eee'
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false }
        },
        color: that.pictorialData.colors || '#0b92b4',
        series: [
          {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            symbol:
              'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              opacity: 0.5
            },
            emphasis: {
              itemStyle: {
                opacity: 1
              }
            },
            data: that.pictorialData.optionData,
            z: 10
          }
          // {
          //   name: 'glyph',
          //   type: 'pictorialBar',
          //   barGap: '-100%',
          //   symbolPosition: 'end',
          //   symbolOffset: [0, '-120%'],
          //   symbol: 'none'
          // }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
