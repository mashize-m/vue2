const base = '/views/expand/'
export default [
  {
    path: base + 'pageGuide',
    name: '页面引导',
    component: () => import(/* webpackChunkName: 'pageGuide' */ '@/views/expand/pageGuide')
  },
  {
    path: base + 'pageTurning',
    name: '仿真翻页效果',
    component: () => import(/* webpackChunkName: 'pageTurning' */ '@/views/expand/pageTurning')
  },
  {
    path: base + 'fabricBase',
    name: 'canvas库：fabric入门',
    component: () => import(/* webpackChunkName: 'fabricBase' */ '@/views/expand/fabricBase')
  },
  {
    path: base + 'p5Base',
    name: 'canvas库：p5入门',
    component: () => import(/* webpackChunkName: 'p5Base' */ '@/views/expand/p5Base')
  },
  {
    path: base + 'hanziwrite',
    name: 'hanziwrite',
    component: () => import(/* webpackChunkName: 'hanziwrite' */ '@/views/expand/hanziwrite/index.vue')
  },
  {
    path: base + 'math',
    name: 'math',
    component: () => import(/* webpackChunkName: 'math' */ '@/views/expand/math/index.vue')
  }
]
