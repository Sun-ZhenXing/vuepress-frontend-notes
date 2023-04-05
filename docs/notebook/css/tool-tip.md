# 实现 Tooltip

本文直接参考 [Spectre.css](https://github.com/picturepan2/spectre/blob/master/src/_tooltips.scss) 的实现，其示例如下。

<div style="display: flex; justify-content: center;">
<button class="action-button primary tooltip tooltip-left" data-tooltip="提示">左边</button>
<button class="action-button primary tooltip tooltip-right" data-tooltip="提示">右边</button>
<button class="action-button primary tooltip" data-tooltip="提示">上面</button>
<button class="action-button primary tooltip tooltip-bottom" data-tooltip="提示">下面</button>
</div>

::: details 查看源码

```scss
@include(@/styles/tooltip.scss)
```
:::

另外，有一些提示有边角，例如 [这篇博客：A step-by-step guide to making pure-CSS tooltips](https://www.freecodecamp.org/news/a-step-by-step-guide-to-making-pure-css-tooltips-3d5a3e237346) 所展示的那样，在本文中实现了一个最基本的边角提示。

边角使用 `::before` 表现，核心样式是：
- `border-bottom-color`，设置边角的颜色
- `margin-left`，设置边角的大小，为负值就会出现三角形

<style lang="scss" scoped>
@import "@/styles/tooltip.scss";
button {
    background-color: var(--c-brand-light);
    border-color: var(--c-brand);
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 0.5em 1em;
    margin: 0.5em;
}
</style>

```scss
.tooltip {
  &::before {
    border: $corner-size solid transparent;
    border-bottom-color: rgba($dark-color, .95);
    bottom: 100%;
    content: '';
    display: block;
    height: 0;
    width: 0;
    opacity: 0;
    left: 50%;
    margin-left: -$corner-size;
    position: absolute;
    transform: translate(-50%, $unit-2);
    transition: opacity .2s, transform .2s;
    z-index: 200;
  }

  &.tooltip-left {
    &::before {
      bottom: 50%;
      left: auto;
      right: 100%;
      transform: translate(1rem, 50%) rotate(90deg);
    }

    &::after {
      bottom: 50%;
      left: auto;
      right: 100%;
      transform: translate($unit-2, 50%);
    }

    &:focus,
    &:hover {

      &::before {
        transform: translate($corner-size, 50%) rotate(90deg);
      }

      &::after {
        transform: translate(-$unit-1, 50%);
      }
    }
  }
}
```
