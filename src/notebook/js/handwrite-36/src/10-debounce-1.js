/* eslint-disable ts/no-this-alias */
/* eslint-disable prefer-rest-params */
/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

const node = document.getElementById('layout')
function getUserAction(e) {
  console.log(this, e)
  node.innerHTML = count++
};

node.onmousemove = debounce(getUserAction, 1000)
