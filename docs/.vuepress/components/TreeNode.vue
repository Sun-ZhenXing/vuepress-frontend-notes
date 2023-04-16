<script setup lang="ts">
import { computed, ref } from 'vue'

type Node = {
  // 名称
  name: string
  // 标签
  label?: string
  // 子节点
  children?: Node[]
  // 注释
  note?: string
  // 是否默认显示
  show?: boolean
  // 是否固定
  fixed?: boolean
}

const props = defineProps<{
  items: Node[],
}>()

const isShow = ref<boolean[]>([])

/**
 * 切换显示状态
 * @param i 第几个节点
 */
const toggle = (i: number) => {
  if (props.items[i].fixed) return
  isShow.value[i] = !isShow.value[i]
  console.log(props.items[i])
}
</script>

<template>
  <ul>
    <li v-for="item, i in props.items" :key="item.name">
      <div class="wrapper" :class="{ tooltip: item.note }" @click="toggle(i)"
        :data-tooltip="item.name + ': ' + item.note">
        <i class="fa" aria-hidden="true" v-if="item.children && item.children.length"
          :class="(item.show !== isShow[i]) ? 'fa-angle-down' : 'fa-angle-right'"></i>
        <i v-else class="fa fa-file-o" aria-hidden="true"></i>
        <span class="name">{{ item.name }}</span>
        <span class="label" v-if="item.label">
          {{ item.label }}
          <i v-if="item.note" class="fa fa-question-circle"></i>
        </span>
      </div>
      <div class="sub-tree" v-if="item.children && item.children.length">
        <TreeNode v-show="item.show !== isShow[i]" :items="item.children" />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
$mono-font: Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

ul {
  padding-left: 0;
}

li {
  list-style: none;
  user-select: none;

  .wrapper {
    padding: .2rem;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 15px 0 var(--box-shadow);
      border-radius: 10px;
    }

    i {
      margin-right: 5px;
      padding-left: 10px;
      width: 1.2rem;
    }

    span {
      font-family: $mono-font;

      &.name {
        color: var(--c-text);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &.label {
        margin-left: 2rem;
        color: var(--c-text-quote);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}

.sub-tree {
  margin-left: 1.8rem;
}

// Ref: https://picturepan2.github.io/spectre/components/tooltips.html
.tooltip {
  position: relative;

  &::after {
    background: rgba(48, 55, 66, .95);
    border-radius: .2rem;
    bottom: 100%;
    color: #fff;
    content: attr(data-tooltip);
    display: block;
    left: 50%;
    max-width: 60vw;
    opacity: 0;
    overflow: hidden;
    padding: .2rem .4rem;
    pointer-events: none;
    position: absolute;
    transform: translate(-50%, .4rem);
    transition: opacity .2s, transform .2s;
    white-space: pre-wrap;
    z-index: 300;
    bottom: auto;
    top: 100%;
    font-family: $mono-font;
  }

  &:hover::after {
    opacity: 0.9;
    transform: translate(-50%, .2rem);
  }
}
</style>
