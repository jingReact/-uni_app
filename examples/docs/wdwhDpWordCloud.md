# 词云库

---

## 说明和用法

| 属性          | 说明                   | 类型   | 可选值 | 默认值 |
| ------------- | ---------------------- | ------ | ------ | ------ |
| my-colors     | 每个词的颜色           | Array  | -      | -      |
| default-words | 展示的词集合           | Array  | —      | —      |
| name          | 要展示的词语           | String | —      | —      |
| value         | 要展示的词语的字体大小 | Number | —      | —      |

<wdwh-dp-word-cloud :my-colors="myColors" :default-words="defaultWords"></wdwh-dp-word-cloud>

<script>
export default {
    data() {
      return {
        myColors: [
          '#1f77b4',
          '#629fc9',
          '#94bedb',
          '#c9e0ef',
          '#e062ae',
          '#fb7293',
          '#e690d1',
          '#32c5e9',
          '#96bfff'
        ],
        defaultWords: [
          {
            name: 'Cat',
            value: 26
          },
          {
            name: 'fish',
            value: 19
          },
          {
            name: 'things',
            value: 18
          },
          {
            name: 'look',
            value: 16
          },
          {
            name: 'two',
            value: 15
          },
          {
            name: 'fun',
            value: 9
          },
          {
            name: '集合',
            value: 18
          },
          {
            name: '需求',
            value: 24
          },
          {
            name: '游戏',
            value: 21
          },
          {
            name: '源码',
            value: 16
          }
        ]
      };
    },
  }
</script>

:::demo

```html
<wdwh-dp-word-cloud
  :my-colors="myColors"
  :default-words="defaultWords"
></wdwh-dp-word-cloud>

<script>
  export default {
    data() {
      return {
        myColors: [
          '#1f77b4',
          '#629fc9',
          '#94bedb',
          '#c9e0ef',
          '#e062ae',
          '#fb7293',
          '#e690d1',
          '#32c5e9',
          '#96bfff'
        ],
        defaultWords: [
          {
            name: 'Cat',
            value: 26
          },
          {
            name: 'fish',
            value: 19
          },
          {
            name: 'things',
            value: 18
          },
          {
            name: 'look',
            value: 16
          },
          {
            name: 'two',
            value: 15
          },
          {
            name: 'fun',
            value: 9
          },
          {
            name: '集合',
            value: 18
          },
          {
            name: '需求',
            value: 24
          },
          {
            name: '游戏',
            value: 21
          },
          {
            name: '源码',
            value: 16
          }
        ]
      }
    }
  }
</script>
```

:::
