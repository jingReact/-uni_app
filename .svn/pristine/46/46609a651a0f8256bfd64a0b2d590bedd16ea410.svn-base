<template>
  <div class="map-info">
    <div id="main_1" ref="chart" style="width: 100%;height:700px;margin: 0 auto"></div>
  </div>
</template>

<script>
import wuhanMapJson from "../../wh.json";
export default {
  name:"wdwh-dp-map-2",
  components: {},
  props: {},
  data() {
    return {
      bg: require("./diqiu1.png"),
      chart: null,
      options: {},
      setting: {
        top: "0%",
        right: "0%",
        bottom: "0%",
        distance: 180, //大小
        alpha: 40, //y轴地图倾斜度
        beta: 10, //x轴地图倾斜度
        regionHeight: 5, //地图厚度
      },
      mapData: {
        geoCoordMap: {
          江岸区: [114.31004, 30.624911],
          江汉区: [114.263109, 30.608771],
          硚口区: [114.204568, 30.60061],
          汉阳区: [114.225807, 30.519326],
          武昌区: [114.337344, 30.546536],
          青山区: [114.43707, 30.634215],
          洪山区: [114.400718, 30.504259],
          东西湖区: [114.081483, 30.680067],
          汉南区: [114.01124, 30.309637],
          蔡甸区: [114.019341, 30.482186],
          江夏区: [114.313961, 30.189045],
          黄陂区: [114.374025, 30.874155],
          新洲区: [114.702108, 30.755559],
        },
        projectData: [
          {
            name: "江岸区",
            value: 100,
            projectName: "A",
          },
          {
            name: "江汉区",
            value: 200,
            projectName: "B",
          },
          {
            name: "硚口区",
            value: 300,
            projectName: "C",
          },
          {
            name: "汉阳区",
            value: 400,
            projectName: "D",
          },
          {
            name: "武昌区",
            value: 600,
            projectName: "E",
          },
          {
            name: "青山区",
            value: 500,
            projectName: "F",
          },
          {
            name: "洪山区",
            value: 700,
            projectName: "G",
          },
          {
            name: "东西湖区",
            value: 800,
            projectName: "H",
          },
          {
            name: "汉南区",
            value: 900,
            projectName: "I",
          },
          {
            name: "蔡甸区",
            value: 1000,
            projectName: "J",
          },
          {
            name: "江夏区",
            value: 1550,
            projectName: "K",
          },
          {
            name: "黄陂区",
            value: 250,
            projectName: "L",
          },
          {
            name: "新洲区",
            value: 230,
            projectName: "M",
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    // 执行
    this.init();
  },
  methods: {
    // 初始化图标
    init() {
      const that = this;

      // 加载贴图材质图片
      // const img = document.createElement("img");
      // img.src = this.ebg;
      // this.bg = img;
      // 初始化
      const chartEle = document.getElementById("main_1");

      that.chart = this.$echarts.init(chartEle);
      if (that.chart) {
        that.chart.clear();
      }
      // chart.showLoading({
      //   maskColor: "rgba(0, 0, 0, 0.2)",
      // });
      // 获取地图数据

      this.$echarts.registerMap("map", wuhanMapJson);
      that.chart.hideLoading();
      this.options = this.getOptions();
      that.chart.setOption(this.options);
      setTimeout(() => {
        window.addEventListener("resize", () => {
          that.chart.resize();
          that.init();
        });
      }, 200);

      // that.chart.getZr().off('click');
      // that.chart.getZr().on("click", (params) => {
      //   console.log(1);
      // });
      // 地图有区域值的点击事件
      // that.chart.off("click").on("click", (e) => {
      //   console.log(e);
      // });

      that.chart.getZr().on("click", (params) => {
        console.log(params);
      });
      let clickFlag = true;
      if (clickFlag) {
        that.chart.off("click").on("click", (e) => {
          if (e.componentSubType == "bar3D") {
            console.log("一次");
            
            clickFlag = false;
          } else {
            //  点击地图区域模块
            let regions = [
              {
                itemStyle: { color: "#000080", opacity: 1 },
                label: { show: true },
              },
            ];
            regions[0].name = e.name;
            this.options.geo3D.regions = regions;
            this.chart.setOption(this.options);
          }
        });
      }
    },

    // 获取图表配置
    getOptions() {
      let that = this;
      const options = {
        tooltip: {},
        // 地图主要配置
        geo3D: {
          show: true,
          map: "map",
          boxHeight: 30,
          top: that.setting.top,
          right: that.setting.right,
          left: "0%",
          zlevel: 7,
          bottom: that.setting.bottom,
          regionHeight: that.setting.regionHeight, // 三维高度
          shading: "realistic",
          realisticMaterial: {
            detailTexture: that.bg, // 纹理贴图
            textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
          },
          label: {
            // 标签的相关设置
            show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
            distance: 10,
            formatter(param) {
              const city = param.name.substr(0, 5); //区域字体截取
              return `{sty1|${city}}`;
            },
            rich: {
              sty1: {
                color: "#ffffff", //地图区域字体颜色
                fontSize: that.getSize(0.12),
                align: "center",
              },
            },
            height: 20,
            lineHeight: 22,
          },

          itemStyle: {
            // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
            // color: "#FE9D0B", // 地图板块的颜色
            // color: '#00F6FF',
            opacity: 1, // 图形的不透明度 [ default: 1 ]
            borderWidth: 2, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域 [ default: 0 ]
            // borderColor: "#A74A11", // 图形描边的颜色。[ default: #333 ]
            borderColor: "#00F6FF", // 图形描边的颜色。[ default: #333 ]
          },
          emphasis: {
            // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时 label和itemStyle 的样式)
            label: {
              // label高亮时的配置
              show: true,
              rich: {
                sty1: {
                  color: "#fff", //地图区域字体颜色
                  fontSize: that.getSize(0.18),
                  align: "center",
                },
              },
              height: 20,
              lineHeight: 22,
            },
            itemStyle: {
              color: "#aaa",
              opacity: 1,
            },
          },
          light: {
            // 光照相关的设置。在 shading 为 'color' 的时候无效。
            // 光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
            main: {
              // 场景主光源的设置，在 globe 组件中就是太阳光。
              color: "#ffeeee", // 主光源的颜色。[ default: #fff ]
              intensity: 1.1, // 主光源的强度。[ default: 1 ]
              shadow: true, // 主光源是否投射阴影。默认关闭。 开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
              alpha: 55, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
              beta: 10, // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
            },
            ambient: {
              // 全局的环境光设置。
              color: "#fff", // 环境光的颜色。[ default: #fff ]
              intensity: 0.1, // 环境光的强度。[ default: 0.2 ]
            },
          },
          regions: [
            //每个地图模块的颜色
            // {
            //   name: "江岸区",
            //   itemStyle: {
            //     color: "#00FF00",
            //     opacity: 1,
            //     borderWidth: 0.4,
            //     borderColor: "#5F9EA0",
            //   },
            // },
            // {
            //   name: "新洲区",
            //   itemStyle: {
            //     color: "green",
            //   },
            // },
            // {
            //   name: "汉南区",
            //   itemStyle: {
            //     color: "#4575b4",
            //     opacity: 1,
            //     borderWidth: 0.4,
            //     borderColor: "#5F9EA0",
            //   },
            // },
          ],
          viewControl: {
            projection: "perspective",
            distance: that.setting.distance,
            beta: that.setting.beta,
            alpha: that.setting.alpha,
          },
        },
        series: [
          {
            name: "map3D", // series名称
            type: "map3D", // series图表类型
            map: "map",
            top: that.setting.top,
            right: that.setting.right,
            left: "0%",
            bottom: that.setting.bottom,
            regionHeight: that.setting.regionHeight - 0.2, // 三维高度
            label: {
              // 标签的相关设置
              show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
            },
            zlevel: 6, //组件所在的层。
            itemStyle: {
              // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
              // color: "#95830A", // 地图3d边延板块的颜色
              color: "", // 地图板块的颜色
              opacity: 1, // 图形的不透明度 [ default: 1 ]
              borderWidth: 0, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以清晰的区分每个区域
              borderColor: "#A74A11", // 图形描边的颜色。[ default: #333 ]
            },

            emphasis: {
              // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时 label和itemStyle 的样式)
              label: {
                // label高亮时的配置
                show: false,
              },
            },
            viewControl: {
              projection: "perspective",
              distance: that.setting.distance,
              beta: that.setting.beta,
              alpha: that.setting.alpha,
            },
            tooltip: {
              trigger: "item",
              axisPointer: {
                type: "none",
                textStyle: {
                  color: "#fff",
                },
              },
              // confine:true, //是否将 tooltip 框限制在图表的区域内
              triggerOn: "click", //提示框触发的条件
              transitionDuration: 0.8, //提示框浮层的移动动画过渡时间，单位是 s
              // backgroundColor: "#09455c",
              formatter: function (params, ticket, callback) {
                return `<div>
                  <div>${params.data.name}</div>
                  <div>${params.data.value[2]}</div>
                </div>`;
              },
            },
            data: that.convertData(that.mapData.projectData),
          },

          {
            name: "武汉市",
            type: "bar3D",
            coordinateSystem: "geo3D",
            barSize: 1, //柱子粗细
            shading: "lambert",
            opacity: 1,
            bevelSize: 0.2,
            color: "#97bdff",
            zlevel: 5,
            minHeight: 11,
            itemStyle: {
              color: "rgba(202, 227, 72, 0.8)",
            },
            tooltip: {
              trigger: "item",
              axisPointer: {
                type: "none",
                textStyle: {
                  color: "#fff",
                },
              },
              // confine:true, //是否将 tooltip 框限制在图表的区域内
              triggerOn: "click", //提示框触发的条件
              transitionDuration: 0.8, //提示框浮层的移动动画过渡时间，单位是 s
              // backgroundColor: "#09455c",
              formatter: function (params, ticket, callback) {
                return `<div>
                  <div>${params.data.name}总人口</div>
                  <div>${params.data.value[2]}万人</div>
                </div>`;
              },
            },
            label: {
              show: false,
              formatter: (params) => {
                //柱子上方显示值
                // 对应的数值
                // return params.data.value[2];
              },
              distance: 0, // 标签距离图形的距离
              textStyle: {
                fontSize: 16,
                backgroundColor: "transparent",
                color: "#00E4FF",
                // color: 'red'
              },
            },
            data: that.convertData(that.mapData.projectData),
          },
        ],
      };
      return options;
    },

    // 转化已有数据到地图上显示的配置数据
    convertData(data) {
      const res = [];
      for (let i = 0; i < data.length; i++) {
        const geoCoord = this.mapData.geoCoordMap[data[i].name];
        var colors = [
          "rgba(2,210,121,0.85)",
          "rgba(58,179,255,0.85)",
          "rgba(240,229,72,0.85)",
          "rgba(252,172,67,0.85)",
          "rgba(245,70,70,0.85)",
        ];
        var bordercolors = [
          "#00a529",
          "#0067f2",
          "#ffeba4",
          "#e77200",
          "#ff0000",
        ];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
            valueNum: data[i].value,
            projectName: data[i].projectName,
            regionHeight: 1,
            itemStyle: {
              borderWidth: 2,
              borderColor: bordercolors[i],
              opacity: 1,
              areaColor: bordercolors[i],
              color: bordercolors[i],
            },
            label: {
              show: true,
              position: "top",
              distance: -5,
              formatter(param) {
                return `{sty1|${param.data.projectName}}`;
              },
              rich: {
                sty1: {
                  padding: this.getSize(0.07),
                  backgroundColor: "rgba(7, 28, 38, 0.7)",
                  borderWidth: 1,
                  borderColor: "#FF771A",
                  borderRadius: 2,
                  fontSize: this.getSize(0.14),
                },
              },
              textStyle: {
                color: "#ffffff",
              },
            },
            emphasis: {
              label: {
                show: true,
                position: "top",
                distance: 0,
                formatter(param) {
                  return `{sty1|${param.data.name}}`;
                },
                rich: {
                  sty1: {
                    padding: 7,
                    backgroundColor: "rgba(7, 28, 38, 0.7)",
                    borderWidth: 1,
                    borderColor: "#FF771A",
                    borderRadius: 2,
                    fontSize: this.getSize(0.14),
                  },
                },
                textStyle: {
                  color: "#ffffff",
                },
              },
            },
          });
        }
      }
      return res;
    },

    // 适配不同尺寸浏览器，避免地图上的字号过小或过大
    getSize(res) {
      const docEl = document.documentElement;
      const clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (!clientWidth) return;
      const fontSize = 100 * (clientWidth / 1920);
      return res * fontSize;
    },
  },
};
</script>

<style scoped lang="scss">
.map-info {
  width: 100%;
  height: 100%;
  color: #fff !important;
  background-image: url('./dapinbg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

}
</style>
