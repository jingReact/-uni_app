<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div class="pie" :id="pie" :style="{ height: '300px', width: '100%' }" />
</template>
<script>
// 引入echarts
import * as echarts from 'echarts'

export default {
  name: 'wdwh-dp-pie-1',
  props: {
    pieData: {
      type: Object,
      default: function () {
        return {}
      }
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
  // 实时监听父组件传过来的值，进而执行drawBar方法，重绘柱状图
  // watch: {
  //   pieData: {
  //     deep: true,
  //     immediate: true,
  //     handler() {
  //       this.drawPie();
  //     },
  //   },
  // },
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
          top: '3%',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: that.pieData.nameTitle,
            type: 'pie',
            radius: ['50%', '65%'], // 饼图空心
            center: ['50%', '55%'], // 饼图占整个容器的大小
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
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
            ],
            itemStyle: {
              normal: {
                borderWidth: 3, // 每一个类型之间空隙
                borderColor: '#122c58',
                borderRadius: 5
              }
            }
          }
        ]
      })
      this.$echartsResize(this.charts)
    }
  }
}
</script>
