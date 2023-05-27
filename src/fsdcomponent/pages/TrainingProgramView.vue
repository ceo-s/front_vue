<template>
  <div>
    <div class="selection">
      <select-client />
      <select-training-program />
    </div>
    <h1 v-if="client">Выбран клиент: {{ client.name }}</h1>
    <training-program :programId="programId" />
  </div>
</template>

<script>
import TrainingProgram from "@/fsdcomponent/widgets/TrainingProgram/TrainingProgram.vue";
import SelectClient from "@/fsdcomponent/features/Client/SelectClient.vue";
import SelectTrainingProgram from "@/fsdcomponent/features/Programs/SelectTrainingProgram.vue";
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

<style lang="scss" scoped>
.selection {
  width: fit-content;
  margin: auto;
  display: flex;
  gap: 20px;
}
</style>
