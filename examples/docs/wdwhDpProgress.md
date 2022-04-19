# 进度条

---

### 基础用法

- `progress-list` 属性配置进度条的长度和标题，需以 name 和 value 的形式传值。

<div class="demo-block-dark">
  <wdwh-dp-progress-1 :progress-list="listDatas"></wdwh-dp-progress-1>
<script>
  export default {
    data() {
      return {
        listDatas: [
          {
            name: "标题11",
            value: "16",
          },
          {
            name: "标题22",
            value: "35",
          },
          {
            name: "w546ew",
            value: "59",
          },
          {
            name: "wyew",
            value: "73",
          },
          {
            name: "we3476w",
            value: "90",
          },
        ],
        rectData: {
          xData:['医院','学校','商场','办公楼'],
          opinionData:[389,652,346,714],
          maxCount:1000,
        },
        circleList:[
          {
            name: "测试111",
            value: "54",
            color:"#FF8D2E"
          },
          {
            name: "测试222",
            value: "90",
            color:"#188df0"
          },
          {
            name: "测试333",
            value: "17",
            color:"#14c8d4"
          },
          {
            name: "测试444",
            value: "54",
            color:"#32c5e9"
          },
          {
            name: "测试555",
            value: "29",
            color:"#96bfff"
          },
        ]
      };
    },
  }
</script>
</div>

:::demo

```html
<wdwh-dp-progress-1 :progress-list="listDatas"></wdwh-dp-progress-1>
<script>
  export default {
    data() {
      return {
        listDatas: [
          {
            name: '标题11',
            value: '16'
          },
          {
            name: '标题22',
            value: '35'
          },
          {
            name: 'w546ew',
            value: '59'
          },
          {
            name: 'wyew',
            value: '73'
          },
          {
            name: 'we34w',
            value: '85'
          },
          {
            name: 'we3476w',
            value: '90'
          }
        ]
      }
    }
  }
</script>
```

:::

### 矩形进度条

- `rect-data` 属性配置进度条，其中 `xData` 表示每一项的标题；`opinionData` 表示数据，数字数组格式；`maxCount` 表示以此为最大值折算百分比。
- `rect-id`表示图表的唯一 ID；必传。<font color="red">**_如果一个页面中有多个矩形进度条时，`rect-id`必须不一样。_**</font>

<div class="demo-block-dark">
  <wdwh-dp-progress-2 :rect-data="rectData" rect-id="rectId"></wdwh-dp-progress-2>
</div>

:::demo

```html
<wdwh-dp-progress-2 :rect-data="rectData" rect-id="rectId"></wdwh-dp-progress-2>

<script>
  export default {
    data() {
      return {
        rectData: {
          xData: ['医院', '学校', '商场', '办公楼'],
          opinionData: [389, 652, 346, 714],
          maxCount: 1000
        }
      }
    }
  }
</script>
```

:::

## 环形进度条

| 参数  | 说明           | 类型   | 默认值 |
| ----- | -------------- | ------ | ------ |
| name  | 标题           | String | —      |
| value | 进度条值(整数) | String | —      |
| color | 进度条颜色     | String | 蓝色   |

<div class="demo-block-dark">
  <wdwh-dp-progress-3 :circle-list="circleList"></wdwh-dp-progress-3>
</div>

:::demo

```html
<wdwh-dp-progress-3 :circle-list="circleList"></wdwh-dp-progress-3>

<script>
  export default {
    data() {
      return {
        circleList: [
          {
            name: '测试111',
            value: '54',
            color: '#FF8D2E'
          },
          {
            name: '测试222',
            value: '90',
            color: '#188df0'
          },
          {
            name: '测试333',
            value: '17',
            color: '#14c8d4'
          },
          {
            name: '测试444',
            value: '54',
            color: '#32c5e9'
          },
          {
            name: '测试555',
            value: '29',
            color: '#96bfff'
          }
        ]
      }
    }
  }
</script>
```

:::
