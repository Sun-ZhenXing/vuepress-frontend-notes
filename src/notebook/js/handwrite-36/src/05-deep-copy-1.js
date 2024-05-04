/* eslint-disable no-prototype-builtins */
export function shallowCopy(obj) {
  if (typeof obj !== 'object')
    return

  const newObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key))
      newObj[key] = obj[key]
  }
  return newObj
}

export function deepClone(obj) {
  if (typeof obj !== 'object')
    return
  const newObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key))
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }
  return newObj
}
