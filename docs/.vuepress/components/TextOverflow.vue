<template>
  <div class="wrapper">
    <div class="note">
      <div class="note-1">
        做自己不喜欢的事情，需要很大的勇气；而做自己喜欢的事情，则需要更大的勇气。
      </div>
      <div class="note-2">
        做自己不喜欢的事情，需要很大的勇气；而做自己喜欢的事情，则需要更大的勇气。
      </div>
      <div class="note-3">
        做自己不喜欢的事情，需要很大的勇气；而做自己喜欢的事情，则需要更大的勇气。
      </div>
      <div class="note-4">
        做自己不喜欢的事情，需要很大的勇气；而做自己喜欢的事情，则需要更大的勇气。
      </div>
      <div class="note5">
        做自己不喜欢的事情，需要很大的勇气；而做自己喜欢的事情，则需要更大的勇气。
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 2rem;
}

.note {
  box-sizing: border-box;
  border: 1px solid #ccc;
  max-width: 100%;

  >div {
    box-sizing: border-box;
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