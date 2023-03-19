# Android 样式优化

[[TOC]]

## 1. 如何隐藏标题栏

通过更改继承的主题即可，在 `themes.xml`，默认情况下为：

```xml
<style name="Theme.Calc" parent="Theme.MaterialComponents.DayNight.DarkActionBar">
    ...
</style>
```

将 `DarkActionBar` 修改为 `NoActionBar` 即可。

## 2. 如何自定义图标

在 **res** 文件夹上右键，**New** -> **Image Asset**，可以设置前景和背景，可以指定一个资源，也可以指定一个矢量图或普通图像然后自动生成一个图标。

::: warning 资源错误

Android Stdio 会自动将 SVG 转换为资源文件，但启动时可能报错找不到资源，这是因为 Android Studio 没有生成 XML 声明，需要手动加入：

```xml
<?xml version="1.0" encoding="utf-8"?>
```

将上面一行代码粘贴到报错资源的第一行即可。

:::
