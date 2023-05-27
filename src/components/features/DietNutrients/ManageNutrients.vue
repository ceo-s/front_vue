<template>
  <div>
    <h1 @click="addNutrients">+</h1>
    <h1 @click="popNutrients">-</h1>
  </div>
</template>

<script>
import { dailyNutrients } from "@/components/entities/Diet/model/Consts";
export default {
  props: {
    nutrientsList: { Object },
  },
  methods: {
    addNutrients() {
      // const lastDay = this.nutrientsList.at(-1);
      // this.$emit(
      //   "update:nutrientsList",
      //   [...this.nutrientsList].concat({
      //     ...lastDay,
      //     id: -Math.abs(lastDay.id) - 1,
      //     count: lastDay.count + 1,
      //   })
      // );
      if (this.nutrientsList.length) {
        this.nutrientsList.push(
          dailyNutrients(this.$store.state.programs.dietProgramId)
        );
      } else {
        this.nutrientsList.push(
          dailyNutrients(this.$store.state.programs.dietProgramId)
        );
      }
    },
    popNutrients() {
      // this.$emit("update:nutrientsList", [...this.nutrientsList].slice(0, -1));
      this.nutrientsList.pop();
    },
  },
};
</script>
