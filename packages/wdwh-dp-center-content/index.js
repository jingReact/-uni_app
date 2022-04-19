import wdwhDpCenterContent from './src/main'

/* istanbul ignore next */
wdwhDpCenterContent.install = function (Vue) {
  Vue.component(wdwhDpCenterContent.name, wdwhDpCenterContent)
}

export default wdwhDpCenterContent
