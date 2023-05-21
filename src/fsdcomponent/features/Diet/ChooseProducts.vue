<template>
  <div class="container">
    <new-pop-up v-model:visible="search">
      <product-select
        class="select"
        @update:products="updateProducts"
        :selectedProducts="products"
      ></product-select>
      <!-- </div> -->
    </new-pop-up>
    <default-button style="margin-top: 10px" @click="search = true"
      >Add:</default-button
    >
  </div>
</template>

<script>
// entities
import SelectedProducts from "@/fsdcomponent/entities/Diet/ui/SelectedProducts.vue";
import ProductSelect from "@/fsdcomponent/entities/Diet/ui/ProductSelect.vue";
export default {
  components: {
    ProductSelect,
    SelectedProducts,
  },
  props: {
    products: { Array },
  },
  data() {
    return {
      // selectedProducts: [],
      search: false,
    };
  },
  methods: {
    updateProducts(products) {
      console.log(products);
      this.$emit("update:products", products);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.products {
  // height: 40%;
  max-height: 100%;
  flex-grow: 1;
}
.select {
  width: 300px;
  height: 300px;
  overflow: hidden;
}
</style>
