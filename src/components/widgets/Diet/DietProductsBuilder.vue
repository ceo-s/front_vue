<template>
  <div>
    <h3 style="font-size: 1.3em"><slot></slot></h3>
    <selected-products @update:products="updateProducts" :products="products" />
    <choose-products @update:products="updateProducts" :products="products" />
  </div>
</template>

<script>
import SelectedProducts from "@/components/entities/Diet/ui/SelectedProducts.vue";
import ChooseProducts from "@/components/features/Diet/ChooseProducts.vue";
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
