<template>
  <div>
    <search-complex v-model:items="searchedProducts" :itemsApiLink="'foods'" />
    <div class="items">
      <diet-product
        class="item"
        :class="{ selected: isSelected(product.id) }"
        @click="toggleProduct(product)"
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
  height: 90%;
  overflow-y: scroll;
}
.item {
  background: #f0f;
  margin: 2px;
  cursor: pointer;
}
.selected {
  background: green;
}
</style>
