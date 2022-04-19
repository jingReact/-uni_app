# 中部区域

- 由`content-data`属性来配置象形柱状图所需参数

| 参数        | 说明         | 类型  | 默认值          |
| ----------- | ------------ | ----- | --------------- |
| contentData | 旋转小球集合 | Array | 个数不超过 4 个 |

<div class="demo-block-dark">
  <wdwh-dp-center-content :content-data="contentData"></wdwh-dp-center-content>
</div>
<script>
export default {
  data () {
    return {
      contentData: [
          {
            name: '数据填报'
          },
          {
            name: '填报分析'
          },
          {
            name: '数据处理'
          },
        ],
      dataConfig: {
          centerInfo: {
            title: 'C位数据',
            value: 4544
          },
          ballData: [
            {
              endVal: 2022,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試测试'
            },
            {
              endVal: 3453,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試22'
            },
            {
              endVal: 5671,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試33'
            },
            {
              endVal: 2312,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試44'
            },
            {
              endVal: 2321,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試55'
            }
          ]
        }
    }
  }
}
</script>

:::demo

```html
<wdwh-dp-center-content :content-data="contentData"></wdwh-dp-center-content>
<script>
  export default {
    data() {
      return {
        contentData: [
          {
            name: '数据填报'
          },
          {
            name: '填报分析'
          },
          {
            name: '数据处理'
          }
        ]
      }
    }
  }
</script>
```

:::

## 类型 2

| 参数    | 说明            | 类型   | 默认值 |
| ------- | --------------- | ------ | ------ |
| endVal  | 统计值          | Number | 2017   |
| iconSrc | icon 的相对路径 | String | -      |
| text    | 描述文字        | String | -      |

- <font color="red">注意：</font> ballData 集合的个数固定有 5 条。

<div class="demo-block-dark">
  <wdwh-dp-center-content-1 :data-config="dataConfig"></wdwh-dp-center-content-1>
</div>

:::demo

```html
<wdwh-dp-center-content-1 :data-config="dataConfig"></wdwh-dp-center-content-1>

<script>
  export default {
    data() {
      return {
        dataConfig: {
          centerInfo: {
            title: 'C位数据',
            value: 4544
          },
          ballData: [
            {
              endVal: 2022,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試测试'
            },
            {
              endVal: 3453,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試22'
            },
            {
              endVal: 5671,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試33'
            },
            {
              endVal: 2312,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試44'
            },
            {
              endVal: 2321,
              iconSrc: require('../../packages/wdwh-dp-center-content1/src/title.png'),
              text: '測試55'
            }
          ]
        }
      }
    }
  }
</script>
```

:::
