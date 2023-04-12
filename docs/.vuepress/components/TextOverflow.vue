<template>
  <div class="note">
    <div class="note-1">
      好想做伊雷娜小姐的狗啊！
    </div>
    <div class="note-2">
      好想做伊雷娜小姐的狗啊！
    </div>
    <div class="note-3">
      好想做伊雷娜小姐的狗啊！
    </div>
    <div class="note-4">
      好想做伊雷娜小姐的狗啊！
    </div>
    <div class="note5">
      好想做伊雷娜小姐的狗啊！
    </div>
  </div>
</template>

<style scoped lang="scss">
.note {
  border: 1px solid #ccc;

  >div {
    overflow: hidden;
    white-space: nowrap;
    width: 80px;
    padding: 1rem;
  }

  &-1 {
    width: 100% !important;
  }

  &-2 {
    text-overflow: clip;
  }

  &-3 {
    text-overflow: ellipsis;
  }

  &-4 {
    text-overflow: "###";
  }

  &-5 {
    text-overflow: fade(10px);
  }
}
</style>