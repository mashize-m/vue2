/*
 * @Description: 防抖（settimeout）
 * @Autor: mashize
 * @Date: 2023-02-25 21:36:22
 * @LastEditors: mashize
 * @LastEditTime: 2023-02-26 00:32:32
 */

export const debounce = {
  inserted: function (el, binding) {
    const type = binding.arg || 'click'
    let debounceFn
    let delay = 500
    if (typeof binding.value === 'function') {
      debounceFn = binding.value
    } else if (typeof binding.value === 'object') {
      debounceFn = binding.value.fn
      delay = binding.value.delay || delay
    }
    let timer
    el.addEventListener(type, () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        debounceFn()
      }, delay)
    })
  }
}
