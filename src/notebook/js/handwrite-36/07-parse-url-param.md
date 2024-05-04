# 7. 解析 URL 参数

解析 URL 中的参数列表。

@[code{4-24} js{12}](./src/07-parse-url-param.js)

修改了原文的代码，转换为更简单的移入操作，并全部使用 `const` 定义变量。

```diff
+ paramsObj[key].push(val);
- paramsObj[key] = [].concat(paramsObj[key], val);
```
