const partial = (fn, ...args) => (...arg) => fn(...args, ...arg)

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
function add(a, b, c) {
  return a + b + c;
}

const partialAdd = partial(add, 1)
console.log(partialAdd(2, 3))
