import Vue from 'vue'
import App from './App.vue'

import ndata from './components/newdata.vue'

import VueResource from 'Vue-resource'

Vue.component('newdata', ndata);

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
