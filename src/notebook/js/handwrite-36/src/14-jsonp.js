/* eslint-disable no-prototype-builtins */
export function jsonp({ callbackName, params, url }) {
  const generateUrl = () => {
    let dataSrc = ''
    for (const key in params) {
      if (params.hasOwnProperty(key))
        dataSrc += `${key}=${params[key]}&`
    }
    dataSrc += `callback=${callbackName}`
    return `${url}?${dataSrc}`
  }
  return new Promise((resolve) => {
    const scriptEle = document.createElement('script')
    scriptEle.src = generateUrl()
    document.body.appendChild(scriptEle)
    window[callbackName] = (data) => {
      resolve(data)
      document.removeChild(scriptEle)
    }
  })
}
