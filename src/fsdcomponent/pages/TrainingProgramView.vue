<template>
  <div>
    <div>
      <select-client />
      <select-training-program />
    </div>
    <training-program :programId="programId" />
  </div>
</template>

<script>
// entities
import TrainingProgram from "@/fsdcomponent/widgets/TrainingProgram/TrainingProgram.vue";
// features
import SelectClient from "@/fsdcomponent/features/Client/SelectClient.vue";
import SelectTrainingProgram from "@/fsdcomponent/features/Programs/SelectTrainingProgram.vue";
export default {
  components: {
    TrainingProgram,
    SelectClient,
    SelectTrainingProgram,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
