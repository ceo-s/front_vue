<template>
  <div>
    <default-button
      @click="visible = true"
      :disabled="Boolean(!$store.state.programs.clientId)"
      >Программы</default-button
    >
    <new-pop-up v-model:visible="visible">
      <div class="container">
        <div
          @click="selectProgram(program.id)"
          :key="program.id"
          v-for="program in programs"
          class="option"
        >
          <h2>{{ program.name }}</h2>
          <h3>{{ program.date_start }} - {{ program.date_finish }}</h3>
        </div>
      </div>
      <add-program @update:program="(program) => programs.push(program)" />
    </new-pop-up>
  </div>
</template>

<script>
import { listClientPrograms } from "@/components/entities/Diet/api/List";
import AddProgram from "@/components/features/Diet/AddProgram.vue";
export default {
  components: {
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
      console.log("program selected", id);
      this.$store.commit("programs/setDietProgramId", id);
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
