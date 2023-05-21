<template>
  <div class="meal-container">
    <div class="head">
      <h3>{{ meal.name }}</h3>
    </div>
    <div
      @click="this.detail = !detail"
      v-if="this.meal.food_amount.length"
      :class="{ 'meal-stats-detailed': detail }"
      class="meal-stats"
    >
      <arrow-icon :direction="direction" :size="0.5" />
    </div>
    <div v-if="detail">
      <food-amount
        :foodAmount="food_amount"
        :key="food_amount.id"
        v-for="food_amount in meal.food_amount"
      />
    </div>
  </div>
</template>

<script>
import FoodAmount from "./FoodAmount.vue";
export default {
  components: {
    FoodAmount,
  },
  props: {
    meal: { Object },
  },
  data() {
    return {
      detail: true,
    };
  },
  computed: {
    direction() {
      return this.detail ? "top" : "bottom";
    },
  },
};
</script>

<style lang="scss" scoped>
$head-height: 30px;
.meal-container {
  display: flex;
  flex-direction: column;
  text-align: start;
  background: #999696;
  border-radius: 20px;
  width: 100%;
}
.head {
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
  display: flex;
  align-items: cent/er;
  justify-content: space-between;
  // // background: #000;
}
.meal-stats {
  display: flex;
  justify-content: flex-end;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  background: #534444;
  border-radius: 0 0 20px 20px;
}
.meal-stats-detailed {
  background: none;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-radius: 0%;
}
</style>
