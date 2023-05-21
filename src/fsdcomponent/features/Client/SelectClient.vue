<template>
  <div>
    <default-button @click="this.visible = true">Select client</default-button>
    <new-pop-up v-model:visible="visible">
      <div class="container">
        <div>
          <client-demo
            @click="selectClient(client.id)"
            :key="client.id"
            v-for="client in clients"
            class="option"
            :clinet="client"
          />
        </div>
      </div>
    </new-pop-up>
  </div>
</template>

<script>
import { listClients } from "@/fsdcomponent/entities/Client/api/List";
import ClientDemo from "@/fsdcomponent/entities/Client/ui/ClientDemo.vue";
export default {
  components: {
    ClientDemo,
  },
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
    selectClient(id) {
      console.log("client selected", id);
      this.$store.commit("trainingProgram/setClientId", id);
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
  height: 50px;
  margin: 2px;
  background: #444;
  cursor: pointer;
}
</style>
