<template>
  <div class="row">
    <h4>{{ foodAmount.product.name }}</h4>
    -
    <input
      class="num-input"
      :style="{
        width: String(foodAmount.grams).length + (updating ? 3 : 0) + 'ch',
      }"
      :disabled="!updating"
      v-model="foodAmount.grams"
      type="number"
      min="0"
      max="10000"
    />g
    <slot name="delete"></slot>
  </div>
</template>

<script>
export default {
  props: {
    foodAmount: { Object },
    updating: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin-left: 15px;
  margin-top: 4px;
}
</style>
