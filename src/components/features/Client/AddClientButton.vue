<template>
  <div>
    <default-button @click="this.visible = true">
      Добавить клиента:
    </default-button>
    <pop-up v-model:visible="visible">
      <client-creation-form @update:client="updateClient" />
    </pop-up>
  </div>
</template>

<script>
import ClientCreationForm from "@/components/entities/Client/ui/ClientCreationForm.vue";
export default {
  components: {
    ClientCreationForm,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    updateClient(client) {
      this.visible = false;
      this.$emit("update:client", client);
    },
  },
};
</script>

<style lang="scss" scoped></style>
