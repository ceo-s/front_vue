<template>
  <div>
    <svg
      class="menu-icon"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <path
        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "menu-icon",
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-icon {
  width: calc(60px * v-bind(size));
  cursor: pointer;
  fill: $color-purple;
}
</style>
