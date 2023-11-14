# 剪切板

[[TOC]]

## 1. 获取剪切板上的富文本

下面的代码用于获取 HTML 格式的文本信息：

```html
<input type="text" id="input" />
<textarea id="text" cols="30" rows="10"></textarea>
<script>
const input = document.getElementById('input')
const text = document.getElementById('text')
input.addEventListener('paste', (event) => {
  // get HTML from clipboard
  const html = event.clipboardData.getData('text/html')
  text.value = html
})
</script>
```

在左边的输入框内粘贴任何富文本，可粘贴为 HTML 代码到右边的文本框内。

<!-- markdownlint-disable MD033 -->

<div style="display: flex; justify-content: space-between;">
  <input type="text" id="input" />
  <textarea id="text" cols="30" rows="10"></textarea>
  <iframe id="iframe"></iframe>
</div>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

function handlePaste(event: ClipboardEvent) {
  // get HTML from clipboard
  const html = event.clipboardData?.getData('text/html')
  const text = document.getElementById('text')
  text.value = html
  const iframe = document.getElementById('iframe')
  iframe.contentDocument.body.innerHTML = html
}

onMounted(() => {
  const input = document.getElementById('input')
  const text = document.getElementById('text')
  input.addEventListener('paste', handlePaste)
})

onUnmounted(() => {
  const input = document.getElementById('input')
  input.removeEventListener('paste', handlePaste)
})
</script>
