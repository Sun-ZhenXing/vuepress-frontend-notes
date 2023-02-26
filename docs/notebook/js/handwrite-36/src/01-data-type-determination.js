function typeOf(obj) {
  const res = Object.prototype.toString.call(obj).split(' ')[1];
  return res.substring(0, res.length - 1).toLowerCase();
}

function testTypeOf() {
  const tests = {
    'number': 1,
    'string': '1',
    'boolean': true,
    'undefined': undefined,
    'null': null,
    'symbol': Symbol(),
    'array': [],
    'object': {},
    'function': function () { },
    'date': new Date(),
    'regexp': new RegExp(),
    'error': new Error('just for test, not a real error'),
    'map': new Map(),
    'set': new Set(),
  };
  for (const key in tests) {
    console.log(tests[key], '->', key);
    console.assert(typeOf(tests[key]) === key);
  }
}

testTypeOf();
