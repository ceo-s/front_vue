<template>
  <div>
    <p style="font-size: 1.2em">{{ product.name }}</p>
    <div v-if="detail">
      <p>{{ product.calories }}</p>
      <p>{{ product.proteins }}</p>
      <p>{{ product.fats }}</p>
      <p>{{ product.carbohydrates }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { Object },
    detail: { Boolean },
  },
};
</script>

<style lang="scss" scoped></style>
