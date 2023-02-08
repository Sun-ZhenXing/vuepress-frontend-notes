/**
 * @param {Array} arr 
 */
function unique(arr) {
    let res = arr.filter(function (item, index, array) {
        return array.indexOf(item) === index
    })
    return res
}

/**
 * @param {Array} arr 
 */
const unique = arr => [...new Set(arr)]
