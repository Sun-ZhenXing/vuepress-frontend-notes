<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

interface Node {
  children?: Node[]
  name: string
}

const props = defineProps<{
  items: Node[]
}>()

const isShow = ref<boolean[]>([])
</script>

<template>
  <ul>
    <li v-for="item, i in props.items" :key="item.name">
      <div class="wrapper" @click="isShow[i] = !isShow[i]">
        <Icon
          v-if="item.children && item.children.length"
          :icon="isShow[i] ? 'fluent:chevron-down-24-regular' : 'fluent:chevron-right-24-regular'"
        />
        <Icon v-else icon="fluent:document-24-regular" />
        <span class="name">{{ item.name }}</span>
      </div>
      <div v-if="item.children && item.children.length" class="sub-tree">
        <tree-test v-show="isShow[i]" :items="item.children" />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
  user-select: none;

  .wrapper {
    padding: .2rem;
    cursor: pointer;
    border-radius: .2rem;
    display: flex;
    align-items: center;
  }

  .wrapper:hover {
    background-color: #f5f5f5;
  }

  svg {
    margin-right: 5px;
    width: 1.2rem;
  }

  .sub-tree {
    padding-left: 1rem;
  }
}
</style>
