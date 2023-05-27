<template>
  <div class="form">
    <h2>Добавить клиента</h2>
    <form name="client-add">
      <default-input v-model="name" :placeholder="'Name:'" />
      <default-input v-model="telegram" :placeholder="'Telegram:'" />
      <default-input v-model="description" :placeholder="'Description:'" />
      <default-button @click.prevent="submit">Submit</default-button>
    </form>
  </div>
</template>

<script>
import { createClient } from "@/components/entities/Client/api/Create.js";
export default {
  data() {
    return {
      name: "",
      telegram: "",
      description: "",
    };
  },
  methods: {
    async submit() {
      const resp = await createClient(
        this.name,
        this.telegram,
        this.description
      );
      let { sport, ...client } = resp;
      this.$emit("update:client", client);
      console.log(client);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 300px;
  height: 350px;
}
</style>
