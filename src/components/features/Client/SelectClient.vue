<template>
  <div>
    <default-button @click="this.visible = true">Select client</default-button>
    <new-pop-up v-model:visible="visible">
      <div v-if="clients.length" class="container">
        <div>
          <div
            @click="selectClient(client)"
            class="option"
            :key="client.id"
            v-for="client in clients"
          >
            <h2>{{ client.name }}</h2>
            <h3>{{ client.telegram }}</h3>
          </div>
        </div>
      </div>
    </new-pop-up>
  </div>
</template>

<script>
import { listClients } from "@/components/entities/Client/api/List";
export default {
  mounted() {
    this.fetchClients();
  },
  data() {
    return {
      visible: false,
      clients: [],
    };
  },
  methods: {
    async fetchClients() {
      this.clients = await listClients();
    },
    selectClient(client) {
      console.log("client selected", client.id);
      this.visible = false;
      this.$store.commit("programs/setClientId", client.id);
      this.$store.commit("programs/setClient", client);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow-y: scroll;
  height: 600px;
  width: 300px;
}
.option {
  height: fit-content;
  margin: 2px;
  padding: 4px;
  background: #444;
  cursor: pointer;
}
</style>
