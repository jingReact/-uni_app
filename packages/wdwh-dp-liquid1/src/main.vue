<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div
    class="liquid"
    :id="liquid"
    :style="{ height: '300px', width: '100%' }"
  />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-liquid-1',
  props: {
    liquidData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    liquidId: {
      type: String,
      default: 'liquid'
    }
  }, // 满足一个页面有多个饼图，建议传入不同id
  data () {
    return {
      liquid: this.liquidId,
      charts: ''
    }
  },
  mounted () {
    this.drawLiquid()
  },
  methods: {
    drawLiquid () {
      let that = this
      this.charts = echarts.init(document.getElementById(this.liquidId))
      this.charts.setOption({
        series: [
          {
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            outline: {
              show: false
            },
            backgroundStyle: {
              borderWidth: 3,
              borderColor: that.liquidData.colors
                ? that.liquidData.colors[0]
                : 'rgba(234, 165, 1, 0.45)',
              shadowBlur: 30,
              shadowColor: that.liquidData.colors
                ? that.liquidData.colors[0]
                : 'rgba(234, 165, 1, 0.45)',
              color: '#02182B'
            },
            label: {
              show: true,
              position: ['50%', '50%'],
              fontSize: 22,
              color: '#fff'
            },
            data: [that.liquidData.data, that.liquidData.data] || [0, 0],
            color: that.liquidData.colors || [
              'rgba(234, 165, 1, 0.45)',
              'rgba(234, 144, 0, 0.45)'
            ]
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
