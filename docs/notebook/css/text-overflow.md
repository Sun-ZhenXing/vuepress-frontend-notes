# text-overflow

[[TOC]]

## 1. 功能

`text-overflow` 属性用于确定如何提示用户存在隐藏的溢出内容。[^1]

[^1]: text-overflow，MDN，<https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow>

`text-overflow` 属性并不会强制文本溢出行为，因此为了能让文本能够溢出容器，需要在元素上添加几个额外的属性：`overflow` 和 `white-space`。例如：

```css
overflow: hidden;
white-space: nowrap;
```

`text-overflow` 属性只对那些在块级元素溢出的内容有效，但是必须要与块级元素内联（`inline`）方向一致。

## 2. 值

`text-overflow` 属性可能被赋予一个或者两个值。如果赋一个值，指的行末溢出行为（从左至右的文本右末端，从右至左的文本左末端）。如果赋两个值，第一个值指定行左端溢出行为，第二个值指定行右端溢出行为。

- `clip`：默认值，裁剪溢出的文本，不显示省略号。
- `ellipsis`：显示省略号来代表被修剪的文本。这个关键字会用一个省略号（`'…'`）。如果空间太小以至于连省略号都容纳不下，那么这个省略号也会被截断。
- *@note:实验性* `<string>`：用来表示被截断的文本。字符串内容将被添加在内容区域中，所以会减少显示出的文本。如果空间太小，这个字符串也会被截断。
- *@note:实验性* `fade`：淡出效果
- *@note:实验性* `fade(<length> | <percentage>)`：淡出效果，指定淡出的长度。小于 0 的值视为 0。大于行宽的值视为行宽。

## 3. 示例

最常见的是使用省略号：

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

<TextOverflow />

<script setup lang="ts">
import TextOverflow from '@/components/TextOverflow.vue'
</script>

@[code vue](@/components/TextOverflow.vue)
