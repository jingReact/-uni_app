# 图表下钻

---

## 下钻弹框用法和说明

- 基于 element-ui 的`el-dialog`弹框实现，其中`showDrillVisible`属性控制下钻弹框显示隐藏；
- `title` 修改下钻弹框标题；`width` 修改宽度；
- `before-close` 属性绑定一个事件修改 showDrillVisible 属性达到显示隐藏的效果；
- 其他属性直接默认复制即可。

 <font color="red">注意</font>：此组件中运用插槽`slot`的方式插入图和表的数据，其中`slot="slot-chart"`和`slot="slot-table"`不可更改

<div class="demo-block-dark">
  <el-button size="small" type="primary" @click="handleClick">点击</el-button>
  <el-dialog
    class="my-dialog"
    title="测试弹框"
    :visible.sync="showDrillVisible"
    width="80%"
    :append-to-body="true"
    :center="true"
    :before-close="handleClose"
  >
    <div style="height: 500px">
      <wdwh-dp-chart-drill :drill-data-obj="drillDataObj">
        <div slot="slot-chart">
          <wdwh-dp-bar-1
            :bar-data="drillDataObj.barData"
            bar-id="drillBar"
            style="height:500px"
          ></wdwh-dp-bar-1>
        </div>
        <div slot="slot-table">
          <wdwh-dp-table
            :columns="drillDataObj.columns"
            :data="drillDataObj.tableDatas"
            style="width: 100%;"
            stripe
            height="500"
          ></wdwh-dp-table>
        </div>
      </wdwh-dp-chart-drill>
    </div>

  </el-dialog>

  <script>
    export default {
      data() {
        return {
          showDrillVisible:false,
          drillDataObj: {
            isChart: 1,
            isActive: '1',
            tableTitle: '表格小标题',
            columns: [
              {
                prop: 'ceshi1',
                name: '测试1'
              },
              {
                prop: 'ceshi2',
                name: '测试2'
              },
              {
                prop: 'ceshi3',
                name: '测试3'
              },
              {
                prop: 'ceshi4',
                name: '测试4'
              }
            ],
            tableDatas: [
              {
                ceshi1: '1111',
                ceshi2: '2222',
                ceshi3: '3333',
                ceshi4: '4444'
              },
              {
                ceshi1: '2',
                ceshi2: '2222',
                ceshi3: '3333',
                ceshi4: '4444'
              }
            ],
            barData: {
              xData: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
              ],
              unit: '单位',
              legend1: '数据统计一',
              opinionData1: [36, 48, 66, 85, 79, 25, 66, 48, 70, 12, 19, 58]
            }
          }
        }
      },
      methods:{
        handleClick(){
          this.showDrillVisible = true;
        },
        handleClose(){
          this.showDrillVisible = false
        }
      }
    }
  </script>
</div>

:::demo

```html
<el-dialog
  class="my-dialog"
  title="测试弹框"
  :visible.sync="showDrillVisible"
  width="80%"
  :append-to-body="true"
  :center="true"
  :before-close="handleClose"
>
  <div style="height: 500px">
    <wdwh-dp-chart-drill :drill-data-obj="drillDataObj">
      <div slot="slot-chart">
        <wdwh-dp-bar-1
          :bar-data="drillDataObj.barData"
          bar-id="drillBar"
        ></wdwh-dp-bar-1>
      </div>
      <div slot="slot-table">
        <wdwh-dp-table
          :columns="drillDataObj.columns"
          :data="drillDataObj.tableDatas"
          style="width: 100%;"
          stripe
          height="500"
        ></wdwh-dp-table>
      </div>
    </wdwh-dp-chart-drill>
  </div>
</el-dialog>

<script>
  export default {
    data() {
      return {
        showDrillVisible: false,
        drillDataObj: {
          isChart: 1,
          isActive: '1',
          tableTitle: '表格小标题',
          columns: [
            {
              prop: 'ceshi1',
              name: '测试1'
            },
            {
              prop: 'ceshi2',
              name: '测试2'
            },
            {
              prop: 'ceshi3',
              name: '测试3'
            },
            {
              prop: 'ceshi4',
              name: '测试4'
            }
          ],
          tableDatas: [
            {
              ceshi1: '1111',
              ceshi2: '2222',
              ceshi3: '3333',
              ceshi4: '4444'
            },
            {
              ceshi1: '2',
              ceshi2: '2222',
              ceshi3: '3333',
              ceshi4: '4444'
            }
          ],
          barData: {
            xData: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            unit: '单位',
            legend1: '数据统计一',
            opinionData1: [36, 48, 66, 85, 79, 25, 66, 48, 70, 12, 19, 58]
          }
        }
      }
    },
    methods: {
      handleClick() {
        this.showDrillVisible = true
      },
      handleClose() {
        this.showDrillVisible = false
      }
    }
  }
</script>
```

:::

## 下钻弹框内部图表切换 drill-data-obj 属性

| 属性       | 说明                                               | 类型   | 可选值  | 默认值 |
| ---------- | -------------------------------------------------- | ------ | ------- | ------ |
| isChart    | 1：图，2：表格                                     | Number | 1，2    | 1      |
| isActive   | 1：是否采用表格中小标题的样式，2：默认无修改的样式 | String | "1","2" | "1"    |
| tableTitle | 表格小标题                                         | String | -       | -      |
| columns    | 表格的表头数据                                     | Array  | —       | —      |
| tableDatas | 表格数据                                           | Array  | —       | —      |
| barData    | 柱图配置，参考柱图组件说明                         | Object | —       | —      |
