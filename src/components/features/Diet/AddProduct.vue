<template>
  <div>
    <plus-icon @click="this.visible = true" :size="0.8" />
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
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    addProduct(product) {
      this.$emit("update:product", product);
    },
  },
};
</script>

<style lang="scss" scoped></style>
