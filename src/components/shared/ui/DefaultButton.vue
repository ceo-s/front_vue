<template>
  <button class="default-button">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "default-button",
  props: {
    size: {
      type: Number,
      default: () => 1,
    },
  },
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
  scale: v-bind(size);
  &:hover {
    scale: calc(1.02 * v-bind(size));
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    background: $color2;
    filter: blur(1px);
    &:hover {
      scale: 1;
    }
  }
}
</style>
