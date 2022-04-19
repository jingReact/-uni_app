# 水波图

---

### 基础用法

- 由`liquid-data`属性来配置水波图所需参数， 其中 data 表示水波图的占比数据,**只能传小数**;
- `liquid-id`表示图表的唯一 ID；必传。<font color="red">**_如果一个页面中有多个水波图，liquidId 必须不一样。_**</font>
- `style` 可以设置宽高样式，比如(height:300px;width:500px;)，默认高：300px，宽：100%。

<div class="demo-block-dark">
  <wdwh-dp-liquid-1
    :liquid-data="liquidData"
    liquid-id="liquidId"
  ></wdwh-dp-liquid-1>

  <script>
export default {
    data() {
      return {
        liquidData: {
             data:0.5,
        },
        liquidDatas: {
          data: 0.65,
          colors: ['rgba(76, 239, 168, 0.45)', 'rgba(22, 162, 139, 0.45)']
        }
      };
    },
  }
</script>
</div>

::: demo

```html
<wdwh-dp-liquid-1
  :liquid-data="liquidData"
  liquid-id="liquidId"
></wdwh-dp-liquid-1>

<script>
  export default {
    data() {
      return {
        liquidData: {
          data: 0.5
        }
      }
    }
  }
</script>
```

:::

### 改变颜色

- `colors` 属性需传两个颜色,分别表示水球图边框阴影颜色和两个水波的颜色

    <div class="demo-block-dark">
      <wdwh-dp-liquid-1
        :liquid-data="liquidDatas"
        liquid-id="liquidId2"
      ></wdwh-dp-liquid-1>
    </div>

::: demo

```html
<wdwh-dp-liquid-1
  :liquid-data="liquidDatas"
  liquid-id="liquidId2"
></wdwh-dp-liquid-1>

<script>
  export default {
    data() {
      return {
        liquidDatas: {
          data: 0.65,
          colors: ['rgba(76, 239, 168, 0.45)', 'rgba(22, 162, 139, 0.45)']
        }
      }
    }
  }
</script>
```

:::
