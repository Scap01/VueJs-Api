import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue} from 'bootstrap-vue'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;

import 'popper.js'




Vue.config.productionTip = false

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
