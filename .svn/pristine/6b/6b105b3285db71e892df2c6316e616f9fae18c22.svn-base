# 数字滚动

---

### 基础用法

- 由`count-str` 参数配置数据，注意：传入的数字为字符串格式。
- `num-title` 可添加数字相应的标题。

<div class="demo-block-dark">
<div style="display:flex;justify-content: space-around;">
  <wdwh-dp-number
    :count-str="serverCount"
    num-title="测试标题1"
    ref="numCard1"
  ></wdwh-dp-number>
  <wdwh-dp-number
    :count-str="serverCount2"
    num-title="测试标题2"
    ref="numCard1"
  ></wdwh-dp-number>
  <wdwh-dp-number
    :count-str="serverCount3"
    num-title="测试标题3"
    ref="numCard1"
  ></wdwh-dp-number>
</div>

<script>
export default {
    data() {
      return {
        serverCount: "5423",
        serverCount2: "5456",
        serverCount3: "12452",
        startVal: 0,
        endVal: 2022
      };
    },
  }
</script>
</div>

::: demo

```html
<div style="display:flex;justify-content: space-around;">
  <wdwh-dp-number
    :count-str="serverCount"
    num-title="测试标题1"
    ref="numCard1"
  ></wdwh-dp-number>
  <wdwh-dp-number
    :count-str="serverCount2"
    num-title="测试标题2"
    ref="numCard1"
  ></wdwh-dp-number>
  <wdwh-dp-number
    :count-str="serverCount3"
    num-title="测试标题3"
    ref="numCard1"
  ></wdwh-dp-number>
</div>

<script>
  export default {
    data() {
      return {
        serverCount: '5423',
        serverCount2: '5456',
        serverCount3: '12452'
      }
    }
  }
</script>
```

:::

### vue-count-to 数字滚动

这是基于 vue-count-to 插件的一种滚动方式。

<div class="demo-block-dark">
  <count-to :start-val='startVal' :end-val='endVal' :duration='3000' style="font-size:24px;color:#fff;"></count-to>
</div>

::: demo

```html
<count-to
  :start-val="startVal"
  :end-val="endVal"
  :duration="3000"
  style="font-size:24px;color:#fff;"
></count-to>

<script>
  export default {
    data() {
      return {
        startVal: 0,
        endVal: 2022
      }
    }
  }
</script>
```

:::

## count-to 选项

| 参数      | 说明                   | 类型     | 默认值 |
| --------- | ---------------------- | -------- | ------ |
| startVal  | 开始值                 | Number   | 0      |
| endVal    | 结束值                 | Number   | 2017   |
| duration  | 持续时间，以毫秒为单位 | Number   | 0      |
| autoplay  | 自动播放               | Boolean  | true   |
| decimals  | 要显示的小数位数       | Number   | 0      |
| decimal   | 十进制分割             | String   | .      |
| separator | 分隔符                 | String   | ,      |
| prefix    | 前缀                   | String   | "      |
| suffix    | 后缀                   | String   | "      |
| useEasing | 使用缓和功能           | Number   | 0      |
| easingFn  | 缓和回调               | Function | —      |
| decimals  | 要显示的小数位数       | Number   | 0      |

** 注意：当 autoplay：true 时，它将在 startVal 或 endVal 更改时自动启动**

## count-to 功能

| 方法名          | 说明             |
| --------------- | ---------------- |
| mountedCallback | 挂载以后返回回调 |
| start           | 开始计数         |
| pause           | 暂停计数         |
| reset           | 重置 countTo     |
