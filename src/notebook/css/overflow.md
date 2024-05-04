# overflow

`overflow` 是 CSS 的简写属性，其设置了元素溢出时所需的行为——即当元素的内容太大而无法适应它的块级格式化上下文时。[^1]

[^1]: overflow，MDN，<https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow>

`overflow` 属性用于当一个元素太大而无法适应父级容器的大小时需要做什么，常用值如下：

- `visible`：默认值。内容不会回修剪，可以呈现在元素框之外
- `hidden`：如果内容超出父级容器，超出部分将会被隐藏
- `scroll`：无论是否超出容器，都会出现一个滚动条
- `auto`：如果没有超出容器的显示，将会正常显示，如果超出，将会出现一个滚动条
- `clip`：类似于 `hidden`，内容将以元素的边距（`padding`）盒进行裁剪。`clip` 和 `hidden` 之间的区别是 `clip` 关键字禁止所有滚动，包括以编程方式的滚动

`overflow-x` 与 `overflow-y` 可以分别设置水平和垂直时溢出的部分该怎么怎么处理。

指定 `visible`（默认）或 `clip` 以外的值，会创建一个新的块级格式化上下文。由于技术原因，这是必要的——如果浮动包含滚动元素，它将在每个滚动步骤后强制重新包装内容，从而导致一个缓慢的滚动体验。

为使 `overflow` 具有效果，块级水平的容器必须有一个设定的高度（`height` 或 `max-height`）或 `white-space` 设置为 `nowrap`。

简单来说，容器必须满足以下条件：

1. `dispaly` 的值非 `inline`
2. 具有尺寸限制。（`width` / `height` / `max-width` / `max-height` / `absolute` 拉伸）
3. 对于单元格 `td` 等，还需要 `table` 为 `table-layout: fixed`

*@note:注意* 如果 `overflow-x` 与 `overflow-y` 的值相同，结果等同于 `overflow`。如果 `overflow-x` 与 `overflow-y` 的值不相同，且其中一个属性的值被赋予 `visible`，另外一个被赋予一个非 `visible` 的值，第一个被赋予 `visible` 的值会自动变为 `auto`。[^1][^2]

[^2]: 【不一样的 CSS】深入理解 `overflow`（溢出要学会处理），稀土掘金，<https://juejin.cn/post/6963255359985156110>
