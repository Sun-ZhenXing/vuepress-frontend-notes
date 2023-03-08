/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let previous = 0;
  return function () {
    let now = new Date().getTime();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}
