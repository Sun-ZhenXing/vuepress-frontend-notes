---
title: 02-原型链继承
description: 02-原型链继承
---

# 2. 原型链继承

[[TOC]]

@[code js](./src/02-prototype-chain-inheritance-1.js)

原型链继承存在的问题：

1. 原型中包含的引用类型属性将被所有实例共享
2. 子类在实例化的时候不能给父类构造函数传参

## 2.1 借用构造函数实现继承

@[code js](./src/02-prototype-chain-inheritance-2.js)

借用构造函数实现继承解决了原型链继承的两个问题：引用类型共享问题以及传参问题。但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。

## 2.2 组合继承

@[code js](./src/02-prototype-chain-inheritance-3.js)

组合继承结合了原型链和借用构造函数，将两者的优点集中了起来。基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。

## 2.3 寄生式组合继承

@[code js](./src/02-prototype-chain-inheritance-4.js)

组合继承已经相对完善了，但还是存在问题，它的问题就是调用了两次父类构造函数，第一次是在 `new Animal()`，第二次是在 `Animal.call()` 这里。

所以解决方案就是不直接调用父类构造函数给子类原型赋值，而是通过创建空函数 `F` 获取父类原型的副本。

上方 12~22 行代码可替换为下面的寄生式组合式的代码：

```js
Dog.prototype =  Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
```

## 2.4 class 语法

@[code js](./src/02-prototype-chain-inheritance-5.js)

ES6 是个好东西。
