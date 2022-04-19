<template>
  <div class="map-info">
    <!-- :style="styleProp"  -->
    <div
      id="mapTu"
      class="map-tu"
      style="width: 600px; height: 700px; margin: 0 auto"
    />
  </div>
</template>

<script>
import jilinProvince from "./wh.json";

import "echarts-gl";

export default {
  name: "gl",
  components: {},
  props: {
    overViewPage: {
      // 总览页面
      type: String,
      default: "potentialUserMining", // 默认是潜力用户挖掘页面
    },
    mapUrl: {
      // 地图中点击跳转的路径，默认跳转综合能源页面
      type: String,
      default: "/comprehensiveEnergyEfficiency",
    },
    type: {
      // 能源类型,地图上方tab栏对应的标识
      type: String,
      default: "01",
    },

    // 地图的高度
    styleProp: {
      type: Object,
      default() {
        return {
          height: "100%",
        };
      },
    },
    // 地图盒子宽度
    boxWidth: {
      type: Number,
      default: 80,
    },
  },

  data() {
    return {
      bg: require("./bg3.jpg"),
      env: require("./bg.jpg"),
      minHeight: 2,
      transData: {}, // 点击事件传值
      mapData: [
        // 地图数据模拟数据
        { name: "江岸区", value: 100 },
        { name: "江汉区", value: 200 },
        { name: "硚口区", value: 300 },
        { name: "汉阳区", value: 400 },
        { name: "武昌区", value: 500 },
        { name: "青山区", value: 600 },
        { name: "洪山区", value: 700 },
        { name: "东西湖区", value: 800 },
        { name: "汉南区", value: 850 },
        { name: "蔡甸区", value: 900 },
        { name: "江夏区", value: 950 },
        { name: "黄陂区", value: 2000 },
        { name: "新洲区", value: 1050 },
      ],
    };
  },

  computed: {},
  watch: {
    mapData: {
      deep: true,
      handler(val) {
        this.$nextTick(() => {
          // console.log('..mapData....mapData0...', val)
          this.mapData = val;
          this.minHeight =
            Math.min.apply(
              Math,
              this.mapData.map(function (o) {
                return o.value;
              })
            ) * 2;
          if (val) {
            this.drawChinaMap(val);
          }
        });
      },
    },
  },
  mounted() {
    console.log(this.mapData);
    this.drawChinaMap(this.mapData);
  },

  methods: {
    commonRouter(dataTrans) {
      if (this.type === "01") {
        this.$router.push({
          path: "/comprehensiveEnergyEfficiency",
          query: { dataTrans },
        });
      } else if (this.type === "02") {
        this.$router.push({ path: "/energyTrading", query: { dataTrans } });
      } else if (this.type === "03") {
        this.$router.push({ path: "/cleanEnergy", query: { dataTrans } });
      } else if (this.type === "04") {
        this.$router.push({
          path: "/emergingEnergyConsumption",
          query: { dataTrans },
        });
      } else if (this.type === "05") {
        this.$router.push({ path: "/smartBuilding", query: { dataTrans } });
      } else if (this.type === "06") {
        this.$router.push({ path: "/multiEnergySupply", query: { dataTrans } });
      }
      window.sessionStorage.setItem("type", this.type);
    },
    drawChinaMap(mapData) {
      const nameGeoCoordMap = {
        // 数据默认中心点，可调整，然后柱子会变动
        江岸区: [114.30304, 30.594911],
        江汉区: [114.283109, 30.578771],
        硚口区: [114.264568, 30.57061],
        汉阳区: [114.265807, 30.549326],
        武昌区: [114.307344, 30.546536],
        青山区: [114.39707, 30.634215],
        洪山区: [114.400718, 30.504259],
        东西湖区: [114.081483, 30.680067],
        汉南区: [114.08124, 30.309637],
        蔡甸区: [114.029341, 30.582186],
        江夏区: [114.313961, 30.349045],
        黄陂区: [114.374025, 30.874155],
        新洲区: [114.702108, 30.755559],
      };
      const convertData = (data) => {
        // 柱子的数据，是个数组，多个对象都以name,value状态展示
        const res = [];
        for (var i = 0; i < data.length; i++) {
          const geoCoord = nameGeoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      const convertData_ = convertData(mapData);
      this.$echarts.registerMap("武汉", jilinProvince);
      const option = {
        // tooltip: {
        //   show: false,
        // },
        grid3D: {},
        // 默认情况下, x, y, z 分别是从 0 到 1 的数值轴
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        geo3D: {
          name: "武汉",
          // selectedMode: "single", // 地图高亮单选
          // boxDepth: 100, // 地图倾斜度
          regionHeight: 2, // 地图高度
          map: "武汉",
          boxWidth: 60,
          boxHeight: 10, // 4:没有bar. 30:有bar,bar最高度30，按比例分配高度
          viewControl: {
            rotateSensitivity: 1, // 禁止旋转
            zoomSensitivity: 1, // 禁止缩放
            panSensitivity: 1,
          },
          top: "0%",
          right: "0%", // 整个地图的偏移量
          left: "0%",
          bottom: "0%",
          zlevel: -10,
          environment: "#000", // 最外层背景
          shading: "realistic", // 真实渲染引擎 有光照效果
          // 材质贴图 配置
          realisticMaterial: {
            detailTexture: this.bg, //地图背景图
          },
          itemStyle: {
            color: "#009bff",
            opacity: 0.8, // 地图颜色
            borderWidth: 1.5, // 分界线wdith
            borderColor: "#02E0EC", //地图分界线颜色
          },
          label: {
            show: true,
            distance: 0,
            fontSize: 12,
            color: "#fff",
          },

          postEffect: {
            enable: true,
            bloom: {
              enable: false,
            },
            SSAO: {
              radius: 1,
              intensity: 1,
              enable: true,
            },
            depthOfField: {
              enable: false,
              focalRange: 10,
              blurRadius: 10,
              fstop: 1,
            },
          },
          // temporalSuperSampling: {
          //   enable: true,
          // },
          emphasis: {
            // 鼠标移入
            label: {
              show: true, // 是否显示高亮
              distance: 0,
              color: "#02E0EC", // 高亮文字颜色
              fontSize: 16,
            },
            // itemStyle: {
            //   color: "#000", // 地图高亮颜色
            //   opacity: 1,
            // },
          },
          // 单独设置某些处颜色
          // regions: this.regionsData
          // regions: [
          //   {
          //     name: "江岸区",
          //     itemStyle: {
          //       color: "green",
          //     },
          //   },
          //   {
          //     name: "新洲区",
          //     itemStyle: {
          //       color: "green",
          //     },
          //   },
          //   {
          //     name: "汉南区",
          //     itemStyle: {
          //       color: "green",
          //     },
          //   },
          // ],
        },
        // series: [
        //   {
        //     name: "bar3D",
        //     type: "bar3D",
        //     coordinateSystem: "geo3D",
        //     barSize: 1, //柱子粗细
        //     shading: "lambert",
        //     opacity: 1,
        //     bevelSize: 0.3,
        //     color: "#97bdff",
        //     minHeight: this.minHeight,
        //     itemStyle: {
        //       color: "rgba(202, 227, 72, 0.8)",
        //     },
        //     label: {
        //       show: true,
        //       formatter: (params) => {
        //         // console.log(params);
        //         // 对应的数值
        //         return params.data.value[2];
        //       },
        //       distance: 0, // 标签距离图形的距离
        //       textStyle: {
        //         fontSize: 16,
        //         backgroundColor: "transparent",
        //         color: "#00E4FF",
        //         // color: 'red'
        //       },
        //     },
        //     data: convertData_,
        //   },
        //   // {
        //   //   show:false,
        //   //   name: "map3D", // series名称
        //   //   type: "map3D", // series图表类型
        //   //   map: "武汉",
        //   //   top: "0%",
        //   //   right: "0%", // 整个地图的偏移量
        //   //   left: "0%",
        //   //   bottom: "20%",
        //   //   // regionHeight: setting.regionHeight - 0.2, // 三维高度
        //   //   label: {
        //   //     // 标签的相关设置
        //   //     show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
        //   //   },
        //   //   itemStyle: {
        //   //     // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
        //   //     color: "#95830A", // 地图板块的颜色
        //   //     opacity: 1, // 图形的不透明度 [ default: 1 ]
        //   //     borderWidth: 0, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以清晰的区分每个区域
        //   //     borderColor: "#A74A11", // 图形描边的颜色。[ default: #333 ]
        //   //   },
        //   //   emphasis: {
        //   //     // 鼠标hover 高亮时图形和标签的样式 (当鼠标放上去时 label和itemStyle 的样式)
        //   //     label: {
        //   //       // label高亮时的配置
        //   //       show: true,
        //   //       textStyle: {
        //   //         color: "#fff", // 高亮文字颜色
        //   //         // distance: 0,
        //   //         fontSize: 13,
        //   //       },
        //   //     },
        //   //   },
        //   //   // viewControl: {
        //   //   //   projection: "perspective",
        //   //   //   distance: setting.distance,
        //   //   //   beta: setting.beta,
        //   //   //   alpha: setting.alpha,
        //   //   // },
        //   // },
        // ],
      };
      const myChart = this.$echarts.init(document.getElementById("mapTu"));
      myChart.setOption(option);
      myChart.on("georoam", (e) => {
        console.log(e, 8989);
      });

      myChart.getZr().on("click", (e) => {
        console.log("地图点击事件-能源类型-111---", typeof this.type);
        // this.commonRouter(this.transData)
        if (this.overViewPage !== "") {
          this.$router.push({
            path: this.mapUrl,
            query: { dataTrans: this.transData },
          });
          this.$store.commit("mapInfo/SET_TYPE", this.type); // 将type数据存至vuex中,模块化开发方法前要写上模块名mapInfo/SET_TYPE
        }
      });
      // 地图有区域值的点击事件
      myChart.on("click", (e) => {
        if (this.overViewPage !== "") {
          this.$router.push({
            path: this.mapUrl,
            query: { dataTrans: this.transData },
          });
          this.$store.commit("mapInfo/SET_TYPE", this.type); // 将type数据存至vuex中
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>
.map-info {
  width: 100%;
  height: 100%;
  color: #fff !important;
  .map-tu {
    width: 60%;
    height: 80%;
  }
}
</style>
