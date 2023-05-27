<template>
  <div>
    <h1 @click="addDays">+</h1>
    <h1 @click="popDays">-</h1>
  </div>
</template>

<script>
import { dayReference } from "@/fsdcomponent/entities/Diet/model/Consts";
export default {
  props: {
    days: { Array },
  },
  methods: {
    addDays() {
      this.days.push(dayReference(this.programId));
    },
    popDays() {
      this.days.pop();
    },
  },
  computed: {
    programId() {
      return this.$store.state.programs.dietProgramId;
    },
  },
};
</script>

<style lang="scss" scoped></style>
