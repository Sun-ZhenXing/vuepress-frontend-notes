/**
 * @param {any[]} arr
 */
function flatten(arr) {
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

/**
 * @param {any[]} arr
 */
function flatten_es6(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

/**
 * @param {any[]} arr
 */
function my_flatten(arr) {
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? my_flatten(cur) : cur), []);
}

function test() {
  const arr = [1, [2, [3, 4], 5], 6];
  console.log(flatten(arr));
  console.log(flatten_es6(arr));
  console.log(my_flatten(arr));
}

test();
