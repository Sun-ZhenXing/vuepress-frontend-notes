---
title: 09-图片懒加载
description: 09-图片懒加载
---

# 9. 图片懒加载

图片懒加载的优化处理：

- 图片全部加载完成后移除事件监；
- 加载完的图片，从 `imgList` 移除

图片使用 `data-src` 而不是 `src` 保存 URL，当滚动到指定位置时显示图片。

@[code js](./src/09-image-lazyload.js)
