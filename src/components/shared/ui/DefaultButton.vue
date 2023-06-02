<template>
  <button class="default-button">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "default-button",
};
</script>

<style lang="scss" scoped>
.default-button {
  @include bordered;
  width: 200px;
  aspect-ratio: 3/1;
  cursor: pointer;
  border: 3px solid $color4;
  transition: all 150ms;
  background: none;
  color: $color5;
  font-size: large;
  font-weight: 600;
}
.default-button:hover {
  // box-shadow: 0 0 10px 1px #b3b5b8;
  scale: 1.01;
}
.default-button:active {
}
.default-button:disabled {
  box-shadow: none;
  cursor: not-allowed;
  background: #5d5d5d98;
}
</style>
