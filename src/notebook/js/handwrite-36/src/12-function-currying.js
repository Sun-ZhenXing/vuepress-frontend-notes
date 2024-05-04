function curry(fn) {
  const judge = (...args) => args.length === fn.length ? fn(...args) : (...arg) => judge(...args, ...arg)
  return judge
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
function add(a, b, c) {
  return a + b + c
}

console.log(add(1, 2, 3))
const addCurry = curry(add)
console.log(addCurry(1)(2)(3))
console.log(addCurry(3, 4)(5))
