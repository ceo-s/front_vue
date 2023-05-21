<template>
  <div>
    <list-display :column_width="column_width">
      <div v-for="client in clients" :key="client.id" class="client-card">
        <div class="photo-container">
          <img src="" alt="" />
        </div>
        <div class="content">
          <h1>{{ client.name }}</h1>
          <h2>{{ client.telegram }}</h2>
          <my-button @click="$router.push(`/clients/${client.id}`)"
            >Open</my-button
          >
        </div>
      </div>
    </list-display>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  beforeMount() {
    // this.clients = this.$store.state.userInfo.clients
  },
  data() {
    return {
      // TODO спросить у сани какого хуя после перезагрузки страницы или
      // выбора сортировки клиенты пропадают . Хуйня со стором
      // clients: this.$store.state.userInfo.clients,

      column_width: "600px",
      clients: this.$store.state.userInfo.clients,
      clientsApiLInk: "clients",
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

  computed: {
    ...mapState({
      // clients: state => state.userInfo.clients,
    }),
  },
};
</script>

<style lang="scss" scoped>
$card_width: v-bind(column_width);
$card_height: 200px;
.managment {
  display: flex;
  gap: 20px;
}
.client-card {
  display: flex;
  width: $card_width;
  min-width: 300px;
  height: $card_height;
  background: #333;
}

.photo-container {
  background: #668;
  width: $card_height;
  height: 100%;
}
.content {
  width: calc(100% - $card_height);
  background: #998888;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;
  padding-left: 15px;
}
</style>
