<template>
  <div>
    <h2>{{ exercise.name }}</h2>
    <h3>{{ descriptionCut }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },
  computed: {
    descriptionCut() {
      return (
        this.exercise.description.slice(0, 100) +
        (this.exercise.description.length > 100 ? "..." : "")
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
