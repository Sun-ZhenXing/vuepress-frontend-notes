function p() {
  return new Promise((resolve) => {
    const p1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve(5)
      })
      resolve(2)
    })
    p1.then((res) => {
      console.log(res)
    })
    console.log(3)
    resolve(4)
  })
}

p().then((res) => {
  console.log(res)
})
console.log(1)
