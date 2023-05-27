<template>
  <div>
    <client-list />
  </div>
</template>

<script>
import ClientList from "@/components/widgets/Client/ClientList.vue";
export default {
  components: {
    ClientList,
  },
};
</script>

<style scoped>
.filter-select {
  width: 500px;
  height: 50px;
}
</style>
