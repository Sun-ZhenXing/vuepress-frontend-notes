function typeOf(obj) {
  const res = Object.prototype.toString.call(obj).split(' ')[1]
  return res.substring(0, res.length - 1).toLowerCase()
}

function testTypeOf() {
  const tests = {
    array: [],
    boolean: true,
    date: new Date(),
    error: new Error('just for test, not a real error'),
    function() { },
    map: new Map(),
    null: null,
    number: 1,
    object: {},
    regexp: new RegExp(),
    set: new Set(),
    string: '1',
    symbol: Symbol(),
    undefined,
  }
  for (const key in tests) {
    console.log(tests[key], '->', key)
    console.assert(typeOf(tests[key]) === key)
  }
}

testTypeOf()
