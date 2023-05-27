<template>
  <div class="products-container">
    <h1><slot></slot></h1>
    <div class="products">
      <diet-product
        @click="deleteProduct(product.id)"
        :key="product.id"
        :product="product"
        v-for="product in products"
      />
    </div>
  </div>
</template>

<script>
import DietProduct from "./DietProduct.vue";
export default {
  components: {
    DietProduct,
  },
  props: {
    products: { Object },
  },
  methods: {
    deleteProduct(id) {
      this.$emit(
        "update:products",
        this.products.filter((val) => val.id !== id)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.products-container {
  display: flex;
  width: 100%;
  flex-grow: 1;
  max-height: 70%;
}
.products {
  border: 2px solid black;
  border-radius: 10px;
  // height: 304px;
  width: 100%;
  // height: 80%;
  // flex-grow: 1;
  flex-grow: 1;
  overflow-y: scroll;
}
</style>
