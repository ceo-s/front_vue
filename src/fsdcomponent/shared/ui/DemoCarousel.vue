<template>
  <div>
    {{ currentItem }}
  </div>
</template>

<script>
export default {
  name: "demo-carousel",
  props: {
    items: { Array },
  },
  mounted() {
    this.currentItem = this.items[0];
  },
  data() {
    return {
      currentItem: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
