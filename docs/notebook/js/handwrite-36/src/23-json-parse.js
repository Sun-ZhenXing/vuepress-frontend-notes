// 复习json.parse
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
JSON.parse(1);                 // 1 
JSON.parse([1, 2, 3]);         // SynatxError 不符合JSON规范


JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log("k", k, typeof k); // 输出当前的属性名
        console.log("v", v, typeof v)
        return v;       // 返回原始属性值，相当于没有传递 reviver 参数。
    });
// k 1 string
// v 1 number
// k 2 string
// v 2 number
// k 4 string
// v 4 number
// k 6 string
// v 6 number
// k 5 string
// v {6: 6} object
// k 3 string
// v {4: 4, 5: {…}} object
// k  string
// v {1: 1, 2: 2, 3: {…}} object

// eval

console.log(eval('2+2')) //4
let json = '{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}'
eval('(' + json + ')')

// obj参数就是string类型的值
function looseJsonParse(obj) {
    return Function('return (' + obj + ')')();
}