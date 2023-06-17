<template>
  <div>
    <default-button
      @click="visible = true"
      :disabled="Boolean(!this.$store.state.programs.clientId)"
      >Программы</default-button
    >
    <pop-up v-model:visible="visible">
      <div class="pop-up-select">
        <training-program-demo
          @click="selectProgram(program.id)"
          class="option"
          :programInfo="program"
          :key="program.id"
          v-for="program in programs"
        />
      </div>
      <add-program @update:program="(program) => programs.push(program)" />
    </pop-up>
  </div>
</template>

<script>
import { listClientPrograms } from "@/components/entities/TrainingProgram/api/List";
import TrainingProgramDemo from "@/components/entities/TrainingProgram/ui/TrainingProgramDemo.vue";
import AddProgram from "./AddProgram.vue";
export default {
  components: {
    TrainingProgramDemo,
    AddProgram,
  },
  data() {
    return {
      visible: false,
      programs: [],
    };
  },
  methods: {
    async fetchPrograms() {
      this.programs = await listClientPrograms(
        this.$store.state.programs.clientId
      );
    },
    selectProgram(id) {
      this.visible = false;
      console.log("program selected", id);
      this.$store.commit("programs/setTrainingProgramId", id);
    },
  },
  watch: {
    visible() {
      this.fetchPrograms();
    },
  },
};
</script>

<style lang="scss" scoped></style>
