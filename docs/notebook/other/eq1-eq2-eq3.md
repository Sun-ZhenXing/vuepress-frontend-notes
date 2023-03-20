# JS 等号特性

首先是一个智障才会提出的问题：让 `a == 1 && a == 2 && a == 3` 成立。

使用 `toString` 机制：

```js
const a = {
  _a: 0,
  toString() {
    return ++this._a;
  }
};
```

使用 `valueOf`：

```js
const a = {
  value: 0,
  valueOf() {
    return ++this.value;
  }
};
```

利用数组的 `shift`：

```js
const a = [1, 2, 3];
a.toString = a.shift;
```

其中第二行也可以换成 `a.join = a.shift;`，这是利用了数组的比较时隐式调用了 `join` 方法来转换为字符串。

`with` 法：

```js
let i = 0;

with ({
  get a() {
    return ++i;
  }
}) {
  if (a == 1 && a == 2 && a == 3)
    console.log('wohoo');
}
```

使用 `defineProperties` 可以在 `===` 判断时使用：

```js
Object.defineProperties(globalThis, {
  _a: {
    value: 0,
    writable: true,
  },
  a: {
    get() {
      return ++this._a;
    }
  }
});
```

或者 `defineProperty` 也可以：

```js
let _a = 0;
Object.defineProperty(globalThis, 'a', {
  get() {
    return ++_a;
  }
});
```

`Proxy` 版本：

```js
const a = new Proxy({ v: 1 }, {
  get(target, property) {
    if (property === Symbol.toPrimitive) {
      return () => target.v++;
    }
  }
});
```

`Symbol.toPrimitive` 版本：

```js
let i = 0;
const a = { [Symbol.toPrimitive]: () => ++i };
```

::: details 其他智障版本

全角空格版本：

```js
const aﾠ = 1;
const a = 2;
const ﾠa = 3;

if (aﾠ == 1 && a == 2 && ﾠa == 3) {
  console.log('Hello wrold!')
}
```

生成器版本：

```js
const n = (function* () {
  let i = 0;
  while (true) yield ++i;
})()

Object.defineProperty(globalThis, 'a', {
  get: () => n.next().value
})
```

拒绝采样法：

```js
with ({
  get a() {
    return Math.floor(Math.random() * 4);
  }
}) {
  for (var i = 0; i < 1000; i++) {
    if (a == 1 && a == 2 && a == 3) {
      console.log('after ' + (i + 1) + ' trials, it becomes true finally!!!');
      break;
    }
  }
}
```

隐藏字符法：

```js
if‌= () => !0;
var a = 9;

if‌(a == 1 && a == 2 && a == 3)
{
  console.log('Hello world!');
}
```

`__defineGetter__` 法：

```js
globalThis.__defineGetter__('a', function () {
  if (typeof i !== 'number') {
    // define i in the global namespace so that it's not lost after this function runs
    i = 0;
  }
  return ++i;
});

if (a == 1 && a == 2 && a == 3) {
  console.log('Oh dear, what have we done?');
}
```

:::
