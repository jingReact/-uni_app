<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="gauge" :id="gauge" :style="{ height: '300px', width: '100%' }" />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-gauge-1',
  props: {
    gaugeData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    gaugeId: {
      type: String,
      default: 'gauge'
    }
  }, // 满足一个页面有多个饼图，建议传入不同id
  data () {
    return {
      gauge: this.gaugeId,
      charts: '',
      ybpImg:require("./ybp.png")
    }
  },
  mounted () {
    this.drawGauge()
  },
  methods: {
    drawGauge () {
      let that = this
      this.charts = echarts.init(document.getElementById(this.gaugeId))
      this.charts.setOption({
        graphic: {
          // 图形中间图片
          elements: [
            // {
            //   type: 'image',
            //   style: {
            //     image: this.ybpImg, // 你的图片地址
            //     width: 66,
            //     height: 78
            //   },
            //   left: '46%',
            //   top: '38%'
            // }
          ]
        },
        series: [
          {
            type: 'gauge',
            radius: '75%',
            center: ['50%', '50%'],
            progress: {
              show: true,
              width: 20,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: that.gaugeData.colors[0] // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: that.gaugeData.colors[1] // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 20,
                color: [[1, '#28385F']]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false,
              length: '90%',
              width: 0
            },
            detail: {
              show: true,
              fontSize: 18,
              offsetCenter: [0, 0],
              formatter: '{value} %',
              color: '#fff'
            },
            title: {
              fontSize: 16,
              color: '#fff'
            },
            data: [that.gaugeData.data]
          },
          {
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '85%',
            itemStyle: {
              color: 'rgba(67, 90, 138, 0.5)'
            },
            progress: {
              show: true,
              width: 4
            },

            pointer: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 100
              }
            ]
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
