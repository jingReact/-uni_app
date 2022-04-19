<template>
  <div>
    <div class="echart-tip">
      <el-button-group>
        <el-button
          :type="isChart == 1 ? 'primary' : 'info'"
          size="small"
          @click="isChart = 1"
          >图</el-button
        >
        <el-button
          :type="isChart == 2 ? 'primary' : 'info'"
          size="small"
          @click="isChart = 2"
          >表</el-button
        >
      </el-button-group>
    </div>
    <div v-if="isChart == 1">
      <slot name="slot-chart"></slot>
    </div>
    <div v-if="isChart == 2">
      <ul class="tabs">
        <li @click="tabs(1)" :class="isActive == '1' ? 'liactive' : ''">
          {{tableTitle}}
        </li>
      </ul>
      <div class="tabl" v-show="isActive == '1'">
        <slot name="slot-table"></slot>
      </div>
    </div>
  </div>
</template>
<script>
// import BarEchertsJb from "../commonEcharts/barEchart/BarEchertsJb.vue";
export default {
  name: 'wdwh-dp-chart-drill',
  components: {
    // BarEchertsJb,
  },
  props: {
    drillDataObj: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      isChart: this.drillDataObj.isChart,
      isActive: this.drillDataObj.isActive,
      tableTitle: this.drillDataObj.tableTitle
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.echart-tip{
  margin-bottom: 10px;
}
</style>
