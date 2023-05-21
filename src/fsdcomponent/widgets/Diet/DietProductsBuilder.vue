<template>
  <div>
    <h1><slot></slot></h1>
    <selected-products @update:products="updateProducts" :products="products" />
    <choose-products @update:products="updateProducts" :products="products" />
  </div>
</template>

<script>
import SelectedProducts from "@/fsdcomponent/entities/Diet/ui/SelectedProducts.vue";
import ChooseProducts from "@/fsdcomponent/features/Diet/ChooseProducts.vue";
export default {
  components: {
    SelectedProducts,
    ChooseProducts,
  },
  props: {
    products: { Array },
  },
  methods: {
    updateProducts(products) {
      this.$emit("update:products", products);
    },
  },
};
</script>

<style lang="scss" scoped></style>
