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

// 导入代码高亮文件
import hljs from 'highlight.js'
// 导入代码高亮样式
import 'highlight.js/styles/monokai-sublime.css'

Vue.use(ElementUI)
Vue.use(Print)
Vue.config.productionTip = false
// 全局自定义指令（必须在实例之前）
Object.keys(_directive).forEach((item) => {
  Vue.directive(item, _directive[item])
})
// 定义一个代码高亮指令
Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code')
  highlight.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
// 初始化
Vue.prototype.$hljs = hljs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
