// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import WDWHDPUI from '../packages/index'
import '../packages/theme-default/lib/index.css'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
import countTo from 'vue-count-to'
import vueSeamlessScroll from 'vue-seamless-scroll'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component('demo-block', demoBlock)
Vue.component('countTo', countTo)
Vue.component('vueSeamlessScroll', vueSeamlessScroll)
Vue.use(WDWHDPUI)
Vue.use(dataV)
// 引入echarts
Vue.prototype.$echarts = echarts

Vue.prototype.$echartsResize = function (ref) {
  window.addEventListener('resize', function () {
    ref.resize()
  })
}
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
