<template>
  <div class="exercise">
    <div class="exercise-main">
      <p style="font-size: 1.4em; font-weight: 600">{{ index + 1 }}</p>
      <div class="name-container">
        <default-search
          class="exercise-name"
          v-model="exercise.name"
          :placeholder="'Упражнение:'"
          :itemsApiLink="'exercises'"
          :searchParams="['name__icontains']"
          @update:searchResults="initHints"
          @focusout="closeHints"
        />
      </div>
      <!-- <h1  style="cursor: pointer; background: #fff">+</h1> -->
      <arrow-icon
        @click="toggleDetail"
        :color="'#83808c'"
        :direction="detailView ? 'top' : 'bottom'"
        :size="0.5"
      />
      <search-hints
        v-model:visible="hintsVisible"
        @update:hint="autocompleteExercise"
        :hints="hints"
      />
    </div>
    <div v-if="detailView" class="exercise-hidden">
      <div class="exercise-info">
        <input
          class="program-input"
          v-model="exercise.sets"
          :placeholder="'Подходы:'"
          type="number"
        />
        <input
          class="program-input"
          v-model="exercise.reps"
          :placeholder="'Повторы:'"
          type="number"
        />
        <input
          class="program-input"
          v-model="exercise.weight"
          :placeholder="'Вес:'"
          type="number"
        />
      </div>
      <input
        class="program-input coment"
        v-model="exercise.comment"
        :placeholder="'Комментарий:'"
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
      hintsVisible: false,
    };
  },
  methods: {
    initHints(results) {
      this.hints = results;
      this.hintsVisible = true;
    },
    closeHints() {
      setTimeout(() => {
        this.hintsVisible = false;
      }, 200);
    },
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
.program-input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 0.3em;
  background: $color4;
  /* margin: 10px; */
  /* background: #000; */
  padding-left: 6px;
  color: aliceblue;
  font-weight: bold;
}
.program-input::placeholder {
  width: 100%;
  color: rgba(182, 182, 182, 0.8);
  font-weight: 100;
}
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
  flex-grow: 1;
  height: 30px;
}
.name-container {
  flex-grow: 1;
  background: $color4;
  margin: 0.2em;
  border-radius: 0.3em;
}
.coment {
  height: 24px;
}
</style>
