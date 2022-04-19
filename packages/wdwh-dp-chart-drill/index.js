import wdwhDpChartDrill from './src/main'

/* istanbul ignore next */
wdwhDpChartDrill.install = function (Vue) {
  Vue.component(wdwhDpChartDrill.name, wdwhDpChartDrill)
}

export default wdwhDpChartDrill
