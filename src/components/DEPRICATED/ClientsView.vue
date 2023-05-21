<template>
  <div>
    <clients-list />
  </div>
</template>

<script>
import ClientsList from "@/components/ClientsList.vue";
export default {
  components: {
    ClientsList,
  },
  data() {
    return {
      clients: [],
    };
  },
};
</script>

<style scoped>
.filter-select {
  width: 500px;
  height: 50px;
}
</style>
