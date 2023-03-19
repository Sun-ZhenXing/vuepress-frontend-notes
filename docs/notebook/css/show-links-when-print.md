# 打印时显示链接地址

在很多框架中，将内容打印总是默认给链接文字加上链接地址，并附加括号。比如本文使用的 VuePress 也支持这一点。

为了测试，请使用浏览器的打印功能，这样 [这个链接](https://blog.alexsun.top/) 的地址就会显示出来。

这一点可以参考 Bootstrap 的实现：

```css
@media print {
    a, a:visited {
        text-decoration: underline;
    }

    a[href]:after {
        content: " (" attr(href) ")";
    }

    abbr[title]:after {
        content: " (" attr(title) ")";
    }
}
```

如果需要覆盖样式：

```css
@media print {
    a[href]:after {
        content: "";
    }
}
```
