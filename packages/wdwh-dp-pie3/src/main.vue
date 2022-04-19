<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="pie" :id="pie" :style="{ height: '300px', width: '100%' }" />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-pie-3',
  props: {
    pieData: {
      type: Object,
      default: {}
    },
    pieId: {
      type: String,
      default: 'pie'
    }
  }, // 满足一个页面有多个饼图，建议传入不同id
  data () {
    return {
      pie: this.pieId,
      charts: ''
    }
  },
  mounted () {
    this.drawPie()
  },
  methods: {
    drawPie () {
      let that = this
      this.charts = echarts.init(document.getElementById(this.pieId))
      this.charts.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: '3%',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: that.pieData.nameTitle,
            type: 'pie',
            radius: '50%',
            avoidLabelOverlap: false,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: that.pieData.opinionData,
            color: that.pieData.colors || [
              '#38A1F7',
              '#59CECE',
              '#5ECE7D',
              '#5470c6',
              '#91cc75',
              '#fac858',
              '#ee6666',
              '#73c0de',
              '#3ba272',
              '#fc8452',
              '#9a60b4',
              '#ea7ccc'
            ]
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
