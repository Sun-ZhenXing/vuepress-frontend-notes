function app() {
  console.log('0')
  setTimeout(() => {
    console.log('1-2')
    Promise.resolve().then(() => {
      console.log('2-1')
    })
  })
  console.log('1')
  Promise.resolve().then(() => {
    console.log('1-1')
    setTimeout(() => {
      console.log('2-2')
    })
  })
  console.log('2')
}
app()
