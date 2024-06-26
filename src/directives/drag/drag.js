/*
 * @Description: div的拖拽，限制范围，以及xy轴方向
 * @Autor: mashize
 * @Date: 2023-02-25 20:51:54
 * @LastEditors: mashize
 * @LastEditTime: 2023-02-25 21:00:06
 */

// 获取元素的相关CSS
function getStyle (el, attr) {
  return el.currentStyle ? el.currentStyle[attr] : window.getComputedStyle(el, false)[attr]
}
// 返回滚动条的宽度, 没有则返回0
function getScrollWidth () {
  let noScroll; let scroll; let oDiv = document.createElement('DIV')
  oDiv.style.cssText = 'position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;'
  noScroll = document.body.appendChild(oDiv).clientWidth
  oDiv.style.overflowY = 'scroll'
  scroll = oDiv.clientWidth
  document.body.removeChild(oDiv)
  let isExsit = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
  return isExsit ? noScroll - scroll : 0
}

export function drag (el, binding) {
  // el代表使用该指令的元素
  el.onmousedown = function (e) {
    // 设置目标元素基础属性
    el.style.cursor = 'move'
    el.style.position = 'fixed'
    // 获取容器宽高
    const containerId = binding.arg || null
    let containerWidth = window.innerWidth - getScrollWidth()
    let containerHeight = window.innerHeight
    // 存在父级容器
    if (containerId) {
      const containerEle = document.getElementById(containerId)
      let { width, height } = containerEle.getBoundingClientRect()
      containerWidth = width
      containerHeight = height
      if (!['fixed', 'absolute', 'relative'].includes(getStyle(containerEle, 'position'))) {
        containerEle.style.position = 'relative'
      }
      el.style.position = 'absolute'
    }

    // 鼠标在目标元素上按下
    el.addEventListener('mousedown', (e) => {
      let { width, height } = el.getBoundingClientRect()
      // 当前目标元素的left与top
      const left = el.offsetLeft
      const top = el.offsetTop
      // 保存按下的鼠标的X与Y
      const mouseX = e.clientX
      const mouseY = e.clientY
      // 计算边界值
      const leftLimit = left
      const rightLimit = containerWidth - left - width
      const topLimit = top
      const bottomLimit = containerHeight - top - height

      // 监听鼠标移动
      document.onmousemove = (e) => {
        // 鼠标移动的距离
        let disX = e.clientX - mouseX
        let disY = e.clientY - mouseY
        console.log(binding, '----binding')
        console.log(binding.modifiers, '----binding.modifiers')
        console.log(binding.modifiers.x, '----binding.modifiers.x')
        console.log(binding.modifiers.y, '----binding.modifiers.y')
        // 修饰符.x
        if (binding.modifiers.x) {
          // 左右边界
          if (disX < 0 && disX <= -leftLimit) {
            el.style.left = (left - leftLimit) + 'px'
          } else if (disX > 0 && disX >= rightLimit) {
            el.style.left = (left + rightLimit) + 'px'
          } else {
            el.style.left = (left + disX) + 'px'
          }
        }
        // 修饰符.y
        if (binding.modifiers.y) {
          console.log(disY, '----disY')
          console.log(topLimit, '----topLimit')
          console.log(bottomLimit, '----bottomLimit')

          // 上下边界
          if (disY < 0 && disY <= -topLimit) {
            el.style.top = (top - topLimit) + 'px'
          } else if (disY > 0 && disY >= bottomLimit) {
            el.style.top = (top + bottomLimit) + 'px'
          } else {
            el.style.top = (top + disY) + 'px'
          }
        }
        // 默认：无修饰符x和y
        if (!binding.modifiers.x && !binding.modifiers.y) {
          console.log(disY, '----disY')
          console.log(disX, '----disX')
          console.log(topLimit, '----topLimit')
          console.log(bottomLimit, '----bottomLimit')
          console.log(leftLimit, '----leftLimit')
          console.log(rightLimit, '----rightLimit')
          // 左右边界
          if (disX < 0 && disX <= -leftLimit) {
            el.style.left = (left - leftLimit) + 'px'
          } else if (disX > 0 && disX >= rightLimit) {
            el.style.left = (left + rightLimit) + 'px'
          } else {
            el.style.left = (left + disX) + 'px'
          }
          // 上下边界
          if (disY < 0 && disY <= -topLimit) {
            el.style.top = (top - topLimit) + 'px'
          } else if (disY > 0 && disY >= bottomLimit) {
            el.style.top = (top + bottomLimit) + 'px'
          } else {
            el.style.top = (top + disY) + 'px'
          }
        }
        // // 左右边界
        // if (disX < 0 && disX <= -leftLimit) {
        //   el.style.left = (left - leftLimit) + 'px'
        // } else if (disX > 0 && disX >= rightLimit) {
        //   el.style.left = (left + rightLimit) + 'px'
        // } else {
        //   el.style.left = (left + disX) + 'px'
        // }
        // // 上下边界
        // if (disY < 0 && disY <= -topLimit) {
        //   el.style.top = (top - topLimit) + 'px'
        // } else if (disY > 0 && disY >= bottomLimit) {
        //   el.style.top = (top + bottomLimit) + 'px'
        // } else {
        //   el.style.top = (top + disY) + 'px'
        // }
        return false
      }

      // 监听鼠标抬起
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    })
  }
}

// x.y轴的div拖拽--基础版（没有限制边界）
// export function drag (el, { value, modifiers }) {
//   // el代表使用该指令的元素
//   el.onmousedown = function (e) {
//   // console.log("s");
//     var disx = e.offsetX
//     var disy = e.offsetY
//     // 阻止浏览器的默认事件
//     e.preventDefault()
//     document.onmousemove = function (e) {
//       var x = e.clientX - disx
//       var y = e.clientY - disy
//       // 如果表达式的结果是false,就不拖拽
//       if (!value) {
//         return
//       }
//       // 修饰符
//       if (modifiers.x) {
//         el.style.left = x + 'px'
//       }
//       // 修饰符
//       if (modifiers.y) {
//         el.style.top = y + 'px'
//       }
//       if (!modifiers.x && !modifiers.y && value) {
//         el.style.left = x + 'px'
//         el.style.top = y + 'px'
//       }
//     }
//     document.onmouseup = function () {
//       document.onmousemove = null
//       document.onmouseup = null
//     }
//   }
// }
