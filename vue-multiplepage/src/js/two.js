import Vue from 'vue'
import Two from './two.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#two',
  render: h => h(Two)
})
