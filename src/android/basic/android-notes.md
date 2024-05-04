# Android 开发总结

[[TOC]]

## 1. Maven 镜像仓库

部分包无法下载，需要使用镜像仓库。在 `settings.gradle` 内可设置镜像仓库。

```properties
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

## 2. 调试开发

### 2.1 使用实体机调试开发

1. 开始 USB 调试
2. 授权 ADB 调试
3. 编译到 Android 手机即可执行
4. （可选）使用 `scrcpy` 进行投屏

```bash
adb devices

# 使用无线调试
adb tcpip 5555
adb connect <ip>:5555
```

### 2.2 使用模拟器调试开发

请搜索模拟器的创建步骤，但模拟器问题较多，速度较慢，好处是可指定更多版本。[^1]

[^1]: Android Studio 模拟器使用 QEMU 虚拟机。

### 2.3 使用 WSA 调试开发

请参考 [使用 Windows 安卓子系统](https://blog.alexsun.top/posts/envs/windows-subsystem-for-android.html) 进行配置。

## 3. 资源网站

- [Android Developers](https://developer.android.com/)，需要外网
- [Android Developers 中文](https://developer.android.google.cn/)
- [Android 图标库](https://fonts.google.com/icons?hl=zh-cn&icon.platform=android)，需要外网
