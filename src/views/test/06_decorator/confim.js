// decorator.js
// 假设项目中已经安装了 element-ui
import { MessageBox, Message } from 'element-ui'
/**
 * 确认框
 * @param {String} title - 标题
 * @param {String} content - 内容
 * @param {String} confirmButtonText - 确认按钮名称
 * @param {Function} callback - 确认按钮名称
 * @returns
   **/
export function confirm (title, content, confirmButtonText = '确定') {
  return function (target, name, descriptor) {
    const originValue = descriptor.value
    descriptor.value = function (...args) {
      console.log('...args:', ...args)

      MessageBox.confirm(content, title, {
        dangerouslyUseHTMLString: true,
        distinguishCancelAndClose: true,
        confirmButtonText: confirmButtonText
      }).then(() => {
        originValue.call(this, ...args)
        console.log('this:', this)
      }).catch(error => {
        if (error === 'close' || error === 'cancel') {
          Message.info('用户取消操作')
        } else {
          Message.info(error)
        }
      })
    }
  }
}
