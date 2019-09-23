import Vue from 'vue'
import App from './views/App.vue'
import store from '../src/store/index'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
