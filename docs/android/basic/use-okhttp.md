# 使用 okhttp 发送请求

[[TOC]]

## 1. 添加依赖

在 `build.gradle` 中添加：

```properties
implementation("com.squareup.okhttp3:okhttp:4.10.0")
```

## 2. 基础设置

```kt
private fun setTimeoutAndCache() {
    val cacheDir = externalCacheDir
    val cacheSize = 10 * 1024 * 1024L
    val okHttpClientBuilder = OkHttpClient.Builder()
        .connectTimeout(20, TimeUnit.SECONDS)
        .readTimeout(20, TimeUnit.SECONDS)
        .writeTimeout(20, TimeUnit.SECONDS)
        .cache(Cache(File(cacheDir, "cache.txt"), cacheSize))
    val okHttpClient = okHttpClientBuilder.build()
}
```

## 2. 发起异步请求

### 2.1 基本 GET 请求

```kt
private fun asyncGet(url: String) {
    val request = Request.Builder()
        .url(url)
        .method("GET", null)    // 也可以直接使用 .get() 方法 
        .build()

    OkHttpClient().newCall(request).enqueue(object : Callback {
        override fun onFailure(call: Call, e: IOException) {
            // ...
        }
        override fun onResponse(call: Call, response: Response) {
            // ...
        }
    })
}
```

### 2.2 POST 请求

创建请求方法：

```kt
val requestBody = FormBody.Builder()
    .add("username", "alex")
    .add("password", "pwdstring")
    .build()
 
val request = Request.Builder()
    .url(url)
    .post(requestBody)
    .build()
```

### 2.3 POST 发送文件

```kt
val filePath = Environment.getExternalStorageDirectory().absolutePath
val file = File(filePath, "test.txt")

val request = Request.Builder()
    .url(url)
    .post(file.asRequestBody("text/txt; charset=utf-8".toMediaType()))
    .build()
```

### 2.4 异步下载一个文件

```kt
override fun onResponse(call: Call, response: Response) {
    val inputStream = response.body!!.byteStream()
    val filePath = Environment.getExternalStorageDirectory().absolutePath
    val file = File(filePath, "test.txt")
    val fileOutputStream = FileOutputStream(file)
    val buffer = ByteArray(2048)
    do {
        val len = inputStream.read(buffer)
        fileOutputStream.write(buffer, 0, len)
    } while (len! = -1)
    fileOutputStream.flush()
}
```

### 2.5 异步上传 Multipart 文件

```kt
val requestBody = MultipartBody.Builder()
    .setType(MultipartBody.FORM)
    .addFormDataPart("title", "img")
    .addFormDataPart("image", "test.png", RequestBody.create(
        "image/png".toMediaType(), File("/sdcard/test.png")))
    .build()
```
