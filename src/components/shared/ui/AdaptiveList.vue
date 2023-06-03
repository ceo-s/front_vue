<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "adaptive-list",
  props: {
    gap: {
      type: String,
      default: () => "20px",
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: v-bind(gap);
}
</style>
