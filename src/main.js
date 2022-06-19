import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/base.css'

Vue.config.productionTip = false
Vue.use(ElementUi)

new Vue({
  store, 
  router, 
  render: h => h(App), 
}).$mount('#app')
