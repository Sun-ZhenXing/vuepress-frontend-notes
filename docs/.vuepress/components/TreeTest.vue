<script setup lang="ts">
import { ref } from 'vue'

interface Node {
  name: string
  children?: Node[]
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
        <i
          v-if="item.children && item.children.length" class="fa" aria-hidden="true"
          :class="isShow[i] ? 'fa-angle-down' : 'fa-angle-right'"
        />
        <i v-else class="fa fa-file-o" aria-hidden="true" />
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
  }

  .wrapper:hover {
    background-color: #f5f5f5;
  }

  i {
    margin-right: 5px;
    width: 1.2rem;
  }

  .sub-tree {
    padding-left: 1rem;
  }
}
</style>
