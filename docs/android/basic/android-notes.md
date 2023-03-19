# Android 开发总结

[[TOC]]

## 1. Maven 镜像仓库

`settings.gradle` 内可设置镜像仓库。

```gradle
repositories {
    gradlePluginPortal()
    google()
    mavenCentral()
    maven { url 'https://jitpack.io' }
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/public' }
    maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
}
```

## 2. 使用实体 Android 机调试开发

1. 开始 USB 调试
2. 授权 ADB 调试
3. 编译到 Android 手机即可执行
4. （可选）使用 `scrcpy` 进行投屏

## 附录 A：常见报错指南

Sync 时错误：`Caused by: org.gradle.api.internal.plugins.PluginApplicationException: Failed to apply`。

解决方法：在项目的 `gradle.properties` 中加入下面的代码。

```properties
android.overridePathCheck=true
```
