/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  // 采用定时器
  let timer = null
  return function () {
    let conetxt = this
    let args = arguments
    if (timer) return
    timer = setTimeout(function () {
      func.call(conetxt, args)
      timer = null
    },wait)
  }
}
