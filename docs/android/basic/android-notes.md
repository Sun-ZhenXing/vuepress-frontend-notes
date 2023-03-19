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

## 附录 A：Sync 时错误

Sync 时错误：`Caused by: org.gradle.api.internal.plugins.PluginApplicationException: Failed to apply`。

解决方法：在项目的 `gradle.properties` 中加入下面的代码。

```properties
android.overridePathCheck=true
```

## 附录 B：调试失败

无法启动 ADB 服务，持续重启 ADB demand。

解决方法：如果报错 `Adb connection Error: 远程主机强迫关闭了一个现有的连接。` 就是端口被占用，可能已经启动了另一个 ADB。

如果出现 `"Cannot reach ADB server, attempting to reconnect."`，则表明 WiFi 调试与 ADB 冲突，需要搜索并关闭 `Enable adb mDNS for wireless debugging`。
