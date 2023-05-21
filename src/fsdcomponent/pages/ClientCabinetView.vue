<template>
  <div class="container">
    <!-- <client-profile /> -->
    <client-cabinet :id="Number(this.$route.params.id)" />
  </div>
</template>

<script>
import ClientCabinet from "@/fsdcomponent/widgets/Client/ClientCabinet.vue";
export default {
  components: {
    ClientCabinet,
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #a18484;
  // z-index: 0;
  height: 100vh;
}
</style>
