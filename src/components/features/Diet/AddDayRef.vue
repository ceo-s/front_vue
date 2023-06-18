<template>
  <div>
    <plus-icon class="plus" :color="'#83808c'" @click="addDays" />
  </div>
</template>

<script>
import { dayReference } from "@/components/entities/Diet/model/Consts";
export default {
  props: {
    days: { Array },
  },
  methods: {
    addDays() {
      const days = [...this.days];
      days.push(dayReference(`День ${days.length + 1}`, this.programId));
      this.$emit("update:days", days);
    },
  },
  computed: {
    programId() {
      return this.$store.state.programs.dietProgramId;
    },
  },
};
</script>

<style lang="scss" scoped>
.plus {
  &::before,
  &::after {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    margin: 0;
  }
  &::after {
    content: "Добавить день!";
    display: none;
    top: -150%;
    left: -75%;
    font-size: 1.4em;
    width: 5em;
    background: $color4;
    border-radius: 0.2em;
  }
  &::before {
    content: "";
    display: none;
    top: -55%;
    background: $color4;
    width: 1em;
    height: 1em;
    rotate: 45deg;
    left: 30%;
  }
  @media (width > 450px) {
    &:hover::after,
    &:hover::before {
      display: block;
    }
  }
}
</style>
