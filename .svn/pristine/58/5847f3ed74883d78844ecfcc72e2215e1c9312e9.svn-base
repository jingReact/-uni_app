# 仪表盘

---

- 由`gauge-data`属性来配置水波图所需参数， 其中 data 表示仪表盘的占比数据;
- `gauge-id`表示图表的唯一 ID；必传。<font color="red">**_如果一个页面中有多个水波图，gaugeId 必须不一样。_**</font>

<div class="demo-block-dark">
<wdwh-dp-gauge-1 :gauge-data="gaugeData" gauge-id="gaugeId"></wdwh-dp-gauge-1>

<script>
  export default {
    data() {
      return {
        gaugeData: {
          data: {
            value: 46,
            name: '标题'
          },
          colors: ['#EBCC21', '#EA7F01']
        },
        gaugeData2: {
          data: {
            value: 63,
            name: '标题2'
          },
          colors: ['#5FDF74', '#00B19E']
        }
      }
    }
  }
</script>
</div>

:::demo

```html
<wdwh-dp-gauge-1 :gauge-data="gaugeData2" gauge-id="gaugeId2"></wdwh-dp-gauge-1>

<script>
  export default {
    data() {
      return {
        gaugeData: {
          data: {
            value: 46,
            name: '标题2'
          },
          colors: ['#EBCC21', '#EA7F01']
        }
      }
    }
  }
</script>
```

:::

### 改变颜色

<div class="demo-block-dark">
  <wdwh-dp-gauge-1 :gauge-data="gaugeData2" gauge-id="gaugeId2"></wdwh-dp-gauge-1>
</div>

:::demo

```html
<wdwh-dp-gauge-1 :gauge-data="gaugeData2" gauge-id="gaugeId2"></wdwh-dp-gauge-1>

<script>
  export default {
    data() {
      return {
        gaugeData2: {
          data: {
            value: 63,
            name: '标题'
          },
          colors: ['#5FDF74', '#00B19E']
        }
      }
    }
  }
</script>
```

:::
