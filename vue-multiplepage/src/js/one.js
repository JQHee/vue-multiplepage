import Vue from 'vue'
import One from './one.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#one',
  render: h => h(One)
})
