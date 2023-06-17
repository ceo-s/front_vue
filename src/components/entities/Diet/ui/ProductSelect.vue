<template>
  <div class="items">
    <h3>Выберите продукты</h3>
    <default-search
      class="product-search"
      :placeholder="'Hазвание продукта:'"
      :itemsApiLink="'foods'"
      :searchParams="['name__icontains']"
      @update:searchResults="(results) => (searchedProducts = results)"
    />
    <diet-product
      class="item"
      :class="{ selected: isSelected(product.id) }"
      @click="toggleProduct(product)"
      :key="product.id"
      :product="product"
      v-for="product in searchedProducts"
    />
  </div>
</template>

<script>
import DefaultSearch from "@/components/shared/ui/DefaultSearch.vue";
import { listProducts } from "../api/List";
import DietProduct from "./DietProduct.vue";
export default {
  components: {
    DietProduct,
    DefaultSearch,
  },
  props: {
    selectedProducts: { Array },
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
    toggleProduct(product) {
      if (this.selectedProducts.some((val) => val.id === product.id)) {
        this.$emit(
          "update:products",
          this.selectedProducts.filter((val) => val.id !== product.id)
        );
      } else {
        this.$emit("update:products", this.selectedProducts.concat([product]));
      }
    },
    isSelected(id) {
      return this.selectedProducts.some((val) => val.id === id);
    },
  },
  computed: {
    // selected,
  },
};
</script>

<style lang="scss" scoped>
.items {
  padding: 0.4em;
  height: 100%;
  overflow-y: scroll;
  background: linear-gradient(180deg, $color1, #ff498038 60%);
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
