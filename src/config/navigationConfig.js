const base = '/views/navigation/'
export default [
  {
    path: base + 'developer',
    name: '开发 Developer',
    component: () => import(/* webpackChunkName: 'developer' */ '@/views/navigation/developer')
  },
  {
    path: base + 'utils',
    name: '工具 Utils',
    component: () => import(/* webpackChunkName: 'utils' */ '@/views/navigation/utils')
  }
]
