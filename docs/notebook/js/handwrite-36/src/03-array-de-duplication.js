/**
 * @param {Array} arr 
 */
function unique(arr) {
  var res = arr.filter(function (item, index, array) {
    return array.indexOf(item) === index
  });
  return res;
}

/**
 * @param {Array} arr 
 */
const unique_es6 = arr => [...new Set(arr)];

/**
 * @param {any[]} arr
 */
function unique_set(arr) {
  const set = new Set(arr);
  return Array.from(set);
}

/**
 * @param {any[]} arr
 */
function unique_with_order(arr) {
  const set = new Set();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
      res.push(arr[i]);
    }
  }
  return res;
}

function test() {
  const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
  console.log(unique(arr));
  console.log(unique_es6(arr));
  console.log(unique_set(arr));
  console.log(unique_with_order(arr));
}

test();
