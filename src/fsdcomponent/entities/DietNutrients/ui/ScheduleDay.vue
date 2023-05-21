<template>
  <div>
    <div class="item">
      <h2>{{ scheduleDay.count }}</h2>
      <div class="annotation2">
        <p>{{ dayNutrients.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scheduleDay: { Object },
    dayNutrients: { Object },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: fit-content;
  cursor: help;
}
.annotation2 {
  background: rgb(86, 94, 85);
  display: none;
  position: absolute;
}
.item:hover .annotation2 {
  display: block;
  z-index: 100;
}
</style>
