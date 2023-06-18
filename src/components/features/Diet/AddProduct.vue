<template>
  <div>
    <plus-icon :color="'#bbb6c8'" @click="this.visible = true" :size="0.8" />
    <pop-up v-model:visible="visible">
      <ProductAmountSelect @update:product="addProduct" />
    </pop-up>
  </div>
</template>

<script>
import ProductAmountSelect from "@/components/entities/Diet/ui/ProductAmountSelect.vue";
export default {
  components: {
    ProductAmountSelect,
  },
  mounted() {
    console.log("mounted addproduct");
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    addProduct(product) {
      this.$emit("update:product", product);
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
