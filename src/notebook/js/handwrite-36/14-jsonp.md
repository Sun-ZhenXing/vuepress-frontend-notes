# 14. JSONP

`<script>` 标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于 `GET` 请求：

@[code js](./src/14-jsonp.js)
