/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait);
  }
}

var node = document.getElementById('layout');
function getUserAction(e) {
  console.log(this, e);
  node.innerHTML = count++;
};

node.onmousemove = debounce(getUserAction, 1000);
