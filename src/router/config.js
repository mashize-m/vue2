import { menuList } from '@/config/menuConfig'
const routes = [
  {
    path: '/',
    redirect: '/views'
  },
  {
    path: '/views',
    name: 'views',
    component: () => import(/* webpackChunkName: 'views' */ '@/layout/AdminLayout.vue'),
    redirect: menuList[0].children[0].path,
    children: [
      ...require('@/config/funcConfig').default,
      ...require('@/config/cssConfig').default,
      ...require('@/config/effectConfig').default,
      ...require('@/config/testConfig').default,
      ...require('@/config/expandConfig').default,
      ...require('@/config/utilsConfig').default,
      ...require('@/config/navigationConfig').default
    ]
  }
]

export default routes
