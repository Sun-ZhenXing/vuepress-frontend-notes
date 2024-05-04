const placeholder = Symbol('placeholder')

function partial(fn, ...args) {
  return (...arg) => {
    let curr = 0
    return fn(...args.map(val => (val === placeholder) ? arg[curr++] : val), ...arg.slice(curr))
  }
}

function add(a, b, c) {
  return a + b + c
}

const partialAdd = partial(add, 1)
const partialAdd2 = partial(add, 1, placeholder, 3)
console.log(partialAdd(2, 3))
console.log(partialAdd2(2))
