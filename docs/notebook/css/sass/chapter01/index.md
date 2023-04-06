# 1. Sass 语法快速入门

[[TOC]]

## 1. Sass 简介

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量（variables）、嵌套（nested rules）、混合（mixins）、导入（inline imports）等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。[^1]

[^1]: Sass 中文文档，www.sass.hk，<https://www.sass.hk/docs/>

Sass 的特点：
- 完全兼容 CSS3
- 在 CSS 基础上增加变量、嵌套、混合等功能
- 通过函数进行颜色值与属性值的运算
- 提供控制指令（control directives）等高级功能
- 自定义输出格式

## 2. 语法特点

### 2.1 Sass 和 Scss

Sass 有两种语法格式。首先是 SCSS（Sassy CSS），这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是可用的。

另一种也是最早的 Sass 语法格式，被称为缩进格式（Indented Sass），不使用 `;` 和 `{}`，保存在 `.sass` 文件中，就像下面这样：

```sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

但更广泛使用的是 CSS 超集的语法，即 SCSS，保存在 `.scss` 文件中。

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

现在我们只使用第二种语法，并把 `.scss` 文件就称为 Sass 文件。

### 2.2 使用变量

Sass 可以使用下面的语法声明变量：

```scss
$variable: value;
```

变量值可以是任何有效的

```scss
$red: hsl(0, 100%, 50%);

.btn.danger {
  color: $red;
  border: 1px solid $red;
}
```

这一点比 CSS 引入的原生变量早了很多。但是现在看来，我们使用原生的 CSS 变量会更加灵活，这也不是否定 Sass 的变量，它广泛用于静态编译。

与 CSS 属性不同，变量可以在 CSS 规则块定义之外存在。当变量定义在 CSS 规则块内，那么该变量只能在此规则块内使用。

这是 CSS 原生的变量语法，能够动态地改变页面的样式：

```css
:root {
  --red: hsl(0, 100%, 50%);
}

.btn.danger {
  color: var(--red);
  border: 1px solid var(--red);
}
```

### 2.3 嵌套

在传统的 CSS 中，我们注意到某些类（如 `.btn`）如果被经常使用，那么它会被重复写很多此，代码会因此臃肿而难以维护。

```css
.btn a {
  font-weight: bold;
}

.btn.warning {
  color: yellow;
}

.btn.danger {
  color: red;
}
```

Sass 使用嵌套将其变得优雅：

```scss
.btn {
  a {
    font-weight: bold;
  }

  &.warning {
    color: yellow;
  }

  &.danger {
    color: red;
  }
}
```

这还包括有 `&` 符号的帮助，此外还有一些符号也非常有帮助：

::: code-tabs

@tab Sass

```scss
.btn {
  &:focus {
    outline: none;
  }

  > a {
    color: #fff;
  }

  + h2 {
    text-align: center;
  }

  ~ p {
    text-align: center;
  }

  &::after {
    content: "!";
  }

  &-header {
    color: #fff;
  }
}
```

@tab CSS

```css
.btn:focus {
  outline: none;
}

.btn > a {
  color: #fff;
}

.btn + h2 {
  text-align: center;
}

.btn ~ p {
  text-align: center;
}

.btn::after {
  content: "!";
}

.btn-header {
  color: #fff;
}
```

:::

### 2.4 混合

混合允许我们复用重复的代码片段。使用 `@mixin` 定义一个复用片段，然后在指定位置使用 `@include` 引入即可。

::: code-tabs

@tab Sass

```scss
@mixin flex-column {
  display: flex;
  flex-direction: column;
  background: gray;
}

.card {
  @include flex-column;
}

.aside {
  @include flex-column;
}
```

@tab CSS

```css
.card {
  display: flex;
  flex-direction: column;
  background: gray;
}

.aside {
  display: flex;
  flex-direction: column;
  background: gray;
}
```

:::

混合也支持参数传递，这样我们可以以编程的方式创建大量伪类。

::: code-tabs

@tab Sass

```scss
@mixin cool-button($color, $bg) {
  display: flex;
  justify-content: center;
  color: $color;
  background-color: $bg;
}

.btn-orange {
  @include cool-button(black, orange)
}
```

@tab CSS

```css
.btn-orange {
  display: flex;
  justify-content: center;
  color: black;
  background-color: orange;
}
```

:::

混合甚至可以使用流程控制语句：

::: code-tabs

@tab Sass

```scss
@mixin cool-button($theme) {
  @if $theme == 'light' {
    background-color: white;
    color: black;
  } @else {
    background-color: black;
    color: white;
  }
}

$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    @include cool-button('dark');
  }
}
```

@tab CSS

```css
.icon-40px {
  font-size: 40px;
  background-color: black;
  color: white;
}

.icon-50px {
  font-size: 50px;
  background-color: black;
  color: white;
}

.icon-80px {
  font-size: 80px;
  background-color: black;
  color: white;
}
```

:::


后续我们将学习函数指令 `@function`，这就像写 JavaScript 程序一样能够控制变量的值。

::: code-tabs

@tab Sass

```scss
@function sum($numbers) {
  $sum: 0;

  @each $number in $numbers {
    $sum: $sum +$number;
  }

  @return $sum;
}

a {
  $num: 10px, 20px, 30px;
  width: sum($num);
}
```

@tab CSS

```css
a {
  width: 60px;
}
```

:::

### 2.5 内置函数

本节使用颜色函数举例，`lighten` 和 `darken` 函数可以增强或减弱颜色，这样我们可以有效调整颜色的数值而不必手动计算每个颜色的值。

::: code-tabs

@tab Sass

```scss
$base-color: green;

.card {
  background: lighten($base-color, 25%);
  color: darken($base-color, 25%);
}
```

@tab CSS

```css
.card {
  background: #01ff01;
  color: #000100;
}
```

:::
