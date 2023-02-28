---
title: 24-实现Promise
description: 24-实现Promise
---

# 24. Promise

[[TOC]]

## 不考虑异步情况的Promise

@[code{2-39} js](./src/24-promise.js)

## 考虑异步情况的Promise

这边我们按照SetTimeout为例，setTimeOut(function,delay,args...)  

function：  
+ 函数名：那么会等delay以后再去调用函数
+ 函数：那么直接会调用函数
+ 箭头函数包裹着的函数：等待delay以后调用

@[code{44-92} js](./src/24-promise.js)

## 考虑Promise链式调用情况

为了解决Promise的链式调用，所以第一次then的返回值是一个Promise对象，后续的每次then，都需要借助上一个的返回值，如果没有那么就是undefined
@[code{96-153} js](./src/24-promise.js)

## 实现resolvePromise  

我们来实现一下，`resolvePromise`函数，其实我的理解是他就是用来判断返回值
+ x === promise2 => 错误
+ x的类型不是函数也不是Object ，那么就直接进入resolve
+ 否则的话，判断x的then类型，如果为函数，那么一定是Promise，然后判断这个时成功还是失败
+ 否则的话，直接resolve
@[code{160-198} js](./src/24-promise.js)

## 完整Promise版本

因为then的两个参数`onFinished`和`onRejected`  
+ 不是必须的，如果是非函数，那么需要被忽略
+ 不是同步的，必须是被异步调用的，这就需要用`setTimeout`包裹，并且使用`try-catch`进行错误捕捉  
  
@[code{201-285} js](./src/24-promise.js)