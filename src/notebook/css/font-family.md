# font-family

[[TOC]]

## 通用字体

下面列出了通用的字体家族，可以直接使用，不需要引入字体文件，通用字体不能加引号。[^1]

[^1]: font-family，MDN，<https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family>

```css
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: emoji;
font-family: math;
font-family: fangsong;
```

## 常见的字体

```css
.serif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family: "Lucida Console", Courier, monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.emoji {
  font-family: emoji;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

## 其他常见的字体

```css
/* 更全面的等宽字体 */
.monospace {
  Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
}
```
