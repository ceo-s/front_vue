<template>
  <div class="exercise">
    <div class="exercise-main">
      <p style="font-size: 1.4em; font-weight: 600">{{ index + 1 }}</p>
      <default-search
        class="exercise-name"
        v-model="exercise.name"
        :placeholder="'Упражнение:'"
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
.program-input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 4px;
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
