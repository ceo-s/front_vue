<template>
  <div>
    <default-button
      @click="visible = true"
      :disabled="Boolean(!this.$store.state.trainingProgram.clientId)"
      >Программы</default-button
    >
    <new-pop-up v-model:visible="visible">
      <div class="container">
        <training-program-demo
          @click="selectProgram(program.id)"
          class="option"
          :programInfo="program"
          :key="program.id"
          v-for="program in programs"
        />
      </div>
      <add-program @update:program="(program) => programs.push(program)" />
    </new-pop-up>
  </div>
</template>

<script>
import { listClientPrograms } from "@/fsdcomponent/entities/TrainingProgram/api/List";
import TrainingProgramDemo from "@/fsdcomponent/entities/TrainingProgram/ui/TrainingProgramDemo.vue";
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
        this.$store.state.trainingProgram.clientId
      );
    },
    selectProgram(id) {
      console.log("program selected", id);
      this.$store.commit("trainingProgram/setProgramId", id);
    },
  },
  watch: {
    visible() {
      this.fetchPrograms();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  height: 360px;
  overflow-y: scroll;
}
.option {
  cursor: pointer;
  height: 60px;
  border: 1px solid #000;
}
</style>
