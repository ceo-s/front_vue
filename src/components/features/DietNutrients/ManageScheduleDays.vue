<template>
  <div>
    <h1 @click="addDay">+</h1>
    <h1 @click="popDay">-</h1>
  </div>
</template>

<script>
import { scheduleDay } from "@/components/entities/Diet/model/Consts";
export default {
  props: {
    nutrientsList: { Array },
    schedule: { Object },
  },
  methods: {
    addDay() {
      // const lastDay = this.schedule.at(-1);
      // this.$emit(
      //   "update:schedule",
      //   [...this.schedule].concat({
      //     ...lastDay,
      //     id: -Math.abs(lastDay.id) - 1,
      //     count: lastDay.count + 1,
      //   })
      // );
      if (this.schedule.length) {
        const day = { ...this.schedule.at(-1) };
        delete day.id;
        day.count++;
        this.schedule.push(day);
      } else {
        this.schedule.push(
          scheduleDay(
            1,
            this.$store.state.programs.dietProgramId,
            this.nutrientsList[0].id
          )
        );
      }
    },
    popDay() {
      // this.$emit("update:schedule", [...this.schedule].slice(0, -1));
      this.schedule.pop();
    },
  },
};
</script>

<style lang="scss" scoped></style>
