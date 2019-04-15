import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/scss/main.scss'
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式

Vue.config.productionTip = false
Vue.use(iView) //使用iview组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
