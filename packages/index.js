/**
 * @author monkeywang
 * Date: 17/11/9
 */
import './common.scss'
import WButton from './button/index.js'
import WRow from './row/index'
import WCol from './col/index'
import WTag from './tag/index'
import WShowMore from './show-more/index'
import WLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import WAlert from './alert/index'
import WLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'

import wdwhDpContainer from './wdwh-dp-layout-container/wdwh-dp-container/index'
import wdwhDpFooterContainer from './wdwh-dp-layout-container/wdwh-dp-footer/index'
import wdwhDpHeaderContainer from './wdwh-dp-layout-container/wdwh-dp-header/index'
import wdwhDpMainContainer from './wdwh-dp-layout-container/wdwh-dp-main/index'

import wdwhDpHead1 from './wdwh-dp-header1/index'
import wdwhDpHead2 from './wdwh-dp-header2/index'
import wdwhDpFooter from './wdwh-dp-footer/index'
import wdwhDpContent from './wdwh-dp-layoutlist/wdwh-dp-content/index'
import wdwhDpRow from './wdwh-dp-layoutlist/wdwh-dp-row/index'
import wdwhDpCol from './wdwh-dp-layoutlist/wdwh-dp-col/index'
import wdwhDpCardTitle from './wdwh-dp-card-title/index'
import wdwhDpCardTitle1 from './wdwh-dp-card-title1/index'
import wdwhDpPie1 from './wdwh-dp-pie1/index'
import wdwhDpPie2 from './wdwh-dp-pie2/index'
import wdwhDpPie3 from './wdwh-dp-pie3/index'
import wdwhDpBar1 from './wdwh-dp-bar1/index'
import wdwhDpBar2 from './wdwh-dp-bar2/index'
import wdwhDpBar3 from './wdwh-dp-bar3/index'
import wdwhDpBar4 from './wdwh-dp-bar4/index'
import wdwhDpBar5 from './wdwh-dp-bar5/index'
import wdwhDpBar6 from './wdwh-dp-bar6/index'
import wdwhDpLine1 from './wdwh-dp-line1/index'
import wdwhDpLiquid1 from './wdwh-dp-liquid1/index'
import wdwhDpNumber from './wdwh-dp-number/index'
import wdwhDpScrollList from './wdwh-dp-scroll-list/index'
import wdwhDpProgress1 from './wdwh-dp-progress1/index'
import wdwhDpProgress2 from './wdwh-dp-progress2/index'
import wdwhDpProgress3 from './wdwh-dp-progress3/index'
import wdwhDpGauge1 from './wdwh-dp-gauge1/index'
import wdwhDpDataStats from './wdwh-dp-data-stats/index'
import wdwhDpDataStats1 from './wdwh-dp-data-stats1/index'
import wdwhDpDataStats2 from './wdwh-dp-data-stats2/index'
import wdwhDpChartDrill from './wdwh-dp-chart-drill/index'
import wdwhDpPictorialBar1 from './wdwh-dp-pictorialBar1/index'
import wdwhDpPictorialBar2 from './wdwh-dp-pictorialBar2/index'
import wdwhDpPictorialBar7 from './pictorialBar/wdwh-dp-pictorialBar7/index'
import wdwhDpPictorialBar3 from './pictorialBar/wdwh-dp-pictorialBar3/index'
import wdwhDpPictorialBar4 from './pictorialBar/wdwh-dp-pictorialBar4/index'
import wdwhDpPictorialBar5 from './pictorialBar/wdwh-dp-pictorialBar5/index'
import wdwhDpPictorialBar6 from './pictorialBar/wdwh-dp-pictorialBar6/index'
import gl from './pictorialBar/map/gl/index'
import wdwhDpTable from './wdwh-dp-table/index'
import wdwhDpWordCloud from './wdwh-dp-word-cloud/index'
import wdwhDpCenterContent from './wdwh-dp-center-content/index'
import wdwhDpCenterContent1 from './wdwh-dp-center-content1/index'
import wdwhDpMap1 from './wdwh-dp-map/map1/index'
import wdwhDpMap2 from './wdwh-dp-map/map2/index'
import wdwhDpMap3 from './wdwh-dp-map/map3/index'
import wdwhDpMap4 from './wdwh-dp-map4/index'
const components = [
  WButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  WAlert,
  Skeleton,
  wdwhDpHead1,
  wdwhDpHead2,
  wdwhDpFooter,
  wdwhDpContent,
  wdwhDpRow,
  wdwhDpCol,
  wdwhDpCardTitle,
  wdwhDpCardTitle1,
  wdwhDpPie1,
  wdwhDpPie2,
  wdwhDpPie3,
  wdwhDpBar1,
  wdwhDpBar2,
  wdwhDpBar3,
  wdwhDpBar4,
  wdwhDpBar5,
  wdwhDpBar6,
  wdwhDpLine1,
  wdwhDpLiquid1,
  wdwhDpNumber,
  wdwhDpScrollList,
  wdwhDpProgress1,
  wdwhDpProgress2,
  wdwhDpProgress3,
  wdwhDpGauge1,
  wdwhDpDataStats,
  wdwhDpDataStats1,
  wdwhDpDataStats2,
  wdwhDpChartDrill,
  wdwhDpTable,
  wdwhDpPictorialBar1,
  wdwhDpPictorialBar7,
  wdwhDpPictorialBar3,
  wdwhDpPictorialBar4,
  wdwhDpPictorialBar5,
  wdwhDpPictorialBar6,
  gl,
  wdwhDpPictorialBar2,
  wdwhDpContainer,
  wdwhDpWordCloud,
  wdwhDpFooterContainer,
  wdwhDpHeaderContainer,
  wdwhDpMainContainer,
  wdwhDpCenterContent,
  wdwhDpCenterContent1,
  wdwhDpMap1,
  wdwhDpMap2,
  wdwhDpMap3,
  wdwhDpMap4,
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  MetaInfo,
  WAlert,
  WLoadingBar,
  Skeleton,
  wdwhDpHead1,
  wdwhDpHead2,
  wdwhDpFooter,
  wdwhDpContent,
  wdwhDpRow,
  wdwhDpCol,
  wdwhDpCardTitle,
  wdwhDpCardTitle1,
  wdwhDpPie1,
  wdwhDpPie2,
  wdwhDpPie3,
  wdwhDpBar1,
  wdwhDpBar2,
  wdwhDpBar3,
  wdwhDpBar4,
  wdwhDpBar5,
  wdwhDpBar6,
  wdwhDpLine1,
  wdwhDpLiquid1,
  wdwhDpNumber,
  wdwhDpScrollList,
  wdwhDpProgress1,
  wdwhDpProgress2,
  wdwhDpProgress3,
  wdwhDpGauge1,
  wdwhDpDataStats,
  wdwhDpDataStats1,
  wdwhDpDataStats2,
  wdwhDpChartDrill,
  wdwhDpTable,
  wdwhDpPictorialBar1,
  wdwhDpPictorialBar7,
  wdwhDpPictorialBar3,
  wdwhDpPictorialBar4,
  wdwhDpPictorialBar5,
  wdwhDpPictorialBar6,
  gl,
  wdwhDpPictorialBar2,
  wdwhDpContainer,
  wdwhDpWordCloud,
  wdwhDpFooterContainer,
  wdwhDpHeaderContainer,
  wdwhDpMainContainer,
  wdwhDpCenterContent,
  wdwhDpCenterContent1,
  wdwhDpMap1,
  wdwhDpMap2,
  wdwhDpMap3,
  wdwhDpMap4
}
