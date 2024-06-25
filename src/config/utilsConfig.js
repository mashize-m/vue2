const base = '/views/utils/'
export default [
  {
    path: base + 'judgePCorMobile',
    name: '判断页面是pc/mobile',
    component: () => import(/* webpackChunkName: 'judgePCorMobile' */ '@/views/utils/judgePCorMobile')
  }
]
