import XLSX from 'xlsx'
import XLSXStyle from 'xlsx-style'

/**
 * @description 根据选择的行数据导出excel
 * @param {Array} row table选择的行数据，需二次处理，key值为标题
 * @param {String} fileName 导出的文件名称
 */
function exportExcelByRow (row, fileName) {
  const name = fileName || `user${new Date().getTime()}.xlsx`
  // // 对选择的表格数据处理：添加标题
  // let arr = this.selectionList.map((item) => {
  //   return {
  //     日期: item.date,
  //     姓名: item.name,
  //     地址: item.address,
  //   }
  // })
  // 将json数据变为sheet数据
  // json_to_sheet: 将一个由对象组成的数组转成sheet；
  let sheet = XLSX.utils.json_to_sheet(arr)
  // 新建表格
  let book = XLSX.utils.book_new()
  // 在表格中插入一个sheet
  XLSX.utils.book_append_sheet(book, sheet, 'sheet1')
  // 通过xlsx的writeFile方法将文件写入
  XLSX.writeFile(book, name)
}
/**
 * @description 根据table导出excel
 * @param {Dom} ele table的DOM元素
 * @param {String} fileName 导出的文件名称
 */
function exportExcelByTable (ele, fileName) {
  const name = fileName || `user${new Date().getTime()}.xlsx`
  // 获取dom元素（2种方式）
  // let table1 = document.querySelector("#table1");  // 原生dom
  // let table = this.$refs.tableDataRef.$el
  // table_to_sheet: 将一个table dom直接转成sheet，会自动识别colspan和rowspan并将其转成对应的单元格合并；
  let sheet = XLSX.utils.table_to_sheet(ele)
  let book = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(book, sheet, 'sheet1')
  XLSX.writeFile(book, name)
}

/**
 * @description 根据二维数组导出excel
 * @param {Array} aoa 二维数组
 * @param {Array} marge 合并单元格的数组对象
 * @param {Boolean} style xlsx单元格样式
 * @param {Boolean} cols 列宽
 */
function exportExcelByAOA (aoa, marge, style, cols, fileName) {
  let sheet = XLSX.utils.aoa_to_sheet(aoa)
  console.log(sheet, '---sheet')
  // 设置合并的单元格
  if (marge) {
    // 日照，tableData数据，垂直方向，相同的内容会合并
    // let mergeArr = getMergeArr(aoa, marge)
    // sheet['!merges'] = mergeArr
    sheet['!merges'] = marge
  }
  // 设置样式
  if (style) {
    Object.keys(sheet).forEach((item, index) => {
      if (sheet[item].t) {
        sheet[item].s = {
          // 对齐方式相关样式
          font: {
            name: '宋体'
          },
          alignment: {
            vertical: 'center', // 垂直对齐方式
            horizontal: 'left', // 水平对齐方式
            wrapText: true // 自动换行
          }
        }
      }
    })
    sheet.A2.s = {
      // 对齐方式相关样式
      font: {
        name: '宋体'
      },
      alignment: {
        vertical: 'center', // 垂直对齐方式
        horizontal: 'center', // 水平对齐方式
        wrapText: true // 自动换行
      }
    }
  }
  // 设置列宽
  // 每列的列宽
  if (cols) {
    // sheet['!cols'] = getCols(cols)
    sheet['!cols'] = cols
  }
  // 九、导出excel
  openDownloadDialog(
    sheet2blob(sheet),
    fileName || new Date().getTime() + '.xlsx' || '表名.xlsx'
  )
}
// sheet 生成blob文件
function sheet2blob (sheet, sheetName) {
  sheetName = sheetName || 'sheet1'
  let workbook = XLSX.utils.book_new()
  workbook.SheetNames.push(sheetName)
  workbook.Sheets[sheetName] = sheet
  // 生成excel的配置项
  var wopts = {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
  }
  var wbout = XLSXStyle.write(workbook, wopts)
  var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' })

  return blob
}
// 下载方法
function openDownloadDialog (url, saveName) {
  if (typeof url === 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url) // 创建blob地址
  }
  let aLink = document.createElement('a')
  aLink.href = url
  aLink.download = saveName || '' // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  let event
  if (window.MouseEvent) event = new MouseEvent('click')
  else {
    event = document.createEvent('MouseEvents')
    event.initMouseEvent(
      'click',
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    )
  }
  aLink.dispatchEvent(event)
}
// 字符串转ArrayBuffer
function s2ab (s) {
  var buf = new ArrayBuffer(s.length)
  var view = new Uint8Array(buf)
  for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}
// ------------------以下根据业务调整
// 根据 tableData 和 columnConfig 生成AOA数据
function createAOA (tableData, columnConfig) {
  const aoa = []
  const title = []
  const content = []
  columnConfig.forEach(k => {
    title.push((k.key || k.type || k.prop) && k.label)
    if (k.children) {
      k.children.forEach(elem => {
        title.push((elem.key || elem.type || elem.prop) && k.label)
      })
    }
  })
  aoa.push(title)
  tableData.forEach((m, i) => {
    const list = []
    columnConfig.forEach(n => {
      if (n.type === 'index') {
        list.push(i + 1)
      } else {
        list.push(m[n.prop || n.key])
      }
      if (n.children) { // 判断是不是嵌套的
        n.children.forEach(elem => {
          list.push(m[elem.prop || elem.key])
        })
      }
    })
    aoa.push(list)
  })
  console.log(aoa)
  return aoa
}
// 设置列宽
function getCols (cols) {
  let list = []
  // 每列的列宽
  cols.forEach((item, index) => {
    if (index === 0 || index === 1) {
      list.push({
        wpx: 250 // 单元格列宽
      })
    } else {
      list.push({
        wpx: 250
      })
    }
  })
  // list = [
  //   {
  //     wpx: 120, // 单元格列宽
  //   },
  //   {
  //     wpx: 150,
  //   },
  //   {
  //     wpx: 100,
  //   },
  //   {
  //     wpx: 100,
  //   },
  //   {
  //     wpx: 100,
  //   },
  // ]
  return list
}
// 获取合并单元格规则
function getMergeArr (aoa, marge) {
  let mergeArr = []
  let { indices } = unipFunc(aoa, 0)
  console.log(indices, '---indices')
  marge.forEach((item) => {
    indices.forEach((indexArr) => {
      if (indexArr.length > 1) {
        mergeArr.push({
          s: { r: indexArr[0], c: item.col },
          e: { r: indexArr[indexArr.length - 1], c: item.col }
        })
      }
    })
  })
  mergeArr.unshift({
    s: { r: 1, c: 0 },
    e: { r: 1, c: 12 }
  })
  return mergeArr
}
// 处理数据重复值
function unipFunc (list, objKey) {
  let key = {} // 存储的 key 是type的值，value是在indeces中对应数组的下标
  let indices = [] // 数组中每一个值是一个数组，数组中的每一个元素是原数组中相同type的下标
  list.map((item, index) => {
    // 根据对应字段 分类（type）
    let itemKey = item[objKey]
    let _index = key[itemKey]
    if (_index !== undefined) {
      indices[_index].push(index)
    } else {
      key[itemKey] = indices.length
      indices.push([index])
    }
  })
  // 归类结果
  let result = []
  let resultIndex = []
  indices.map((item) => {
    item.map((index) => {
      if (item.length > 1) {
        result.push(list[index])
        resultIndex.push(index)
      }
    })
  })
  return { result, resultIndex, indices }
}

export { exportExcelByAOA, exportExcelByRow, exportExcelByTable, createAOA }
