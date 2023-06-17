<template>
  <div class="day-ref-container">
    <!-- <div class="textarea-container"> -->
    <!-- <textarea v-model="dayRef.name" ref="day-name" name="day-name"></textarea> -->
    <input
      placeholder="Название дня:"
      class="ghost"
      v-model="dayRef.name"
      ref="day-name"
      name="day-name"
    />
    <!-- <pencil-icon /> -->
    <!-- <h1>{{ dayRef.name }}</h1> -->
    <!-- :style="{ width: width + 2 + 'ch' }" -->
    <!-- <input class="text-input" v-model="dayRef.name" type="text" /> -->
    <!-- </div> -->
    <div class="meals">
      <slot name="meals" :meals="dayRef.meals"></slot>
      <!-- <diet-meal :meal="meal" :key="meal.id" v-for="meal in dayRef.meals" /> -->
      <default-button @click="addMeal">ADD MEAL</default-button>
      <default-button @click="popMeal">POP MEAL</default-button>
    </div>
  </div>
</template>

<script>
import { dietMeal } from "../model/Consts";
export default {
  props: {
    dayRef: { Array },
  },
  methods: {
    addMeal() {
      this.dayRef.meals.push(dietMeal(this.dayRef.id));
    },
    popMeal() {
      this.dayRef.meals.pop();
    },
  },
  computed: {
    width() {
      return this.dayRef.name.length;
    },
  },
};
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
}
.meals {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-grow: 1;
  overflow-y: scroll;
}
.text-input {
  font-size: 2rem;
  font-weight: bolder;
  color: aliceblue;
  padding: 0;
  cursor: text;
  width: 100%;
  overflow-y: auto;
  // box-sizing: border-box;
  // -moz-box-sizing: border-box;
  // -webkit-box-sizing: border-box;
  background: #434;
}
// textarea[name="day-name"] {
//   color: aliceblue;
//   font-size: 2rem;
//   height: fit-content;
//   text-align: center;
// }
.textarea-container {
  padding-top: 5px;
  display: flex;
  width: 100%;
}
input.ghost {
  font-size: 1.6em;
  font-weight: bolder;
}
</style>
