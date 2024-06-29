const base = '/views/func/'
export default [
  {
    path: base + 'debounceAndthrottel',
    name: '01_指令：节流和防抖',
    component: () => import(/* webpackChunkName: 'debounce&throttel' */ '@/views/func/01_debounceAndthrottel')
  },
  {
    path: base + 'docxtemplater',
    name: '02_docx模板导出&预览',
    component: () => import(/* webpackChunkName: 'docxtemplater' */ '@/views/func/02_docxtemplater')
  },
  {
    path: base + 'dragDiv',
    name: '03_拖拽移动div',
    component: () => import(/* webpackChunkName: 'dragDiv' */ '@/views/func/03_dragDiv')
  },
  {
    path: base + 'dragTableOrListByCpn',
    name: '04_通过组件拖拽table或list',
    component: () =>
      import(/* webpackChunkName: 'dragTableOrListByCpn' */ '@/views/func/04_dragTableOrListByCpn')
  },
  {
    path: base + 'editTableCell',
    name: '05_可编辑的table单元格',
    component: () => import(/* webpackChunkName: 'editTableCell' */ '@/views/func/05_editTableCell')
  },
  {
    path: base + 'foldOpenByCpn',
    name: '06_通过npm包实现折叠展开',
    component: () => import(/* webpackChunkName: 'foldOpenByCpn' */ '@/views/func/06_foldOpenByCpn')
  },
  {
    path: base + 'foldOpenByCss',
    name: '07_通过css实现折叠展开',
    component: () => import(/* webpackChunkName: 'foldOpenByCss' */ '@/views/func/07_foldOpenByCss')
  },
  {
    path: base + 'html2Canvas',
    name: '08_html的DOM元素转canvas/img',
    component: () => import(/* webpackChunkName: 'html2Canvas' */ '@/views/func/08_html2Canvas')
  },
  {
    path: base + 'qrcode',
    name: '09_生成二维码',
    component: () => import(/* webpackChunkName: 'qrcode' */ '@/views/func/09_qrcode')
  },
  {
    path: base + 'seamlessScroll',
    name: '10_无缝滚动',
    component: () => import(/* webpackChunkName: 'seamlessScroll' */ '@/views/func/10_seamlessScroll')
  },
  {
    path: base + 'splitPanes',
    name: '11_可移动的分割布局',
    component: () => import(/* webpackChunkName: 'splitPanes' */ '@/views/func/11_splitPanes')
  },
  {
    path: base + 'textareaTip',
    name: '12_输入框的提示补全',
    component: () => import(/* webpackChunkName: 'textareaTip' */ '@/views/func/12_textareaTip')
  },
  {
    path: base + 'treeLine',
    name: '13_自定义tree结构的连接线',
    component: () => import(/* webpackChunkName: 'treeLine' */ '@/views/func/13_treeLine')
  },
  {
    path: base + 'viewOfd',
    name: '14_ofd文件预览&查看MD文件',
    component: () => import(/* webpackChunkName: 'viewOfd' */ '@/views/func/14_viewOfd')
  },
  {
    path: base + 'customTable',
    name: '15_自定义复杂表格功能',
    component: () => import(/* webpackChunkName: 'customTable' */ '@/views/func/15_customTable')
  }
]
