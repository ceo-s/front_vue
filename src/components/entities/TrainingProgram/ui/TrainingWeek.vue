<template>
  <div class="week">
    <adaptive-list>
      <slot name="week" :week="week"></slot>
    </adaptive-list>
  </div>
</template>

<script>
export default {
  props: {
    week: { Object },
  },
};
</script>

<style lang="scss" scoped>
.week {
  width: 100%;
  height: 80vh;
  background: rgb(69, 138, 138);
}
</style>
