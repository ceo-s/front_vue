<template>
  <div>
    <default-carousel
      @update:currentItemIndex="
        (index) => (this.scheduleDay.day_type = nutrientsList[index].id)
      "
      :currentItemIndex="currentIndex"
      :itemsLength="nutrientsList.length"
      :direction="'row'"
      :arrowSize="0.4"
    >
      <slot name="nutrients" :nutrients="annotationNutrients"> </slot>
    </default-carousel>
    <slot name="managment"></slot>
  </div>
</template>

<script>
export default {
  props: {
    scheduleDay: { Array },
    nutrientsList: { Array },
  },
  computed: {
    annotationNutrients() {
      return this.nutrientsList.find(
        (val) => val.id === this.scheduleDay.day_type
      );
    },
    currentIndex() {
      return this.nutrientsList.indexOf(this.annotationNutrients);
    },
  },
};
</script>

<style lang="scss" scoped></style>
