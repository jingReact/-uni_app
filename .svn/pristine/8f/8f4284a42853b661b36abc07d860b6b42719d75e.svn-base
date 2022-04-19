# 折线图

---

### 基础用法和说明

- `line-id`表示图表的唯一 ID；必传。<font color="red">**_如果一个页面中有多个折线图，line-id 必须不一样。_**</font>
- **_可同时且最多展示 3 个折线图。_**

  | 参数                                     | 说明                                  | 类型   | 默认值              |
  | ---------------------------------------- | ------------------------------------- | ------ | ------------------- |
  | xData                                    | 折线图的 X 轴/横向柱图的 Y 轴数据集合 | Array  | —                   | — |
  | unit                                     | 单位                                  | String | —                   | — |
  | legend1、legend2、legend3                | 每组数据的图例标题                    | String | —                   | — |
  | opinionData1、opinionData2、opinionData3 | 数据集合                              | Array  | —                   | — |
  | style                                    | 设置宽高样式                          | -      | 高：300px，宽：100% |
  | colors                                   | 设置颜色                              | Array  | -                   |
  | areaColors                               | 设置折线区域渐变背景颜色              | Array  | -                   |

<div class="demo-block-dark">
  <wdwh-dp-line-1
    :line-data="lineData"
    line-id="lineId"
  ></wdwh-dp-line-1>

<script>
export default {
    data() {
      return {
        lineData: {
        xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
        unit: "单位",
        legend1: "数据折线一",
        opinionData1: [90, 78, 75, 72, 50, 70, 74, 80],
        colors:['#13DA93'],
        areaColors:[
          {
            start:'#62D293',
            end:'#282c34'
          }
        ]
      },
       lineArray: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据统计一',
          legend2: '数据统计二',
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [36, 58, 66, 58, 39, 15, 33],
          colors:['#13DA93','#FF8D2E','#409EFF'],
          areaColors:[
            {
              start:'#62D293',
              end:'#282c34'
            },
            {
              start:'#fb8f35',
              end:'#282c34'
            }
          ]
        },
      };
    },
  }
</script>
</div>

::: demo

```html
<wdwh-dp-line-1 :line-data="lineData" line-id="lineId"></wdwh-dp-line-1>

<script>
  export default {
    data() {
      return {
        lineData: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据折线一',
          opinionData1: [90, 78, 75, 72, 50, 70, 74, 80],
          colors: ['#13DA93'],
          areaColors: [
            {
              start: '#62D293',
              end: '#282c34'
            }
          ]
        }
      }
    }
  }
</script>
```

:::

### 多条折线

<div class="demo-block-dark">
  <wdwh-dp-line-1
    :line-data="lineArray"
    line-id="lineId2"
  ></wdwh-dp-line-1>
</div>

::: demo

```html
<wdwh-dp-line-1 :line-data="lineArray" line-id="lineId2"></wdwh-dp-line-1>

<script>
  export default {
    data() {
      return {
        lineArray: {
          xData: ['0201', '0202', '0203', '0204', '0205', '0206', '0207'],
          unit: '单位',
          legend1: '数据统计一',
          legend2: '数据统计二',
          opinionData1: [86, 78, 86, 85, 79, 35, 66],
          opinionData2: [36, 58, 66, 58, 39, 15, 33],
          colors: ['#13DA93', '#FF8D2E', '#409EFF'],
          areaColors:[
            {
              start:'#62D293',
              end:'#282c34'
            },
            {
              start:'#fb8f35',
              end:'#282c34'
            }
          ]
        }
      }
    }
  }
</script>
```

:::
