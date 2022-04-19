# 图片文字统计量

---

### <font color="red">**注意**</font> **下面的使用方式代码， `wdwh_dp_list1` 数组里面的<font color="red"> `imgUrl` </font>路径是相对位置，是以当前的使用组件文件作为起点**。

- 当前图片所在目录在`packages/wdwh-dp-data-stats/src/img/type/rlzy-ys.png`, 如需更换图片，可自行修改。

<script>
  export default {
      data() {
        return {
          wdwh_dp_list1: [
            {
              imgUrl: require("../../packages/wdwh-dp-data-stats/src/img/type/rlzy-ys.png"),
              title: "医生",
              num: 78,
            },
            {
              imgUrl: require("../../packages/wdwh-dp-data-stats/src/img/type/rlzy-hs.png"),
              title: "护士",
              num: 1909,
            },
            {
              imgUrl: require("../../packages/wdwh-dp-data-stats/src/img/type/rlzy-zyys.png"),
              title: "执业医师数",
              num: 456,
            },
          ],
          wdwh_dp_list: [
            {
              name: "当前设备数",
              num: 176789,
            },
            {
              name: "当前设备数",
              num: 176789,
            },
            {
              name: "当前设备数",
              num: 176789,
            },
          ],
          dataInfoList:[
            {
              title: "高级风险",
              count: 5672,
              isDanger:true
            },
            {
              title: "中级风险",
              count: 1264,
              isDanger:false
            },
            {
              title: "低级风险",
              count: 97423,
              isDanger:false
            },
            {
              title: "无风险",
              count: 35413,
              isDanger:false
            },
          ]
        };
      },

    }
</script>

<div class="demo-block-dark">
 <wdwh-dp-data-stats :wdwh_dp_list1="wdwh_dp_list1"></wdwh-dp-data-stats>
</div>

:::demo

```html
<div class="demo-block-dark">
  <wdwh-dp-data-stats :wdwh_dp_list1="wdwh_dp_list1"></wdwh-dp-data-stats>
</div>
<script>
  export default {
    data() {
      return {
        wdwh_dp_list1: [
          {
            imgUrl: require('../../packages/wdwh-dp-data-stats/src/img/type/rlzy-ys.png'), //路径为相对路径，需根据自己文件位置引用
            title: '医生',
            num: 78
          },
          {
            imgUrl: require('../../packages/wdwh-dp-data-stats/src/img/type/rlzy-hs.png'),
            title: '护士',
            num: 1909
          },
          {
            imgUrl: require('../../packages/wdwh-dp-data-stats/src/img/type/rlzy-zyys.png'),
            title: '执业医师数',
            num: 456
          }
        ]
      }
    }
  }
</script>
```

:::

<div class="demo-block-dark">
 <wdwh-dp-data-stats-1 :wdwh_dp_list="wdwh_dp_list"></wdwh-dp-data-stats-1>
</div>

:::demo

```html
<div class="demo-block-dark">
  <wdwh-dp-data-stats-1 :wdwh_dp_list="wdwh_dp_list"></wdwh-dp-data-stats-1>
</div>
<script>
  export default {
    data() {
      return {
        wdwh_dp_list: [
          {
            name: '当前设备数',
            num: 176789
          },
          {
            name: '当前设备数',
            num: 176789
          },
          {
            name: '当前设备数',
            num: 176789
          }
        ]
      }
    }
  }
</script>
```

:::

<div class="demo-block-dark">
 <wdwh-dp-data-stats-2 :data-info="dataInfoList"></wdwh-dp-data-stats-2>
</div>

:::demo

```html
<div class="demo-block-dark">
  <wdwh-dp-data-stats-2 :data-info="dataInfoList"></wdwh-dp-data-stats-2>
</div>
<script>
  export default {
    data() {
      return {
        dataInfoList: [
          {
            title: '高级风险',
            count: 5672,
            isDanger: true
          },
          {
            title: '中级风险',
            count: 1264,
            isDanger: false
          },
          {
            title: '低级风险',
            count: 97423,
            isDanger: false
          },
          {
            title: '无风险',
            count: 35413,
            isDanger: false
          }
        ]
      }
    }
  }
</script>
```

:::
