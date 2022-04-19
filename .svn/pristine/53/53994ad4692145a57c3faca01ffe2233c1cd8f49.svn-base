# 柱状图

---

### 基础用法和说明

- `bar-id`表示图表的唯一 ID；必传。<font color="red">**_如果一个页面中有多个柱状图，`bar-id` 必须不一样。_**</font>
- **_可同时且最多展示 3 个柱状图。_**

  | 参数                                     | 说明                                | 类型   | 默认值              |
  | ---------------------------------------- | ----------------------------------- | ------ | ------------------- |
  | xData                                    | 柱图的 X 轴/横向柱图的 Y 轴数据集合 | Array  | —                   | — |
  | unit                                     | 单位                                | String | —                   | — |
  | legend1、legend2、legend3                | 每组数据的图例标题                  | String | —                   | — |
  | opinionData1、opinionData2、opinionData3 | 数据集合                            | Array  | —                   | — |
  | style                                    | 设置宽高样式                        | -      | 高：300px，宽：100% |
  | colors                                   | 设置颜色                            | Array  | -                   |

<div class="demo-block-dark">
  <wdwh-dp-bar-1 :bar-data="barData" bar-id="barId1"></wdwh-dp-bar-1>
</div>

<script>
export default {
    data() {
      return {
        barData: {
        xData: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        unit: "单位",
        legend1: "数据统计一",
        opinionData1: [36, 48, 66, 85, 79, 25, 66, 48, 70, 12, 19, 58],
        colors:[
          {
            start:'#ffbd01',
            end:'#FF8D2E'
          }
        ]
      },
      barDatas: {
          xData: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        unit: "单位",
        legend1: "数据统计一",
        legend2: "数据统计二",
        legend3: "数据统计3",
        opinionData1: [36, 48, 66, 85, 79, 25, 66, 48, 70, 12, 19, 58],
        opinionData2: [76, 88, 66, 88, 99, 55, 66, 88, 60, 56, 76, 88],
        opinionData3: [134, 85, 16, 38, 49, 65, 29, 57, 40, 76, 33, 70],
        colors:[
          {
            start:'#ffbd01',
            end:'#FF8D2E'
          },
          {
            start:'#83bff6',
            end:'#188df0'
          },
          {
            start:'#43eec6',
            end:'#14c8d4'
          }
        ]
      },
      barArrayMix: {
          xData: ["0201", "0202", "0203", "0204", "0205", "0206", "0207"],
          unit: "单位",
          legend1: "数据统计一",
          legend2: "数据统计二",
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [46, 58, 66, 58, 39, 15, 33],
          colors:['#43eec6','#ffbd01']
       },
       barDashed: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          legend1: '数据统计一',
          legend2: '数据统计二',
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [46, 58, 66, 58, 39, 15, 33]
        },
       barArray: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据统计一',
          legend2: '数据统计二',
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [76, 58, 66, 58, 39, 15, 33],
          colors:['#ff6e76','#58d9f9']
        },
        jnconfig: {
          data: [
            {
              name: '南阳',
              value: 167
            },
            {
              name: '周口',
              value: 123
            },
            {
              name: '漯河',
              value: 98
            },
            {
              name: '郑州',
              value: 75
            },
            {
              name: '西峡',
              value: 66
            }
          ],
          colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
          unit: '单位',
          showValue: true
        },
        BarEchatsSpeedData: {
          Xdata: [40, 50, 60, 70, 80, 90],
          Ydata: [100, 100, 100, 100, 100, 100],
          Namedata: ["广州", "上海", "北京", "武汉", "成都", "河北"],
      },
      optionData6:
        [
          {
            name: "01",
            value: 10,
            itemStyle: {
              color: "#48abff",
            },
          },
          {
            name: "02",
            value: 14,
            itemStyle: {
              color: "#166edd",
            },
          },
          {
            name: "03",
            value: 20,
            itemStyle: {
              color: "#1979b9",
            },
          },
          {
            name: "04",
            value: 27,
            itemStyle: {
              color: "#1d8493",
            },
          },
          {
            name: "05",
            value: 34,
            itemStyle: {
              color: "#298f67",
            },
          },
          {
            name: "06",
            value: 39,
            itemStyle: {
              color: "#3e9449",
            },
          },
          {
            name: "07",
            value: 48,
            itemStyle: {
              color: "#5f9336",
            },
          },
          {
            name: "08",
            value: 59,
            itemStyle: {
              color: "#938c26",
            },
          },
          {
            name: "09",
            value: 69,
            itemStyle: {
              color: "#c4841c",
            },
          },
          {
            name: "10",
            value: 72,
            itemStyle: {
              color: "#ed7e14",
            },
          },
        ]
      };
    },
  }
</script>

::: demo

```html
<wdwh-dp-bar-1 :bar-data="barData" bar-id="barId1"></wdwh-dp-bar-1>
<script>
  export default {
    data() {
      return {
        barData: {
          xData: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          unit: '单位',
          legend1: '数据统计一',
          opinionData1: [36, 48, 66, 85, 79, 25, 66, 48, 70, 12, 19, 58]
          colors:[
          {
            start:'#ffbd01',
            end:'#FF8D2E'
          }
        ]
        }
      }
    }
  }
</script>
```

:::

<!-- <div class="demo-block-dark">
  <wdwh-dp-bar-5 :bar-data="barData" bar-id="barId5"></wdwh-dp-bar-5>
</div> -->

<!-- ::: demo

```html
<wdwh-dp-bar-5 :bar-data="barData" bar-id="barId5"></wdwh-dp-bar-5>

<script>
  export default {
    data() {
      return {
        barData: {
          xData: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          unit: '单位',
          legend1: '数据统计一',
          opinionData1: [36, 48, 66, 85, 79, 25, 66, 48, 70, 12, 19, 58]
        }
      }
    }
  }
</script>
```
::: -->

### 多组数据

<div class="demo-block-dark">
  <wdwh-dp-bar-1 :bar-data="barDatas" bar-id="barId_1"></wdwh-dp-bar-1>
</div>

::: demo

```html
<wdwh-dp-bar-1 :bar-data="barDatas" bar-id="barId_1"></wdwh-dp-bar-1>

<script>
  export default {
    data() {
      return {
        barDatas: {
          xData: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          unit: '单位',
          legend1: '数据统计一',
          legend2: '数据统计二',
          legend3: '数据统计3',
          opinionData1: [36, 48, 66, 85, 79, 25, 66, 48, 70, 12, 19, 58],
          opinionData2: [76, 88, 66, 88, 99, 55, 66, 88, 60, 56, 76, 88],
          opinionData3: [134, 85, 16, 38, 49, 65, 29, 57, 40, 76, 33, 70],
          colors: [
            {
              start: '#ffbd01',
              end: '#FF8D2E'
            },
            {
              start: '#83bff6',
              end: '#188df0'
            },
            {
              start: '#43eec6',
              end: '#14c8d4'
            }
          ]
        }
      }
    }
  }
</script>
```


:::
### 带标记柱状图

<div class="demo-block-dark">
   <wdwh-dp-pictorial-bar6 class="demo-pictorial-bar" :chartdata="optionData6"></wdwh-dp-pictorial-bar6>
</div>

<style scoped>
.demo-pictorial-bar{
  width:100%;
  height:400px;
}
</style>

::: demo

```html
<div class="demo-block-dark">
   <wdwh-dp-pictorial-bar6 class="demo-pictorial-bar" :chartdata="optionData6"></wdwh-dp-pictorial-bar6>
</div>

<script>
export default {

    data() {
      return {
        optionData6:
        [
          {
            name: "01",
            value: 10,
            itemStyle: {
              color: "#48abff",
            },
          },
          {
            name: "02",
            value: 14,
            itemStyle: {
              color: "#166edd",
            },
          },
          {
            name: "03",
            value: 20,
            itemStyle: {
              color: "#1979b9",
            },
          },
          {
            name: "04",
            value: 27,
            itemStyle: {
              color: "#1d8493",
            },
          },
          {
            name: "05",
            value: 34,
            itemStyle: {
              color: "#298f67",
            },
          },
          {
            name: "06",
            value: 39,
            itemStyle: {
              color: "#3e9449",
            },
          },
          {
            name: "07",
            value: 48,
            itemStyle: {
              color: "#5f9336",
            },
          },
          {
            name: "08",
            value: 59,
            itemStyle: {
              color: "#938c26",
            },
          },
          {
            name: "09",
            value: 69,
            itemStyle: {
              color: "#c4841c",
            },
          },
          {
            name: "10",
            value: 72,
            itemStyle: {
              color: "#ed7e14",
            },
          },
        ]
      };
    },

  }
</script>
<style scoped>
.demo-pictorial-bar{
  width:100%;
  height:400px;
}
</style>

```


:::

### 柱状图+折线图混合

<div class="demo-block-dark">
  <wdwh-dp-bar-2 :bar-data="barArrayMix" bar-id="barId2"></wdwh-dp-bar-2>
</div>

::: demo

```html
<wdwh-dp-bar-2 :bar-data="barArrayMix" bar-id="barId2"></wdwh-dp-bar-2>

<script>
  export default {
    data() {
      return {
        barArrayMix: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据统计一',
          legend2: '数据统计二',
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [46, 58, 66, 58, 39, 15, 33],
          colors: ['#43eec6', '#ffbd01']
        }
      }
    }
  }
</script>
```

:::

### 虚线柱状图

<div class="demo-block-dark">
  <wdwh-dp-bar-4 :bar-data="barDashed" bar-id="barId4"></wdwh-dp-bar-4>
</div>

::: demo

```html
<wdwh-dp-bar-4 :bar-data="barDashed" bar-id="barId4"></wdwh-dp-bar-4>

<script>
  export default {
    data() {
      return {
        barDashed: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          legend1: '数据统计一',
          legend2: '数据统计二',
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [46, 58, 66, 58, 39, 15, 33]
        }
      }
    }
  }
</script>
```

:::

### 横向柱状图

<div class="demo-block-dark">
  <wdwh-dp-bar-3 :bar-data="barArray" bar-id="barId3"></wdwh-dp-bar-3>
</div>

::: demo

```html
<wdwh-dp-bar-3 :bar-data="barArray" bar-id="barId3"></wdwh-dp-bar-3>

<script>
  export default {
    data() {
      return {
        barArray: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据统计一',
          legend2: '数据统计二',
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [76, 58, 66, 58, 39, 15, 33],
          colors: ['#ff6e76', '#58d9f9']
        }
      }
    }
  }
</script>
```

:::

<div class="demo-block-dark">
  <wdwh-dp-bar-6 :bar-data="BarEchatsSpeedData" bar-id="barId6"></wdwh-dp-bar-6>
</div>

::: demo

```html
<wdwh-dp-bar-6 :bar-data="BarEchatsSpeedData" bar-id="barId6"></wdwh-dp-bar-6>

<script>
  export default {
    data() {
      return {
        BarEchatsSpeedData: {
          Xdata: [40, 50, 60, 70, 80, 90],
          Ydata: [100, 100, 100, 100, 100, 100],
          Namedata: ['广州', '上海', '北京', '武汉', '成都', '河北']
        }
      }
    }
  }
</script>
```

:::

### dataV 胶囊柱状图

<div class="demo-block-dark">
  <dv-capsule-chart :config="jnconfig" style="height:200px" />
</div>

::: demo

```html
<dv-capsule-chart :config="jnconfig" style="height:200px" />

<script>
  export default {
    data() {
      return {
        jnconfig: {
          data: [
            {
              name: '南阳',
              value: 167
            },
            {
              name: '周口',
              value: 123
            },
            {
              name: '漯河',
              value: 98
            },
            {
              name: '郑州',
              value: 75
            },
            {
              name: '西峡',
              value: 66
            }
          ],
          colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
          unit: '单位',
          showValue: true
        }
      }
    }
  }
</script>
```

:::

## config 属性

| 参数      | 说明     | 类型    | 可选值                                        | 默认值 |
| --------- | -------- | ------- | --------------------------------------------- | ------ |
| data      | 柱数据   | Array   | —                                             | []     |
| unit      | 单位     | String  | —                                             | ''     |
| colors    | 环颜色   | Array   | 颜色支持 hex、rgb 、rgba 颜色关键字等四种类型 | [1]    |
| showValue | 显示数值 | Boolean | —                                             | false  |

## config 注释

[1]默认配色为['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
