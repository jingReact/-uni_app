<template>
  <div :id="elId" style="height:100%,width:100%;" />
</template>
<script>
export default {
  name: "wdwh-dp-pictorial-bar4",
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
      let chartData = [
        { name: "01", value: 2012 },
        { name: "02", value: 1230 },
        { name: "03", value: 3790 },
        { name: "04", value: 2349 },
        { name: "05", value: 1654 },
        { name: "06", value: 1230 },
      ];
      let fontColor = "#a8b5f7";
      let xData = [];
      let sData = [];
      let MAX = [];
      let max = 6000;
      chartData.forEach((item) => {
        xData.push(item.name);
        sData.push(item.value);
        MAX.push(max);
      });

      let lineOption = {
        lineStyle: {
          color: "rgba(56,76,131,.3)",
          type: "solid",
        },
      };
      let lineOption01 = {
        lineStyle: {
          color: "rgba(169,219,255,.3)",
          type: "solid",
        },
      };

      const CubeLeft = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c0 = [shape.x, shape.y];
          const c1 = [shape.x - 6, shape.y - 6];
          const c2 = [xAxisPoint[0] - 6, xAxisPoint[1] - 6];
          const c3 = [xAxisPoint[0], xAxisPoint[1]];
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath();
        },
      });
      const CubeRight = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c1 = [shape.x, shape.y];
          const c2 = [xAxisPoint[0], xAxisPoint[1]];
          const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 6];
          const c4 = [shape.x + 10, shape.y - 6];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      const CubeTop = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x, shape.y];
          const c2 = [shape.x + 10, shape.y - 6];
          const c3 = [shape.x + 4, shape.y - 12];
          const c4 = [shape.x - 6, shape.y - 6];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      this.$echarts.graphic.registerShape("CubeLeft", CubeLeft);
      this.$echarts.graphic.registerShape("CubeRight", CubeRight);
      this.$echarts.graphic.registerShape("CubeTop", CubeTop);
      let option = {
        backgroundColor: "rgba(20,30,57,.61)",
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          containLabel: true,
          top: "12%",
          right: "5%",
          left: "5%",
          bottom: "6%",
        },
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: fontColor,
              textStyle: {
                fontSize: 10,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: lineOption,
          },
        ],
        xAxis: [
          {
            type: "category",
            data: xData,
            axisLine: lineOption01,
            boundaryGap: true,
            axisTick: {
              show: true,
              lineStyle: {
                color: lineOption01,
              },
            },
            axisLabel: {
              margin: 10,
              color: fontColor,
              textStyle: {
                fontSize: 10,
              },
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "custom",
            renderItem: function (params, api) {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(7,29,97,.6)",
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(10,35,108,.7)",
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(11,42,106,.8)",
                    },
                  },
                ],
              };
            },
            data: MAX,
          },
          {
            type: "custom",
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "#3B80E2",
                          },
                          {
                            offset: 1,
                            color: "#49BEE5",
                          },
                        ]
                      ),
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "#3B80E2",
                          },
                          {
                            offset: 1,
                            color: "#49BEE5",
                          },
                        ]
                      ),
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "#3B80E2",
                          },
                          {
                            offset: 1,
                            color: "#49BEE5",
                          },
                        ]
                      ),
                    },
                  },
                ],
              };
            },
            data: sData,
          },
          {
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: (e) => {
                  switch (e.name) {
                    case "10kV线路":
                      return VALUE[0];
                    case "公用配变":
                      return VALUE[1];
                    case "35kV主变":
                      return VALUE[2];
                    case "水":
                  }
                },
                fontSize: 12,
                color: "#fff",
                offset: [4, -10],
              },
            },
            itemStyle: {
              color: "transparent",
            },
            data: sData,
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
