---
title: 23-实现 JSON.parse
description: 23-实现 JSON.parse
---

# 23. 实现 JSON.parse

## Json.parse回顾
定义：用于将json字符串转化为json类型
`JSON.parse(text,reviver)`
+ text:字符串类型  
  text一定要满足JSON格式，否则会报`SyntaxError`  
  具体的可以参考：[JSON MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)  
  @[code{2-8} js](./src/23-json-parse.js)
+ reviver:对text进一步操作  
  接受两个参数key：string，value：number
  @[code{11-29} js](./src/23-json-parse.js)

## eval实现
定义：将字符串当作js代码来运行，如果不是String类型，那么直接返回
@[code{35-36} js](./src/23-json-parse.js)
缺点：
+ 不安全：容易被篡改str内容  
  如果str是可执行的js，就会触发XSS攻击，当然你也可以进行验证JSON
+ 速度慢：这个方法不能被JS引擎优化，需要借助JS解释器
## new Function实现
每一个js函数都是一个`Function`对象，运行时他们只能访问全局变量或者自己的局部变量
@[code{38-41} js](./src/23-json-parse.js)