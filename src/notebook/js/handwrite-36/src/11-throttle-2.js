/* eslint-disable ts/no-this-alias */
/* eslint-disable prefer-rest-params */
/**
 * @param {Function} func
 * @param {number} wait
 */
export function throttle(func, wait) {
  // 采用定时器
  let timer = null
  return function () {
    const conetxt = this
    const args = arguments
    if (timer)
      return
    timer = setTimeout(() => {
      func.call(conetxt, args)
      timer = null
    }, wait)
  }
}
