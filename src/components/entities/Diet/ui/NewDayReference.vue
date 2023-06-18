<template>
  <div class="day-ref-container">
    <div class="title">
      <input
        autofocus
        autocomplete="off"
        placeholder="Название дня:"
        class="ghost"
        :value="dayRef.name"
        @focusout="changeName"
        ref="day-name"
        name="day-name"
      />
    </div>

    <div ref="meals" @wheel.prevent="scrollMeals" class="meals">
      <slot name="meals" :meals="dayRef.meals"></slot>
    </div>
    <default-button
      :class="{ 'del-meal': mealDragging }"
      @drop="mealDrop"
      @dragenter.prevent
      @dragover.prevent
      @click="addMeal"
      >{{ buttonText }}</default-button
    >
  </div>
</template>

<script>
import { ref } from "vue";
import { dietMeal } from "../model/Consts";
export default {
  props: {
    dayRef: { Object },
    mealDragging: { Boolean },
  },
  methods: {
    changeName(e) {
      const day = { ...this.dayRef };
      day.name = e.target.value;
      this.$emit("update:day", day);
    },
    addMeal() {
      const day = { ...this.dayRef };
      day.meals.push(dietMeal(this.dayRef.id));
      this.$emit("update:day", day);
    },
    mealDrop() {
      this.$emit("drop:meal");
    },
  },
  computed: {
    width() {
      return `${this.dayRef.name.length}ch`;
    },
    buttonText() {
      return this.mealDragging ? "Удалить" : "Добавить приём пищи";
    },
  },
};
</script>
<script setup>
const meals = ref();
function scrollMeals(e) {
  console.log(e);

  meals.value.scrollBy(0, e.deltaY * 0.3);
}
</script>

<style lang="scss" scoped>
$a: v-bind(width);
.day-ref-container {
  height: 100%;
  width: 100%;
  // height: 1fr;
  // flex-grow: 1;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-top: 2em;
    display: flex;
    width: 110%;
  }
  .meals {
    margin-top: 1em;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    flex-grow: 1;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    @include bordered;
  }
  // button {
  //   height: 5em;
  //   margin-top: auto;
  // }
}
input.ghost {
  text-align: center;
  font-size: 1.6em;
  font-weight: bolder;
  width: v-bind(width);
  width: 100%;
}
.del-meal {
  color: #920000 !important;
  border-color: #920000 !important;
}
</style>
