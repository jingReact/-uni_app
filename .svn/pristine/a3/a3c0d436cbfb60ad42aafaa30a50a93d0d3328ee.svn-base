<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="line" :id="line" :style="{ height: '300px', width: '100%' }" />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-line-1',
  props: {
    lineData: {
      type: Object,
      default: {}
    },
    lineId: {
      type: String,
      default: 'line'
    }
  }, // 满足一个页面有多个饼图，建议传入不同id
  data () {
    return {
      line: this.lineId,
      charts: ''
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let that = this
      that.lineData.colors =
        that.lineData.colors && that.lineData.colors.length >= 0
          ? that.lineData.colors
          : []
      that.lineData.areaColors =
        that.lineData.areaColors && that.lineData.areaColors.length >= 0
          ? that.lineData.areaColors
          : []
      this.charts = echarts.init(document.getElementById(this.lineId))
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
          data: that.lineData.xData,
          splitLine: {
            show: false
          },
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
            name: that.lineData.unit || '',
            type: 'value',
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
            name: that.lineData.legend1,
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            smooth: true,
            itemStyle: {
              normal: {
                color:
                  that.lineData.colors.length >= 1
                    ? that.lineData.colors[0]
                    : '#13DA93'
              }
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color:
                    that.lineData.areaColors.length >= 1
                      ? that.lineData.areaColors[0].start
                      : '#62D293'
                },
                {
                  offset: 1,
                  color:
                    that.lineData.areaColors.length >= 1
                      ? that.lineData.areaColors[0].end
                      : '#282c34'
                }
              ])
            },
            data: that.lineData.opinionData1
          },
          {
            name: that.lineData.legend2 || '',
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            smooth: true,
            itemStyle: {
              normal: {
                color:
                  that.lineData.colors.length >= 2
                    ? that.lineData.colors[1]
                    : '#FF8D2E'
              }
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color:
                    that.lineData.areaColors.length >= 2
                      ? that.lineData.areaColors[1].start
                      : '#fb8f35'
                },
                {
                  offset: 1,
                  color:
                    that.lineData.areaColors.length >= 2
                      ? that.lineData.areaColors[1].end
                      : '#282c34'
                }
              ])
            },
            data: that.lineData.opinionData2 || []
          },
          {
            name: that.lineData.legend3 || '',
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            smooth: true,
            itemStyle: {
              normal: {
                color:
                  that.lineData.colors.length >= 3
                    ? that.lineData.colors[2]
                    : '#409EFF'
              }
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color:
                    that.lineData.areaColors.length >= 3
                      ? that.lineData.areaColors[2].start
                      : '#409EFF'
                },
                {
                  offset: 1,
                  color:
                    that.lineData.areaColors.length >= 3
                      ? that.lineData.areaColors[2].end
                      : '#282c34'
                }
              ])
            },
            data: that.lineData.opinionData3 || []
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
