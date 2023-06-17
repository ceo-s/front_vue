<template>
  <div class="container">
    <pop-up v-model:visible="search">
      <product-select
        class="select"
        @update:products="updateProducts"
        :selectedProducts="products"
      ></product-select>
      <!-- </div> -->
    </pop-up>
    <default-button :size="0.8" style="margin-top: 10px" @click="search = true"
      >Добавить</default-button
    >
  </div>
</template>

<script>
import ProductSelect from "@/components/entities/Diet/ui/ProductSelect.vue";
export default {
  components: {
    ProductSelect,
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
  height: 400px;
  // overflow: hidden;
}
</style>
