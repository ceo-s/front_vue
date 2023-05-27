<template>
  <div class="day-ref-container">
    <h1>{{ dayRef.name }}</h1>
    <div class="meals">
      <diet-meal :meal="meal" :key="meal.id" v-for="meal in dayRef.meals" />
    </div>
  </div>
</template>

<script>
import DietMeal from "./DietMeal.vue";
export default {
  components: {
    DietMeal,
  },
  mounted() {
    // console.log(this.dayRef);
  },
  props: {
    dayRef: { Array },
  },
};
</script>

<style lang="scss" scoped>
.day-ref-container {
  background: #444;
  padding-top: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.meals {
  overflow-y: scroll;
  // max-height: 100px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
