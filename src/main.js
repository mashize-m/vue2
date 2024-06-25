/*
 * @Description:
 * @Autor: mashize
 * @Date: 2023-01-30 17:30:52
 * @LastEditors: mashize
 * @LastEditTime: 2023-03-10 09:33:43
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Print from 'vue-print-nb'
import _directive from '@/directives/index'

Vue.use(ElementUI)
Vue.use(Print)
Vue.config.productionTip = false

// 全局自定义指令（必须在实例之前）
Object.keys(_directive).forEach((item) => {
  Vue.directive(item, _directive[item])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
