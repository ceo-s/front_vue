<template>
  <div class="exercise-card">
    <img :src="exercise.image" alt="" />
    <div class="content">
      <h2>{{ exercise.name }}</h2>
    </div>
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

<style lang="scss" scoped>
.exercise-card {
  position: relative;
  overflow: hidden;
  object-fit: cover;
  width: 100px;
  cursor: pointer;
  img {
    width: 100%;
  }
  .content {
    height: fit-content;
    translate: 0 -200%;
    // position: absolute;
    inset: 0;
    transition: translate 200ms ease;
    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      bottom: 0;
      left: -50%;
      width: 200%;
      height: 150%;
      background: $color1;
      filter: blur(10px);
    }
  }
}
.exercise-card:hover {
  .content {
    translate: 0 0;
  }
}
</style>
