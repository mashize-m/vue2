const base = '/views/css-base/'
export default [
  {
    path: base + 'flex',
    name: '01_flex布局（一维）',
    component: () => import(/* webpackChunkName: 'flex' */ '@/views/css-base/01_flex'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'grid',
    name: '02_grid布局（二维）',
    component: () => import(/* webpackChunkName: 'grid' */ '@/views/css-base/02_grid'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'position',
    name: '03_position定位',
    component: () => import(/* webpackChunkName: 'position' */ '@/views/css-base/03_position'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'text',
    name: '04_文本样式',
    component: () => import(/* webpackChunkName: 'text' */ '@/views/css-base/04_text'),
    meta: {
      isShow: true
    }
  },

  {
    path: base + 'shadow',
    name: '05_盒子阴影样式',
    component: () => import(/* webpackChunkName: 'shadow' */ '@/views/css-base/05_shadow'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'background',
    name: '06_背景色',
    component: () => import(/* webpackChunkName: 'background' */ '@/views/css-base/06_background'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'margin',
    name: '07_margin塌陷',
    component: () => import(/* webpackChunkName: 'margin' */ '@/views/css-base/07_margin'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'scrollbar',
    name: '08_滚动条的样式处理',
    component: () => import(/* webpackChunkName: 'scrollbar' */ '@/views/css-base/08_scrollbar'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'transition',
    name: '09_css动画：transition过渡动画',
    component: () => import(/* webpackChunkName: 'transition' */ '@/views/css-base/09_transition'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'transform',
    name: '10_css动画：transform转变动画',
    component: () => import(/* webpackChunkName: 'transform' */ '@/views/css-base/10_transform'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'animation',
    name: '11_css动画：animation自定义动画。',
    component: () => import(/* webpackChunkName: 'animation' */ '@/views/css-base/11_animation'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'mask',
    name: '12_遮罩：mask',
    component: () => import(/* webpackChunkName: 'mask' */ '@/views/css-base/12_mask'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'mix-blend-mode',
    name: '13_混合模式：mix-blend-mode',
    component: () => import(/* webpackChunkName: 'mix-blend-mode' */ '@/views/css-base/13_mix-blend-mode'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'gradient',
    name: '14_渐变色：gradient',
    component: () => import(/* webpackChunkName: 'gradient' */ '@/views/css-base/14_gradient'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'filter',
    name: '15_CSS滤镜：filter',
    component: () => import(/* webpackChunkName: 'filter' */ '@/views/css-base/15_filter'),
    meta: {
      isShow: true
    }
  },
  {
    path: base + 'cssProperty',
    name: '16_cssProperty属性',
    component: () => import(/* webpackChunkName: 'cssProperty' */ '@/views/css-base/16_cssProperty'),
    meta: {
      isShow: true
    }
  }
]
