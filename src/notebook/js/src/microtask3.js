const resolvePromise = new Promise((resolve) => {
  const resolvedPromise = Promise.resolve()
  // resolve(resolvedPromise) 相当于下面的代码
  // Promise.resolve().then(() => resolvedPromise.then(resolve))
  resolve(resolvedPromise)
})

resolvePromise.then(() => {
  console.log('resolvePromise resolved')
})

const resolvedPromiseThen = Promise.resolve().then(() => {
  console.log('promise1')
})

console.log('sync')

resolvedPromiseThen.then(() => {
  console.log('promise2')
}).then(() => {
  console.log('promise3')
})

console.log('end')
