/*
 * @Description: 节流（settimeout）
 * @Autor: mashize
 * @Date: 2023-02-25 21:30:32
 * @LastEditors: mashize
 * @LastEditTime: 2023-02-26 00:41:38
 */

export const throttle = {
  inserted: function (el, binding) {
    const type = binding.arg || 'click'
    let throttleFn
    let delay = 500
    if (typeof binding.value === 'function') {
      throttleFn = binding.value
    } else if (typeof binding.value === 'object') {
      throttleFn = binding.value.fn
      delay = binding.value.delay || delay
    }
    let canUse = true
    el.addEventListener(type, (event) => {
      // 如果为true，就触发方法，否则就不能触发
      if (canUse) {
        throttleFn()
        // 触发技能后，关闭开关
        canUse = false
        // 在3秒后打开开关
        setTimeout(() => { canUse = true }, delay)
      }
    })
  }
}
