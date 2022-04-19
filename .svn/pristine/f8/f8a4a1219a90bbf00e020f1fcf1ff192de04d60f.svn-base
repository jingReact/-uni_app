<template>
  <div class="map-info">
    <div id="map" style="width:600px;height: 700px;margin: 0 auto"></div>
  </div>
</template>

<script>
import wuhanMapJson from "./wh.json";
import "echarts-gl";

export default {
  name: "wdwh-dp-map",
  components: {},
  data() {
    return {
      mapData: [],
    };
  },
  mounted() {
    // 对获取的每个子区域添加 name:省市区名称  value 要展示的值  level 此区域的省市区等级  cityCode：省市区的code
    //可通过需求自行添加和修改
    this.mapData = wuhanMapJson.features.map((item) => {
      return {
        name: item.properties.name,
        value: 1000,
        level: item.properties.level,
        cityCode: item.properties.adcode,
      };
    });
    console.log(wuhanMapJson);
    this.init(); //调用下面的 echarts初始化
  },
  methods: {
    init() {
      var myChart = this.$echarts.init(document.getElementById("map"));
      this.$echarts.registerMap("cityMap", wuhanMapJson, {}); //加载自定义边界数据地图
      var option = {
        // backgroundColor:'#04222e',// 背景颜色
        tooltip: {
          trigger: "item",
          formatter: (p) => {
            let val = p.value;
            if (window.isNaN(val)) {
              val = 0;
            }
            let txtCon =
              "<div style='text-align:center'> 地区：" +
              p.name +
              "<br />value值：" +
              p.data.value +
              "<br />code：" +
              p.data.cityCode +
              "</div>";
            return txtCon;
          },
        },
        series: [
          {
            name: "地图",
            type: "map",
            mapType: "cityMap",
            aspectScale: 0.85, //地图长度比
            itemStyle: {
              normal: {
                show: true,
                // areaColor: "#031525", //地图区域的颜色 也可以颜色渐变如下的 areaColor
                areaColor:{
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .5)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderColor: "#0CD5DD", //边界线颜色
                borderWidth: "1", //边界线的宽度
              },
              emphasis: {
                // 鼠标移入时区域的样式
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "red",
              },
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#aaa", //省市区字体颜色
                },
              },
              emphasis: {
                //对应的鼠标悬浮效果
                show: true,
                textStyle: {
                  color: "#333", //鼠标移入对应的省市区字体颜色
                },
              },
            },
            data: this.mapData, // 上面添加了 name,value,level,cityCode的数据
          },
        ],
      };
      myChart.setOption(option);
      // 地图区域点击事件
      myChart.on("click", (param) => {
        console.log(param);
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
  background-image: url('../../../examples/assets/img/dapinbg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .map-tu {
    width: 100%;
    height: 100%;
  }
}
</style>
