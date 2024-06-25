/*
 * @Description: table或list范围内的元素拖拽
 * @Autor: mashize
 * @Date: 2023-02-25 20:46:25
 * @LastEditors: mashize
 * @LastEditTime: 2023-02-26 10:44:08
 */
import Sortable from 'sortablejs'

export function dragtable (el, binding) {
  const { data: listdata, fn: emitHandle } = binding.value
  const rowSortOld = []
  let rowSortNew = []
  // 备份初始化list数据
  const initListData = JSON.parse(JSON.stringify(listdata))
  // 初始化顺序
  initListData.map(item => {
    rowSortOld.push(item.sortId)
  })

  let tableEle = el.querySelector('.el-table__body-wrapper tbody')
  // const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]// 获取 tbody 节点
  Sortable.create(tableEle, { // 初始化顺便设置配置
    setData: function (dataTransfer, dragEl) { // 避免 Firefox 的bug
      dataTransfer.setData('Text', dragEl.textContent)
    },
    // 拖动结束的回调
    onEnd: ({ oldIndex, newIndex }) => {
      // 更新拖拽数据
      const currRow = listdata.splice(oldIndex, 1)[0]
      listdata.splice(newIndex, 0, currRow)
      // 保存列表拖拽后顺序
      rowSortNew = [] // 每次列表拖拽前，清空上次数据
      listdata.map(item => { // 多个对象需遍历赋值
        rowSortNew.push(item.sortId)
      })
      // 控制台输出对比前后顺序
      console.log('列表拖拽前顺序id数组：' + rowSortOld)
      console.log('列表拖拽后顺序id数组：' + rowSortNew)
      console.log('原始列表数组：', initListData)
      const obj = {
        initListData, // 初始化的listData
        rowSortOld, // 初始化顺序
        rowSortNew // 拖拽后顺序
      }
      // 发出事件处理
      emitHandle && emitHandle(obj)
    }
  })
}

export function draglist (el, binding) {
  const { this: _this, opts } = binding.value
  const { data: listdata, fn: emitHandle, sort: sortId } = opts

  Sortable.create(el, { // 初始化顺便设置配置
    setData: function (dataTransfer, dragEl) { // 避免 Firefox 的bug
      dataTransfer.setData('Text', dragEl.textContent)
    },
    // 拖动结束的回调
    onEnd: function ({ oldIndex, newIndex }) {
      // 备份初始化数据和顺序
      const rowSortOld = []
      let rowSortNew = []
      const initListData = JSON.parse(JSON.stringify(_this[listdata]))
      initListData.map(item => {
        rowSortOld.push(item[sortId])
      })
      // 更新拖拽数据
      const currRow = _this[listdata].splice(oldIndex, 1)[0]
      _this[listdata].splice(newIndex, 0, currRow)
      // 保存列表拖拽后顺序
      rowSortNew = [] // 每次列表拖拽前，清空上次数据
      _this[listdata].map(item => { // 多个对象需遍历赋值
        rowSortNew.push(item[sortId])
        // newListData.push(item)
      })
      // 获取新的列表
      let newListData = _this[listdata].slice(0)
      // 控制台输出对比前后顺序
      console.log('列表拖拽前顺序id数组：' + rowSortOld)
      console.log('列表拖拽后顺序id数组：' + rowSortNew)
      console.log('原始列表数组：', initListData)
      console.log('新的列表数组：', newListData)
      const obj = {
        newListData, // 新的list数据
        initListData, // 初始化的listData
        rowSortOld, // 初始化顺序
        rowSortNew // 拖拽后顺序
      }
      // 发出事件处理
      emitHandle && _this[emitHandle](obj)
    }
  })
}
