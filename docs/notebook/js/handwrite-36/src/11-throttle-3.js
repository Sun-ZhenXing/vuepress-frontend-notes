/**
 * @param {Function} func
 * @param {number} wait
 * @param {{leading?: boolean, trailing?: boolean}?} options
 */
function throttle(func, wait, options) {
  var timeout, context, args;
  var previous = 0;
  if (!options)
    options = {};
  if (!options.leading)
    options.leading = true

  var later = function () {
    previous = !options.leading ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout)
      context = args = null;
  };

  var throttled = function () {
    var now = new Date().getTime();
    if (!previous && !options.leading)
      previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
}
