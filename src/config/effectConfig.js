const base = '/views/css-effect/'
export default [
  {
    path: base + 'textPrint',
    name: '01_CSS效果：文字逐字打印效果',
    component: () => import(/* webpackChunkName: 'textPrint' */ '@/views/css-effect/01_textPrint'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'runningbear',
    name: '02_CSS效果：奔跑的北极熊动画',
    component: () => import(/* webpackChunkName: 'runningbear' */ '@/views/css-effect/02_runningbear'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'mouseMask',
    name: '03_CSS效果：鼠标跟随镂空效果',
    component: () => import(/* webpackChunkName: 'mouseMask' */ '@/views/css-effect/03_mouseMask'),
    meta: {
      isShow: false
    }
  },
  {
    path: base + 'clothingSwitching',
    name: '04_CSS效果：服装切换效果',
    component: () => import(/* webpackChunkName: 'clothingSwitching' */ '@/views/css-effect/04_clothingSwitching'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'textAdapterBgc',
    name: '05_CSS效果：文字适配背景色',
    component: () => import(/* webpackChunkName: 'textAdapterBgc' */ '@/views/css-effect/05_textAdapterBgc'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'waterWave',
    name: '06_CSS效果：水纹波浪效果',
    component: () => import(/* webpackChunkName: 'waterWave' */ '@/views/css-effect/06_waterWave'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'gradientDemo',
    name: '07_CSS效果：渐变色常规效果',
    component: () => import(/* webpackChunkName: 'gradientDemo' */ '@/views/css-effect/07_gradientDemo'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'gradientBorder',
    name: '08_CSS效果：边框渐变色效果',
    component: () => import(/* webpackChunkName: 'gradientBorder' */ '@/views/css-effect/08_gradientBorder'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'imgHidden',
    name: '09_CSS效果：图片渐隐消失效果',
    component: () => import(/* webpackChunkName: 'imgHidden' */ '@/views/css-effect/09_imgHidden'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'textHidden',
    name: '10_CSS效果：文字渐隐消失效果',
    component: () => import(/* webpackChunkName: 'textHidden' */ '@/views/css-effect/10_textHidden'),
    meta: {
      isShow: true
    }
  }
]
