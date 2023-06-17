<template>
  <div>
    <div class="selection">
      <select-client />
      <select-training-program />
    </div>
    <h1 v-if="client">Выбран клиент: {{ client.name }}</h1>
    <training-program />
  </div>
</template>

<script>
import TrainingProgram from "@/components/widgets/TrainingProgram/TrainingProgram.vue";
import SelectClient from "@/components/features/Client/SelectClient.vue";
import SelectTrainingProgram from "@/components/features/Programs/SelectTrainingProgram.vue";
export default {
  components: {
    TrainingProgram,
    SelectClient,
    SelectTrainingProgram,
  },
  unmounted() {
    this.$store.dispatch("programs/resetStore");
  },
  data() {
    return {};
  },
  computed: {
    client() {
      return this.$store.state.programs.client;
    },
  },
};
</script>

<style lang="scss" scoped></style>
