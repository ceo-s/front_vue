<template>
  <div>
    <search-complex v-model:items="searchedProducts" :itemsApiLink="'foods'" />
    <div class="items">
      <diet-product
        class="item"
        @click="addProduct(product)"
        :key="product.id"
        :product="product"
        v-for="product in searchedProducts"
      />
    </div>
  </div>
</template>

<script>
import { listProducts } from "../api/List";
import DietProduct from "./DietProduct.vue";
export default {
  components: {
    DietProduct,
  },
  mounted() {
    this.fetchProducts();
  },
  data() {
    return {
      searchedProducts: [],
    };
  },
  methods: {
    async fetchProducts() {
      this.searchedProducts = await listProducts();
    },
    addProduct(product) {
      this.$emit("update:product", product);
    },
  },
};
</script>

<style lang="scss" scoped></style>
