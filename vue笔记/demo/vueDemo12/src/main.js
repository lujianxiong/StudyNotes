import Vue from 'vue'
import App from './App.vue'
//引入vue-resource
import VueResource from 'vue-resource';
//Vue使用VueResource
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
