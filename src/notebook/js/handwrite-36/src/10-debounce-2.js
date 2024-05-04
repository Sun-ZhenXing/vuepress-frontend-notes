function debounce(func, wait, immediate) {
  let timeout, result
  const debounced = function () {
    const context = this
    const args = arguments

    if (timeout)
      clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow)
        result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
    return result
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
