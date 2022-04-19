# 环形图

---

### 基础用法和说明

- 由`pie-data`属性来配置环形图所需参数。
- `pie-id`表示图表的唯一 ID；必传。<font color="red">**_如果一个页面中有多个环形图或饼图，`pie-id`必须不一样。_**</font>
- ①：['#38A1F7','#59CECE','#5ECE7D','#5470c6','#91cc75','#fac858','#ee6666','#73c0de','#3ba272','#fc8452','#9a60b4','#ea7ccc']
  | 参数 | 说明 | 类型 | 默认值 |
  | ----------- | ---------------------------------- | ------ | ------------------- |
  | nameTitle | 鼠标移入环形图后显示的 tips 的标题 | String | - |
  | opinionData | 需以 name 和 value 的形式传值 | Array | - |
  | style | 设置宽高样式 | - | 高：300px，宽：100% |
  | colors | 设置颜色 | Array | ① |

<div class="demo-block-dark">
  <wdwh-dp-pie-1
    :pie-data="pieData"
    pie-id="pieId"
  ></wdwh-dp-pie-1>

<script>
export default {
    data() {
      return {
      pieData: {
          nameTitle: "性别",
          opinionData: [
            { value: 1048, name: "男" },
            { value: 735, name: "女" },
            { value: 75, name: "未知" },
          ],
          colors:['#38A1F7', '#59CECE', '#5ECE7D']
        },
      pieDatas: {
          nameTitle: "统计",
          opinionData: [
          { value: 28, name: "rose 5" },
          { value: 26, name: "rose lor6" },
          { value: 52, name: "rose 73" },
          { value: 47, name: "rose 1" },
          { value: 38, name: "rose 2" },
          { value: 56, name: "rose 33" },
          { value: 30, name: "rose 4" },
          { value: 28, name: "rose 5" },
          { value: 26, name: "rose 62" },
          { value: 78, name: "rose 73" },
          { value: 40, name: "rose 14" },
          { value: 36, name: "rose 2r" },
          { value: 34, name: "rosee 3" },
        ],
      },
      pieArray: {
          nameTitle: '饼图统计',
          opinionData: [
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose lor6' },
            { value: 52, name: 'rose 73' },
            { value: 47, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 56, name: 'rose 33' },
            { value: 30, name: 'rose 4' },
          ]
        }
      };
    },
  }
</script>
</div>

::: demo

```html
<wdwh-dp-pie-1 :pie-data="pieData" pie-id="pieId"></wdwh-dp-pie-1>

<script>
  export default {
    data() {
      return {
        pieData: {
          nameTitle: '性别',
          opinionData: [
            { value: 1048, name: '男' },
            { value: 735, name: '女' },
            { value: 75, name: '未知' }
          ],
          colors: ['#38A1F7', '#59CECE', '#5ECE7D']
        }
      }
    }
  }
</script>
```

:::

### 多条数据

<div class="demo-block-dark">
  <wdwh-dp-pie-1
    :pie-data="pieDatas"
    pie-id="pieId2"
  ></wdwh-dp-pie-1>
</div>

::: demo

```html
<wdwh-dp-pie-1 :pie-data="pieDatas" pie-id="pieId2"></wdwh-dp-pie-1>

<script>
  export default {
    data() {
      return {
        pieDatas: {
          nameTitle: '统计',
          opinionData: [
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose lor6' },
            { value: 52, name: 'rose 73' },
            { value: 47, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 56, name: 'rose 33' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 62' },
            { value: 78, name: 'rose 73' },
            { value: 40, name: 'rose 14' },
            { value: 36, name: 'rose 2r' },
            { value: 34, name: 'rosee 3' }
          ]
        }
      }
    }
  }
</script>
```

:::

### 玫瑰花型环形图

<div class="demo-block-dark">
  <wdwh-dp-pie-2
    :pie-data="pieDatas"
    pie-id="pieId3"
  ></wdwh-dp-pie-2>
</div>

::: demo

```html
<wdwh-dp-pie-2 :pie-data="pieDatas" pie-id="pieId3"></wdwh-dp-pie-2>

<script>
  export default {
    data() {
      return {
        pieDatas: {
          nameTitle: '统计',
          opinionData: [
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose lor6' },
            { value: 52, name: 'rose 73' },
            { value: 47, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 56, name: 'rose 33' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 62' },
            { value: 78, name: 'rose 73' },
            { value: 40, name: 'rose 14' },
            { value: 36, name: 'rose 2r' },
            { value: 34, name: 'rosee 3' }
          ]
        }
      }
    }
  }
</script>
```

:::

### 饼图

<div class="demo-block-dark">
  <wdwh-dp-pie-3
    :pie-data="pieArray"
    pie-id="pieId4"
  ></wdwh-dp-pie-3>
</div>

::: demo

```html
<wdwh-dp-pie-3 :pie-data="pieArray" pie-id="pieId4"></wdwh-dp-pie-3>

<script>
  export default {
    data() {
      return {
        pieArray: {
          nameTitle: '饼图统计',
          opinionData: [
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose lor6' },
            { value: 52, name: 'rose 73' },
            { value: 47, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 56, name: 'rose 33' },
            { value: 30, name: 'rose 4' }
          ]
        }
      }
    }
  }
</script>
```

:::
