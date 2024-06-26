/* eslint-disable prefer-rest-params */
/* eslint-disable ts/no-this-alias */
/**
 * @param {Function} func
 * @param {number} wait
 */
export function throttle(func, wait) {
  let previous = 0
  return function () {
    const now = new Date().getTime()
    const context = this
    const args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}
