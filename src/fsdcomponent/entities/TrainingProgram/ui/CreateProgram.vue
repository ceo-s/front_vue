<template>
  <div class="program-create">
    <default-input placeholder="Название цикла" v-model="name" />
    <default-input
      placeholder="Тезисно опишите цели цикла"
      v-model="description"
    />
    <my-calendar @update:date="updateDate" :min="30" :max="360" />
    <default-button @click="performCreate">Confirm: </default-button>
  </div>
</template>

<script>
import { createProgram } from "../api/Create";
export default {
  props: {
    clientId: { Number },
  },
  data() {
    return {
      name: "",
      description: "",
      date: {
        start: "",
        finish: "",
      },
    };
  },
  methods: {
    updateDate(date) {
      console.log("a", date);
      this.date.start = date[0].toLocaleDateString();
      this.date.finish = date[1].toLocaleDateString();
      console.log(this.date);
    },
    async performCreate() {
      const data = {
        name: this.name,
        description: this.description,
        time_start: this.date.start,
        time_finish: this.date.finish,
        client: this.$store.state.trainingProgram.clientId,
      };
      const program = await createProgram(data);
      console.log("PROGRAM", program);
      this.$emit("update:program", program);
    },
  },
};
</script>

<style lang="scss" scoped>
.program-create {
  height: 340px;
  width: 260px;
}
</style>
