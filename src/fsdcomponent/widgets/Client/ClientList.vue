<template>
  <div>
    <add-client-button @update:client="addClient" />
    <search-complex
      v-model:items="clients"
      :itemsApiLink="apiLink"
      :sortOptions="sortOptions"
      :optionsFieldsModels="optionsFieldsModels"
    />
    <adaptive-list>
      <client-demo
        :extended="true"
        :key="client.id"
        :client="client"
        v-for="client in clients"
      />
    </adaptive-list>
  </div>
</template>

<script>
import { listClients } from "@/fsdcomponent/entities/Client/api/List";
import AddClientButton from "@/fsdcomponent/features/Client/AddClientButton.vue";
import ClientDemo from "@/fsdcomponent/entities/Client/ui/ClientDemo.vue";
export default {
  components: {
    ClientDemo,
    AddClientButton,
  },
  beforeMount() {
    this.fetchClients();
  },
  data() {
    return {
      clients: [],
      apiLink: "clients",
      sortOptions: [
        { id: 1, name: "Name↑", value: "name", order: 1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
      ],
      optionsFieldsModels: [
        { field: "sport", toModel: "sports", name: "Филтр по видам спорта" },
        // {field: "", toModel: "", name: ""},
      ],
    };
  },
  methods: {
    async fetchClients() {
      this.clients = await listClients();
    },
    addClient(client) {
      this.clients.push(client);
    },
  },
};
</script>

<style lang="scss" scoped></style>
