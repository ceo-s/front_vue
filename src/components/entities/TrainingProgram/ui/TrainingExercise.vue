<template>
  <div class="exercise">
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
      <!-- <h1  style="cursor: pointer; background: #fff">+</h1> -->
      <arrow-icon
        @click="toggleDetail"
        :direction="detailView ? 'top' : 'bottom'"
        :size="0.5"
      />
      <search-hints @update:hint="autocompleteExercise" :hints="hints" />
    </div>
    <div v-if="detailView" class="exercise-hidden">
      <div class="exercise-info">
        <default-input v-model="exercise.sets" :placeholder="'Sets:'" />
        <default-input v-model="exercise.reps" :placeholder="'Reps:'" />
        <default-input v-model="exercise.weight" :placeholder="'Weight:'" />
      </div>
      <default-input
        class="coment"
        v-model="exercise.comment"
        :placeholder="'Comment:'"
      />
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
        // this.detailView = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// input {
//   width: 100%;
//   margin: 2px;
//   border-radius: 5px;
// }
.exercise {
  display: flex;
  flex-direction: column;
  width: 94%;
  // height: auto;
  // justify-content: center;
  align-items: center;
}
.exercise-main {
  display: flex;
  // width: 100%;
  align-self: stretch;
  position: relative;
  gap: 4px;
}
.exercise-hidden {
  display: flex;
  flex-direction: column;
  // width: 260px;
  // max-width: 90%;
  // width: 90%;
  // overflow: hidden;
  gap: 4px;
  margin-bottom: 6px;
}
.exercise-info {
  // width: 100%;
  display: flex;
  height: 22px;
  gap: 4px;
}
.exercise-name {
  // width: 90%;
  flex-grow: 1;
  height: 30px;
}
.coment {
  height: 24px;
}
</style>
