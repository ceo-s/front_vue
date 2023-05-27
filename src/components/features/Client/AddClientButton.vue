<template>
  <div>
    <default-button @click="this.visible = true"> Add client: </default-button>
    <new-pop-up v-model:visible="visible">
      <client-creation-form
        @update:client="(client) => $emit('update:client', client)"
      />
    </new-pop-up>
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
    openClientAdd() {},
  },
};
</script>

<style lang="scss" scoped></style>
