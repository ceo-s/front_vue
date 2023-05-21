<template>
  <div class="row">
    <h4>{{ foodAmount.product.name }}</h4>
    -
    <input
      class="num-input"
      :style="{
        width:
          String(foodAmount.grams).length +
          (updatingDayRef.value ? 3 : 0) +
          'ch',
      }"
      :disabled="!updatingDayRef.value"
      v-model="foodAmount.grams"
      type="number"
      min="0"
      max="10000"
    />g
    <!-- v-model:value="foodAmount.grams" -->
  </div>
</template>

<script>
export default {
  props: {
    foodAmount: { Object },
    updating: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  inject: ["updatingDayRef"],
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin-left: 10px;
}
</style>
