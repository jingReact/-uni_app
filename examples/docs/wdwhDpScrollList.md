# 无缝滚动

---

<div class="demo-block-dark">
  <wdwh-dp-scroll-list :list-config="listConfig" :class-option="classOption"></wdwh-dp-scroll-list>
<script>
  export default {
    data() {
      return {
        listConfig: {
           listDatas: [
          {
            title: "wewfe消息消息消息1111",
            data: "dss",
          },
          {
            title: "wewerf消息消息消息22222",
            data: "dss",
          },
          {
            title: "w546ew",
            data: "dsy65s",
          },
          {
            title: "wyew",
            data: "dstgts",
          },
          {
            title: "we34w",
            data: "dss",
          },
          {
            title: "we3476w",
            data: "dss",
          },
        ],
      },
      };
    },
    computed: {
    classOption () {
      return {
        step: 0.5, // 数值越大速度滚动越快
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  }
  }
</script>
</div>

:::demo

```html
<wdwh-dp-scroll-list
  :list-config="listConfig"
  :class-option="classOption"
></wdwh-dp-scroll-list>
<script>
  export default {
    data() {
      return {
        listConfig: {
          listDatas: [
            {
              title: 'wewfe消息消息消息1111',
              data: 'dss'
            },
            {
              title: 'wewerf消息消息消息22222',
              data: 'dss'
            },
            {
              title: 'w546ew',
              data: 'dsy65s'
            },
            {
              title: 'wyew',
              data: 'dstgts'
            },
            {
              title: 'we34w',
              data: 'dss'
            },
            {
              title: 'we3476w',
              data: 'dss'
            }
          ]
        }
      }
    },
    computed: {
      classOption() {
        return {
          step: 0.5, // 数值越大速度滚动越快
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      }
    }
  }
</script>
```

:::

## classOption 配置

| 参数         | 说明                                                                  | 类型    | 默认值 |
| ------------ | --------------------------------------------------------------------- | ------- | ------ |
| step         | 数值越大速度滚动越快                                                  | Number  | 1      |
| limitMoveNum | 开启无缝滚动的数据量                                                  | Number  | 5      |
| hoverStop    | 是否启用鼠标 hover 控制                                               | Boolean | true   |
| direction    | 方向 0 往下 1 往上 2 向左 3 向右                                      | Number  | 1      |
| switchOffset | 左右切换按钮距离左右边界的边距(px)                                    | Number  | 30     |
| navigation   | 左右方向的滚动是否显示控制器按钮，true 的时候 autoPlay 自动变为 false | Boolean | false  |
