<template>
  <div class="client">
    <h2>{{ client.name }}</h2>
    <h2>{{ client.telegram }}</h2>
    <h2>{{ client.description }}</h2>
    <h2>{{ client.sport }}</h2>
  </div>
</template>

<script>
import { getClient } from "../api/Get";
export default {
  props: {
    client: { Object },
  },
  data() {
    return {
      clientDetails: {},
    };
  },
  methods: {
    async fetchDetailInfo(clientId) {
      this.clientDetails = await getClient(clientId);
    },
  },
};
</script>

<style lang="scss" scoped>
.client {
  width: 300px;
  height: 300px;
  background: #555;
}
</style>
