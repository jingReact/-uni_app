# 边框

## 说明和用法

| 属性      | 说明                | 类型     | 可选值 | 默认值 |
| --------- | ------------------- | -------- | ------ | ------ |
| showIndex | 是否加序号          | Boolean  | -      | true   |
| loading   | 是否加 loading 等待 | Boolean  | -      | -      |
| columns   | 表格的表头数据      | Array    | —      | —      |
| data      | 表格数据            | Array    | —      | —      |
| formatter | 格式化数据          | function | —      | —      |

- 基于 Element-UI 库，el-table 的二次封装，继承了 Element-UI 表格组件的所有属性，更多参数说明请参考 Element-UI 官方文档。

<div class="demo-block-dark">
   <wdwh-dp-table
    :loading="loading"
    :columns="columns"
    :showIndex="true"
    :data="tableDatas"
    style="width: 100%;"
    stripe
    height="345"
  >
  </wdwh-dp-table>
</div>

<script>
export default {
    data() {
      return {
          loading: false,
          tableDatas: [
            {
              yjrq: '2022-03-21',
              xm: '张三',
              zjhm: '421011185202243564',
              lycs: '深圳'
            }
          ],
          columns: [
            {
              prop: 'yjrq',
              name: '预警日期'
            },
            {
              prop: 'xm',
              name: '来乌人员'
            },
            {
              prop: 'zjhm',
              name: '身份证',
              formatter: val => {
                return ('' + val).replace(/^(.{6})(?:\d+)(.{2})$/, '$1****$2')
              }
            },
            {
              prop: 'lycs',
              name: '来源城市'
            }
          ]
      };
    },
  }
</script>

::: demo

```html
<wdwh-dp-table
  :loading="loading"
  :columns="columns"
  :showIndex="true"
  :data="tableDatas"
  style="width: 100%;"
  stripe
  height="345"
>
</wdwh-dp-table>

<script>
  export default {
    data() {
      return {
        loading: false,
        tableDatas: [
          {
            yjrq: '2022-03-21',
            xm: '张三',
            zjhm: '421011185202243564',
            lycs: '深圳'
          }
        ],
        columns: [
          {
            prop: 'yjrq',
            name: '预警日期'
          },
          {
            prop: 'xm',
            name: '来乌人员'
          },
          {
            prop: 'zjhm',
            name: '身份证',
            formatter: val => {
              return ('' + val).replace(/^(.{6})(?:\d+)(.{2})$/, '$1****$2')
            }
          },
          {
            prop: 'lycs',
            name: '来源城市'
          }
        ]
      }
    }
  }
</script>
```

:::
