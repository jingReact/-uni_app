<template>
  <div :id="elId" style="height:100%,width:100%;" />
</template>
<script>
export default {
  name: "wdwh-dp-pictorial-bar5",
  data() {
    return {
      elId: "",
      chart: null,
    };
  },
  props: {
    chartdata: {
      type: Object,
      default: {},
    },
  },
  created() {
    this.elId = this.uuid();
  },
  mounted() {
    // 实例化echarts对象
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    chartdata: {
      deep: true,
      handler: function () {
        this.$nextTick(() => {
          this.initChart();
        });
      },
    },
  },
  methods: {
    // 生成唯一uuid做为唯一标识符
    uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
    // 绘图
    initChart() {
      if (!document.getElementById(this.elId)) return;
      this.chart = this.$echarts.init(document.getElementById(this.elId));
      let chartData = {
        axisData: ["01", "02", "03", "04", "05"],
        data: [60, 85, 105, 130, 185],
      };
      let img1 = {
        a: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYTFkN2IyNS1jNmY1LTQ4MGYtYTIzNC02OGQ1YWE0MDYxYzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUM0RkU2RTYyN0VCMTFFQjhGMTc5OThGOEU0RjVBMzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUM0RkU2RTUyN0VCMTFFQjhGMTc5OThGOEU0RjVBMzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTQ4ZTkzMi1lNjI5LTQxZjktYTdhOS0xMjNiNDFlZDMzNDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmExZDdiMjUtYzZmNS00ODBmLWEyMzQtNjhkNWFhNDA2MWM2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mFeVTQAAAN9JREFUeNqUktsKwjAMht084VTm8IAginqnd77/rU/gA4ggqKgo6kSLbvoHUiihG1vgG0vIn6RpncVlWchhLhiArXaymgPGoAcaecRFMAUB+336lDJ0a/OoZq4PKkliindAl5IScgKbmKpOeFRpkRFvupaOSUKyp/HvSXErRRiD0GwkxdWU5R1AXV56mq+NOt54H9qUTP5ahC+wBiMRv8ttv4VP3TZgKEb+gSOJZ5axFdhRdX6SvuX8isQeV6KuD370Ib+sOSgL4Rns9b2uwEck1JiYC0d89hO46qS/AAMAVEco1nYWeoYAAAAASUVORK5CYII=",
        b: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYTFkN2IyNS1jNmY1LTQ4MGYtYTIzNC02OGQ1YWE0MDYxYzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUM0RkU2REUyN0VCMTFFQjhGMTc5OThGOEU0RjVBMzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUM0RkU2REQyN0VCMTFFQjhGMTc5OThGOEU0RjVBMzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTQ4ZTkzMi1lNjI5LTQxZjktYTdhOS0xMjNiNDFlZDMzNDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmExZDdiMjUtYzZmNS00ODBmLWEyMzQtNjhkNWFhNDA2MWM2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3O0DHgAAAe1JREFUeNpMUztoVUEQnc9e8FuoIGlSSsRYWIhgE2KRwjKFFilNL6QTa1vBYGGnNhZpJI22qQQrhaCCYhWwtTLJy3u7M56dvfe+FMPs2zdn55wzc/nu5D2RM5kxEcJNETULWRHyCI0zuVxEfmEz3az3UoG1kBA1e+EegLs+B1AklSw7AD4i4jWcSVoXnndzRN91CCCvlBP56Fnvx91Un1Y2Et0ADIo27xZB2rnrVpnKb8+yNsgoRVdY6VoaOg60o8D1Ks6Pcd60rAtBPUv4Ef9nEWfeSF5OgSyAD3zGr0H9QgDy3DjkQ+TzrYGsBm2zEbhgM35jpg1YXR6NxBScv1jN9T7rjaa59CZleWj15eimjWrQrHT1BKP6fGoal1LT0heZLFE/Vx+p9jNm3oacO9G51auMJrR8dtDpffcwk/gr9mHXcloZJOD3QbKgMW7QX7OmaS5HfzHTOpZjFzUSdcCw+J4MtGBABfywQX99gHgPRfdK1pdlqrdGKcaZlJ5jzvLNggaGn/WcZ65jOMCmP8MsP9gkvUPX1YFJ3QdW285H3XeBk8vQdx0PdGT0iZnXiWkZDC6X424fDzZgv4msvpPOlCf1oUTCizDrD4q9jaV+BHwbK3gTxce4K2DyDwb9lOSvZpP0Nk+6Kon+CzAAxdiyu8J+WlkAAAAASUVORK5CYII=",
      };

      let value = 1; // >0

      let option = {
        backgroundColor: "rgba(20,30,57,.61)",
        title: {
          textStyle: {
            color: "#fff",
            fontSize: 16,
          },
          left: "4.5%",
          top: "25%",
        },
        grid: {
          left: "5%",
          top: "8%",
          bottom: "5%",
          right: "12%",
          containLabel: true,
        },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: chartData.axisData,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#3c5168",
              },
            },
            axisTick: {
              show: true,
              color: "#3c5168",
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: "dashed",
                color: "#3e86dd",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#a8b5f7",
                fontSize: 12,
              },
            },
          },
        ],
        series: [
          {
            tooltip: {
              show: false,
            },
            z: 4,
            type: "pictorialBar",
            symbolSize: ["15", "15"],
            symbolRepeat: "fixed",
            symbol: "image://" + img1.a,
            data: chartData.data.map((item) => {
              return 1;
            }),
          },
          {
            z: 6,
            type: "pictorialBar",
            symbolSize: ["15", "15"],
            animation: true,
            symbolRepeat: "fixed",
            symbolClip: true,
            symbolPosition: "start",
            symbolOffset: [0, 0],
            symbol: "image://" + img1.b,
            data: chartData.data,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 12,
                },
                position: "right",
              },
            },
          },
        ],
      };

      this.chart.setOption(option);
      const that = this;
      this.$echartsResize(that.chart);
    },
  },
};
</script>
