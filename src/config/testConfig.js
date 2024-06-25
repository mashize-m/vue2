const base = '/views/test/'
export default [
  {
    path: base + 'canvasDemo',
    name: '01_canvasDemo组件',
    component: () => import(/* webpackChunkName: 'canvasDemo' */ '@/views/test/01_canvasDemo')
  },
  {
    path: base + 'canvasAnimate',
    name: '02_canvas-动画功能-未完成',
    component: () => import(/* webpackChunkName: 'canvasAnimate' */ '@/views/test/02_canvasAnimate')
  },
  {
    path: base + 'multiSlot',
    name: '03_多级嵌套的slot',
    component: () => import(/* webpackChunkName: 'multiSlot' */ '@/views/test/03_multiSlot')
  },
  {
    path: base + 'promise',
    name: '04_promise执行顺序测试',
    component: () => import(/* webpackChunkName: 'promise' */ '@/views/test/04_promise')
  },
  {
    path: base + 'scopeSlot',
    name: '05_作用域插槽',
    component: () => import(/* webpackChunkName: 'scopeSlot' */ '@/views/test/05_scopeSlot')
  },
  {
    path: base + 'decorator',
    name: '06_JS的装饰器',
    component: () => import(/* webpackChunkName: 'decorator' */ '@/views/test/06_decorator')
  },
  {
    path: base + 'fors',
    name: '07_for循环、forin、forof的中断跳出',
    component: () => import(/* webpackChunkName: 'fors' */ '@/views/test/07_fors')
  },
  {
    path: base + 'operation',
    name: '08_逻辑运算符、赋值运算符等',
    component: () => import(/* webpackChunkName: 'operation' */ '@/views/test/08_operation')
  },
  {
    path: base + 'splitArray',
    name: '09_Array数组切片分割',
    component: () => import(/* webpackChunkName: 'splitArray' */ '@/views/test/09_splitArray')
  },
  {
    path: base + 'buttonHover',
    name: '10_button的Normal、Hover、Active状态下颜色变化',
    component: () => import(/* webpackChunkName: 'buttonHover' */ '@/views/test/10_buttonHover')
  }
]
