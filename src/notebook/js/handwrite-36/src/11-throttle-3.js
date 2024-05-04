/* eslint-disable ts/no-this-alias */
/* eslint-disable prefer-rest-params */
/**
 * @param {Function} func
 * @param {number} wait
 * @param {{leading?: boolean, trailing?: boolean}?} options
 */
export function throttle(func, wait, options) {
  let timeout, context, args
  let previous = 0
  if (!options)
    options = {}
  if (!options.leading)
    options.leading = true

  const later = function () {
    previous = !options.leading ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout)
      context = args = null
  }

  const throttled = function () {
    const now = new Date().getTime()
    if (!previous && !options.leading)
      previous = now
    const remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout)
        context = args = null
    }
    else if (!timeout && options.trailing) {
      timeout = setTimeout(later, remaining)
    }
  }

  throttled.cancel = function () {
    clearTimeout(timeout)
    previous = 0
    timeout = null
  }
  return throttled
}
