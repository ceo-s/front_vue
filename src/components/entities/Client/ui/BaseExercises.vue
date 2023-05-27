<template>
  <div class="base-exercises">
    <h2 :key="exercise.id" v-for="exercise in exercises">
      {{ exercise.name }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    exercises: { Object },
  },
};
</script>

<style lang="scss" scoped>
.base-exercises {
  width: 40%;
  height: 100%;
  background: #635;
}
</style>
