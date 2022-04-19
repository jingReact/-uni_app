<template>
  <div class="body">
    <div class="map">
      <map-range @getTypeCode="getTypeCode" @change="cityOrdistrict">
      </map-range>
    </div>
    <div class="echarts">
      <div id="container"></div>
    </div>
  </div>
</template>
<script>
import MapRange from "./MapRange"
export default {
  name: "wdwhDpMap4",
  components: {
    MapRange
  },
  props: {
    map_options: {
      type: Object,
      required: true,
      default: () => {
        [];
      }
    }
  },
  data() {
    return {
      areaData: {}
    };
  },
  computed: {},
  mounted() {
    this.createMap();
  },
  watch: {},
  methods: {
    createMap() {
      const {
        lngMain,
        latMain,
        mapStyle,
        viewMode,
        labelzIndex,
        zoom,
        opts,
        cityName,
        areaCode,
        marker
      } = this.map_options;
      this.citySelect = document.getElementById("city");
      this.districtSelect = document.getElementById("district");
      this.map = new AMap.Map("container", {
        center: [lngMain, latMain],
        mapStyle: mapStyle,
        viewMode: viewMode,
        labelzIndex: labelzIndex,
        pitch: 30,
        zoom: zoom,
        resizeEnable: true
      });
      this.map.on("click", this.mapClick);
      var object3Dlayer = new AMap.Object3DLayer({ zIndex: 1 });
      this.map.add(object3Dlayer);
      this.map.clearMap();
      this.district = new AMap.DistrictSearch(opts);
      this.district.search(cityName, (status, result) => {
        if (status == "complete") {
          this.getData(result.districtList[0], "", areaCode);
        }
      });
      //利用行政区查询获取路径
      var district = new AMap.DistrictSearch(opts);
      district.search(cityName, function(status, result) {
        var bounds = result.districtList[0].boundaries;
        var color = "#5cc4a9";
        for (var i = 0; i < bounds.length; i += 1) {
          var line = new AMap.Object3D.ThinLine({
            path: bounds[i],
            color: color
          });
          object3Dlayer.add(line);
        }
      });
    },
    mapClick(e) {
      console.log(1111);
    },
    getTypeCode(val) {
      let { areaCode, xzquCode } = this.map_options;
      areaCode = val;
      this.districtSelect.innerHTML = "";
      this.citySelect.innerHTML = "";
      this.createMap();
      sessionStorage.setItem("adcode", xzquCode);
      sessionStorage.removeItem("sjjs");
      sessionStorage.removeItem("cityName");
    },
    loadMapData(areaCode) {
      AMapUI.loadUI(["geo/DistrictExplorer"], DistrictExplorer => {
        var districtExplorer = (window.districtExplorer = new DistrictExplorer({
          eventSupport: true,
          map: this.map
        }));
        districtExplorer.loadAreaNode(areaCode, (error, areaNode) => {
          if (error) {
            console.error(error);
            return;
          }
          let mapJson = {};
          mapJson.type = "FeatureCollection";
          mapJson.features = areaNode.getSubFeatures();
          this.geoJsonData = mapJson;
        });
      });
    },
    //获取下拉选中的行政区划
    getData(data, level, adcode) {
      console.log(data,level,adcode)
      var bounds = data.boundaries;
      if (bounds) {
        for (var i = 0, l = bounds.length; i < l; i++) {
          var polygon = new AMap.Polygon({
            map: this.map,
            strokeWeight: 1,
            strokeColor: "#0091ea",
            fillColor: "#56b1c2",
            fillOpacity: 0.2,
            path: bounds[i]
          });
          this.map_options.polygons.push(polygon);
        }
        this.map.setFitView();
      }
      if (level === "province") {
        this.citySelect.innerHTML = "";
        this.districtSelect.innerHTML = "";
      } else if (level === "city") {
        this.districtSelect.innerHTML = "";
      }
      var subList = data.districtList;
      if (subList) {
        if (level === "city") {
          var contentSub = new Option("请选择区/县");
        } else {
          var contentSub = new Option("请选择市");
        }
        var curlevel = subList[0].level;
        if (curlevel === "street") {
          let mapJsonList = this.geoJsonData.features;
          let mapJson = {};
          for (let i in mapJsonList) {
            if (mapJsonList[i].properties.name == this.map_options.cityName) {
              mapJson.type = "FeatureCollection";
              mapJson.features = [].concat(mapJsonList[i]);
            }
          }
          this.mapData = [];
          this.mapData.push({
            name: this.map_options.cityName,
            value: Math.random() * 100,
            level: curlevel
          });
          return;
        }
        var curList = document.querySelector("#" + curlevel);
        curList.add(contentSub);
        this.mapData = [];
        for (var i = 0, l = subList.length; i < l; i++) {
          var name = subList[i].name;
          var cityCode = subList[i].adcode;
          this.mapData.push({
            name: name,
            value: Math.random() * 100,
            cityCode: cityCode,
            level: curlevel
          });
          var levelSub = subList[i].level;
          contentSub = new Option(name);
          contentSub.setAttribute("value", levelSub);
          contentSub.center = subList[i].center;
          contentSub.adcode = subList[i].adcode;
          curList.add(contentSub);
        }
        this.loadMapData(adcode);
        this.areaData[curlevel] = curList;
      }

    },
    //根据不同行政区划存储对应的调用接口标识符
    cityOrdistrict(CityCode) {
      let { polygons, cityName, cityCode, areaCode } = this.map_options;
      if (CityCode == "city") {
        sessionStorage.setItem("sjjs", 2);
      } else {
        sessionStorage.setItem("sjjs", 3);
      }
      let obj = this.areaData[CityCode];
      for (var i = 0, l = polygons.length; i < l; i++) {
        polygons[i].setMap(null);
      }
      var option = obj[obj.options.selectedIndex];
      var keyword = option.text; //关键字
      var adcode = option.adcode;
      cityName = keyword;
      cityCode = adcode;
      this.district.setLevel(option.value); //行政区级别
      this.district.setExtensions("all");
      this.district.search(adcode, (status, result) => {
        if (status === "complete") {
          if (result.districtList[0]) {
            areaCode = result.districtList[0].adcode + "000000";
            sessionStorage.setItem("adcode", areaCode);
            sessionStorage.setItem("cityName", result.districtList[0].name);
            this.getData(result.districtList[0], obj.id, adcode);
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  font-size: 14px;
}
.body {
  display: flex;
  width: 100%;
  overflow: hidden;
  margin-left: -5%;
}
.echarts {
  width: 100%;
  flex: 1;
  overflow: hidden;
  z-index: 0;
}
#map {
  width: 100%;
  height: 89.5vh;
  overflow: hidden;
}
.tips {
  position: fixed;
  bottom: 30%;
  left: 40%;
  padding: 10px 15px;
  border-radius: 5px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
@keyframes adShakeAnmation {
  0% {
    bottom: 1px;
    left: 0px;
  }
  30% {
    bottom: 1;
    left: 10px;
  }
  70% {
    bottom: 0px;
    left: 1px;
  }
  100% {
    bottom: 0;
    left: 0;
  }
}
#container {
  width: 100%;
  height: 100%;
}
</style>
