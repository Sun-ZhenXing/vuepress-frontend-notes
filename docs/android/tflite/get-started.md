# TensorFlow Lite 入门示例

## 1. Android 识别鲜花类型

我们可以从 [官方示例](https://codelabs.developers.google.com/codelabs/recognize-flowers-with-tensorflow-on-android/) 学习最基本的使用方法。

我们为了得到模型，需要在 [Colab](https://colab.research.google.com/drive/1sqBewUnvdATOO-yblj55EBFb2sM24XHR) 上训练一个分类模型。然后下载此模型保存为 `FlowerModel.tflite` 以备使用。

我们克隆官方的项目，然后用 Android Studio 打开。

```bash
git clone https://github.com/hoitab/TFLClassify.git
```

将这个应用运行到手机上，应该能看到教程第四步的效果，每个值都是随机的。

按照第五步的说明，将 `FlowerModel.tflite` 加入项目。然后是第六步，查找 TODO List，将每一步的代码复制到指定位置。

记得注释下面的代码：

```kt
// START - Placeholder code at the start of the codelab. Comment this block of code out.
for (i in 0..MAX_RESULT_DISPLAY-1) {
    items.add(Recognition("Fake label $i", Random.nextFloat()))
}
// END - Placeholder code at the start of the codelab. Comment this block of code out.
```

然后可以看到教程第七步的效果。下面是使用 GPU 推理，加入依赖：

```gradle
implementation 'org.tensorflow:tensorflow-lite-gpu:2.3.0'
```

然后 Sync，接着修改 TODO 6 的代码为下面的代码即可，重新运行。

```kt
private val flowerModel: FlowerModel by lazy {
    // Initialize the Flower Model
    // TODO 6. Optional GPU acceleration
    val compatList = CompatibilityList()

    val options = if(compatList.isDelegateSupportedOnThisDevice) {
        Log.d(TAG, "This device is GPU Compatible ")
        Model.Options.Builder().setDevice(Model.Device.GPU).build()
    } else {
        Log.d(TAG, "This device is GPU Incompatible ")
        Model.Options.Builder().setNumThreads(4).build()
    }
    FlowerModel.newInstance(ctx, options)
}
```

如果此时正在使用 GPU 推理，控制台能看到日志。如果出现下面的日志

```log
D/TFL Classify: This device is GPU Incompatible
```

则是 GPU 不兼容，可能是手机的兼容性或版本的兼容性不足。
