# 象形柱状图

## 山峰型柱图

- `pictorial-id`表示图表的唯一 ID；必传。<font color="red">**_如果一个页面中有多个山峰型柱状图，`pictorial-id` 必须不一样。_**</font>

### pictorial-data 配置

| 参数       | 说明                 | 类型   | 默认值              |
| ---------- | -------------------- | ------ | ------------------- |
| xData      | 柱图的 X 轴数据集合  | Array  | —                   | — |
| optionData | 柱图的 data 数据集合 | Array  | —                   | — |
| colors     | 设置颜色             | String | '#0b92b4'           |
| style      | 设置宽高样式         | -      | 高：300px，宽：100% |

<div class="demo-block-dark">
  <wdwh-dp-pictorial-bar2 :pictorial-data="pictorialData" pictorial-id="pictorialId"></wdwh-dp-pictorial-bar2>
</div>

<script>
export default {

    data() {
      return {
        optionData:{
          xAxis:["2020", "2021"],
          series:[{name:"武汉",data:["11.8651", "4.9385"]}],
          barWidth: 36
        },
        optionData1:{
          xAxis:["2020", "2021"],
          series:[{name:"武汉",data:["11.8651", "4.9385"]},{name:"北京",data:["3.7493", "1.5536"]}],
          barWidth: 36
        },
        optionData2:{
          xAxis:["2020", "2021"],
          series:[{name:"武汉",data:["11.8651", "4.9385"]},{name:"北京",data:["3.7493", "1.5536"]},{name:"上海",data:["56.1131", "23.6478"]},{name:"南京",data:["3.7493", "1.5536"]},{name:"天津",data:["3.7493", "1.5536"]}],
          barWidth: 36
        },
        pictorialData: {
          xData: [
            '驯鹿',
            '火箭',
            '飞机',
            '高铁',
            '轮船',
            '汽车',
            '跑步',
            '步行'
          ],
          colors: '#0b92b4',
          optionData: [123, 60, 45, 38, 25, 49, 52, 11]
        }
      };
    },

  }
</script>

:::demo

```html
<wdwh-dp-pictorial-bar2
  :pictorial-data="pictorialData"
  pictorial-id="pictorialId"
></wdwh-dp-pictorial-bar2>
<script>
  export default {
    data() {
      return {
        pictorialData: {
          xData: [
            '驯鹿',
            '火箭',
            '飞机',
            '高铁',
            '轮船',
            '汽车',
            '跑步',
            '步行'
          ],
          colors: '#0b92b4',
          optionData: [123, 60, 45, 38, 25, 49, 52, 11]
        }
      }
    }
  }
</script>
```

:::

## 立体柱图

- 由`chartdata`属性来配置象形柱状图所需参数.

| 参数           | 说明                 | 类型   | 默认值              |
| -------------- | -------------------- | ------ | ------------------- |
| xAxis          | 柱图的 X 轴数据集合  | Array  | —                   |
| series         | 柱图的 data 数据集合 | Array  | —                   |
| series.name    | 柱图的图例名称       | -      | —                   |
| series.data    | 柱图的图例数据       | -      | —                   |
| barWidth       | 设置柱体宽度         | Number | -                   |
| barCategoryGap | 设置每个柱体间距     | Number | -                   |
| style          | 设置宽高样式         | -      | 高：300px，宽：100% |

<div class="demo-block-dark">
   <wdwh-dp-pictorial-bar1 :chartdata='optionData'></wdwh-dp-pictorial-bar1>
   <wdwh-dp-pictorial-bar1 :chartdata='optionData1'></wdwh-dp-pictorial-bar1>
   <wdwh-dp-pictorial-bar1 :chartdata='optionData2'></wdwh-dp-pictorial-bar1>
   <wdwh-dp-pictorial-bar3 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar3>
   <wdwh-dp-pictorial-bar4 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar4>
   <wdwh-dp-pictorial-bar5 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar5>
   <wdwh-dp-pictorial-bar7 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar7>
</div>
<style>
  .demo-pictorial-bar{
    width:50%;
    height:400px;
  }
</style>

::: demo

```html
<div class="demo-block-dark">
  <wdwh-dp-pictorial-bar1 :chartdata="optionData"></wdwh-dp-pictorial-bar1>
  <wdwh-dp-pictorial-bar1 :chartdata="optionData1"></wdwh-dp-pictorial-bar1>
  <wdwh-dp-pictorial-bar1 :chartdata="optionData2"></wdwh-dp-pictorial-bar1>
  <wdwh-dp-pictorial-bar3 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar3>
   <wdwh-dp-pictorial-bar4 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar4>
   <wdwh-dp-pictorial-bar5 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar5>
   <wdwh-dp-pictorial-bar7 class="demo-pictorial-bar" :chartdata='optionData2'></wdwh-dp-pictorial-bar7>
</div>

<script>
  export default {
    data() {
      return {
        optionData: {
          xAxis: ['2020', '2021'],
          series: [{ name: '武汉', data: ['11.8651', '4.9385'] }],
          barWidth: 40,
          barCategoryGap: 10
        },
        optionData1: {
          xAxis: ['2020', '2021'],
          series: [
            { name: '武汉', data: ['11.8651', '4.9385'] },
            { name: '北京', data: ['3.7493', '1.5536'] }
          ],
          barWidth: 40,
          barCategoryGap: 10
        },
        optionData2: {
          xAxis: ['2020', '2021'],
          series: [
            { name: '武汉', data: ['11.8651', '4.9385'] },
            { name: '北京', data: ['3.7493', '1.5536'] },
            { name: '上海', data: ['56.1131', '23.6478'] },
            { name: '南京', data: ['3.7493', '1.5536'] },
            { name: '天津', data: ['3.7493', '1.5536'] }
          ],
          barWidth: 40,
          barCategoryGap: 10
        }
      }
    }
  }
</script>
```

:::
