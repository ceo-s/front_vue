<template>
  <div class="items-container">
    <h3>Добавить продукт</h3>
    <default-search
      class="product-search"
      :placeholder="'Hазвание продукта:'"
      :itemsApiLink="'foods'"
      :searchParams="['name__icontains']"
      @update:searchResults="(results) => (searchedProducts = results)"
    />
    <div @wheel.stop class="items">
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

<style lang="scss" scoped>
.items-container {
  padding: 0.4em;
  width: 300px;
  height: 360px;
  background: linear-gradient(180deg, $color1, #ff498038 60%);
  .items {
    height: 70%;
    overflow-y: scroll;
  }
  h3 {
    margin: 0.6em;
    font-size: 1.2em;
  }
  .product-search {
    height: 2em;
    margin: 0.2em;
    border: 2px solid #ff498025;
    border-radius: 0.4em;
    margin-bottom: 0.4em;
  }
  .item {
    cursor: pointer;
  }
  .selected {
    background: linear-gradient(90deg, #ff498000, #00ffaa41, #ff498000);
  }
}
</style>
