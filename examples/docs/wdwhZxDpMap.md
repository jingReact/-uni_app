# 高德在线地图

---

### 基础用法和说明

- html 文件中引入相关 js,设置隐藏 logo 图标

```html
<script scr="https://webapi.amap.com/maps?v=1.4.11&key=秘钥">
  (key='秘钥'秘钥需到官网申请)
</script>

<script src="https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js"></script>
<script src="//webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
<style>
  .amap-logo {
    display: none;
    opacity: 0 !important;
  }
  .amap-copyright {
    opacity: 0;
  }
</style>
```

| 参数     | 说明                                     | 类型   | 默认值                          |
| -------- | ---------------------------------------- | ------ | ------------------------------- |
| cityName | 选择展示省份例如-"湖北省"                | String | ----- "湖北省" ---              | - |
| areaCode | 选择省份行政区号                         | String | ----- "420000" ---              | - |
| cityCode | 行政级别区号                             | Number | ----- 10000 ---                 | - |
| lngMain  | 中心最大精度                             | Number | ----- 114.341552 ---            | - |
| latMain  | 中心最小精度                             | Number | ----- 30.546222 ---             | - |
| zoom     | 展示默认层级                             | Number | ----- 6.5 ---                   | - |
| viewMode | 开启 3D 地图                             | String | -----"3D" ---                   | - |
| mapStyle | 地图样式可在高德官网切换，也可自定义样式 | String | -----amap://styles/darkblue --- | - |
| xzquCode | 湖北默认行政区划，可切换                 | Number | -----420000000000 ---           | - |

  <script>
  export default {
      data() {
        return{
          map_options:{
                cityName:"湖北省",
                areaCode:"420000",
                cityCode:"100000",
                lngMain:"114.341552",
                latMain:"30.546222",
                zoom:6.5,
                viewMode:"3D",
                mapStyle:"amap://styles/darkblue",
                xzquCode:420000000000,
                labelzIndex:"120",
                polygons:[],
                 getData:[],
                areaData: {},
                 opts: {
                subdistrict: 1, //返回下一级行政区
                showbiz: true, //最后一级返回街道信息
                extensions: "all",
                level: "province",
                resizeEnable: true,
                 },
                mapData: [],
                 marker: [
                      {
                        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png",
                        position: [114.341552, 30.546222],
                        title: "机构1",
                        size: new AMap.Size(11, 11)
                      },
                      {
                        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-4.png",
                        position: [111.341552, 31.646222],
                        title: "机构4",
                        size: new AMap.Size(32, 32),
                        size: new AMap.Size(32, 32)
                      },
                      {
                        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png",
                        position: [113.031837, 30.151321],
                        title: "机构2",
                        size: new AMap.Size(32, 32)
                      },
                      {
                        icon:
                          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png",
                        position: [112.149042, 31.805569],
                        title: "机构3",
                        size: new AMap.Size(32, 32)
                      }
                     ],

                 }
           }
       }
       }
</script>

<wdwh-dp-map4  :map_options='map_options'></wdwh-dp-map4></wdwh-dp-map4>

:::demo

```html
<wdwh-dp-map4  :map_options='map_options'></wdwh-dp-map4></wdwh-dp-map4>
<script>
  export default {
    data() {
      return {
       map_options:{
                cityName:"湖北省",
                areaCode:"420000",
                cityCode:"100000",
                lngMain:"114.341552",
                latMain:"30.546222",
                zoom:6.5,
                viewMode:"3D",
                mapStyle:"amap://styles/darkblue",
                xzquCode:420000000000,
                labelzIndex:"120",
                polygons:[],
                 getData:[],
                areaData: {},
                opts: {
                    subdistrict: 1, //返回下一级行政区
                    showbiz: true, //最后一级返回街道信息
                    extensions: "all",
                    level: "province",
                    resizeEnable: true,
                 },
                mapData: [],
                 marker: [
                      {
                        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png",
                        position: [114.341552, 30.546222],
                        title: "机构1",
                        size: new AMap.Size(11, 11)
                      },
                      {
                        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-4.png",
                        position: [111.341552, 31.646222],
                        title: "机构4",
                        size: new AMap.Size(32, 32),
                        size: new AMap.Size(32, 32)
                      },
                      {
                        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png",
                        position: [113.031837, 30.151321],
                        title: "机构2",
                        size: new AMap.Size(32, 32)
                      },
                      {
                        icon:
                          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png",
                        position: [112.149042, 31.805569],
                        title: "机构3",
                        size: new AMap.Size(32, 32)
                      }
                     ],

                 }
             }
          }
        }
</script>
```

:::
