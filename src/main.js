import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/footer.css'
import './assets/css/global.css'
import './assets/css/index.css'
import './assets/css/menu.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
