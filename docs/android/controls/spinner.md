# Spinner

[[TOC]]

**微调框**（Spinner），也可以称为下拉列表，或者下拉菜单，轻触后列有所有其他可用值，用户可从中选择一个新值。[^1]

[^1]: 微调框，Android 官方文档，<https://developer.android.google.cn/guide/topics/ui/controls/spinner?hl=zh-cn>

```xml
<Spinner
    android:id="@+id/planets_spinner"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
```

详细的使用方式见官方文档。

使用指南：
- 使用适配器类 [`SpinnerAdapter`](https://developer.android.google.cn/reference/android/widget/SpinnerAdapter?hl=zh-cn) 来控制行为
- 如果预先确定了微调框的可用选项，可通过资源文件中定义的字符串数组来提供选项
- 使用监听器 [`AdapterView.OnItemSelectedListener`](https://developer.android.google.cn/reference/android/widget/AdapterView.OnItemSelectedListener?hl=zh-cn) 来监听事件

## 1. 填充值

```kt
val spinner: Spinner = findViewById(R.id.spinner)
// 创建数组适配器 ArrayAdapter 并指定默认布局
ArrayAdapter.createFromResource(
        this,
        R.array.planets_array,
        android.R.layout.simple_spinner_item
).also { adapter ->
    // 指定选择时的布局
    adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
    // 将适配器应用到 spinner
    spinner.adapter = adapter
}
```

## 2. 使用监听器

在初始化时指定监听器：

```kt
val spinner: Spinner = findViewById(R.id.spinner)
spinner.onItemSelectedListener = this
```

然后继承事件监听器即可：

```kt
class SpinnerActivity : Activity(), AdapterView.OnItemSelectedListener {

    override fun onItemSelected(parent: AdapterView<*>, view: View?, pos: Int, id: Long) {
        // ...
    }

    override fun onNothingSelected(parent: AdapterView<*>) {
        // ...
    }
}
```
