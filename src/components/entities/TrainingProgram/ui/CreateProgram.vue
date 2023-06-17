<template>
  <div class="program-create">
    <h3>Создать программу</h3>
    <input class="default" placeholder="Название цикла" v-model="name" />
    <!-- <input
      class="default"
      placeholder="Тезисно опишите цели цикла"
      v-model="description"
    /> -->
    <my-calendar @update:date="updateDate" :min="30" :max="360" />
    <default-button @click="performCreate">Confirm: </default-button>
  </div>
</template>

<script>
import { createProgram } from "../api/Create";
export default {
  data() {
    return {
      name: "",
      description: "Добавьте коментарий для клиента к тренировочной програме!",
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
      const program = await createProgram(
        this.name,
        this.description,
        this.date.start,
        this.date.finish,
        this.$store.state.programs.clientId
      );
      console.log("PROGRAM", program);
      this.$emit("update:program", program);
    },
  },
};
</script>

<style lang="scss" scoped>
.program-create {
  padding: 1.5em;
  height: 360px;
  width: 300px;
  // background: #444;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1em;
  h3 {
    font-size: 1.2em;
  }
  button {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }
}
input.default {
  height: 2em;
}
</style>
