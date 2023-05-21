<template>
  <div class="exercise">
    {{ exercise.name }}
    <div class="exercise-main">
      <h1>{{ index + 1 }}</h1>
      <default-search
        class="exercise-name"
        v-model="exercise.name"
        :placeholder="'Упражнение'"
        :itemsApiLink="'exercises'"
        :searchParams="['name__icontains']"
        @update:searchResults="(results) => (hints = results)"
      />
      <h1 @click="toggleDetail" style="cursor: pointer; background: #fff">+</h1>
      <search-hints @update:hint="autocompleteExercise" :hints="hints" />
    </div>
    <div v-if="detailView" class="exercise-hidden">
      <div class="exercise-info">
        <input v-model="exercise.sets" :placeholder="'Sets:'" />
        <!-- <input  :placeholder="'Sets:" />'' -->
        <input v-model="exercise.reps" :placeholder="'Reps:'" />
        <input v-model="exercise.weight" :placeholder="'Weight:'" />
      </div>
      <input v-model="exercise.comment" :placeholder="'Comment:'" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: { Number },
    exercise: { Object },
    dragging: { Boolean },
  },
  data() {
    return {
      detailView: false,
      hints: [],
    };
  },
  methods: {
    toggleDetail() {
      this.detailView = !this.detailView;
    },
    log(e) {
      console.log(e);
    },
    autocompleteExercise(exercise) {
      this.exercise.exercise = exercise.id;
      this.exercise.name = exercise.name;
    },
  },
  watch: {
    dragging(val) {
      console.log("dragging");
      // this.detailView = !val;
      if (val) {
        this.detailView = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  margin: 2px;
  border-radius: 5px;
}
.exercise {
  display: flex;
  flex-direction: column;
  width: 240px;
  height: auto;
}
.exercise-main {
  display: flex;
  width: 100%;
  position: relative;
}
.exercise-hidden {
  display: flex;
  flex-direction: column;
  // width: 260px;
  max-width: 100%;
  overflow: hidden;
}
.exercise-info {
  // width: 100%;
  display: flex;
  width: 100%;
}
.exercise-name {
  background: black;
  width: 90%;
  height: 30px;
}
</style>
