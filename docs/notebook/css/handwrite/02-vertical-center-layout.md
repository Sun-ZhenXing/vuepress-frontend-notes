---
title: 02-垂直居中
description: 02-CSS实现垂直居中问题
---

简单搭建一下页面，搞两个盒子相互嵌套即可。
@[code html](./src/02-vertical-center-layout/index.html)

## 块级元素

### 块级元素不定宽高
1. 利用`position+transform`  
   `transform:translate(-50%,-50%)`,这边的50%，其实是基于子元素的宽高的
   @[code{17-29} css](./src/02-vertical-center-layout/style-1.css)
2. 利用`position+margin: auto`
   `position`,将上下左右设置为0，这样子元素就被拉到和父元素一样大，这时候设置`margin:0`,就可以实现居中
   @[code{31-44} css](./src/02-vertical-center-layout/style-1.css) 
3. 利用`flex`布局
   @[code{46-51} css](./src/02-vertical-center-layout/style-1.css)
4. 利用`grid`实现
   @[code{53-58} css](./src/02-vertical-center-layout/style-1.css) 

### 块级元素定宽高
上面介绍的所有不定宽高的解决方法，都可以使用。
特殊：利用`position+margi负值`
@[code css](./src/02-vertical-center-layout/style-2.css)

## 内联元素
一般就将内联元素变为块级元素也行
或者设置`text-align = center`和`line-height = height`