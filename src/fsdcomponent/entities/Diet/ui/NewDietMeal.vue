<template>
  <div class="meal-container">
    <div class="meal-head">
      <h3>{{ meal.name }}</h3>
      <slot name="addFoodAmount"></slot>
    </div>
    <div
      v-if="meal.food_amount.length"
      :class="{ opened: detail }"
      @click="this.detail = !detail"
      class="meal-stats"
    >
      <arrow-icon :direction="direction" :size="0.5" />
    </div>
    <div v-auto-animate class="food-amount">
      <slot
        v-if="detail"
        name="foodAmount"
        :foodAmount="meal.food_amount"
      ></slot>
    </div>
    <!-- <div class="head"></div>
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
    </div> -->
  </div>
</template>

<script>
// import FoodAmount from "./FoodAmount.vue";
export default {
  // components: {
  //   FoodAmount,
  // },
  props: {
    meal: { Object },
  },
  data() {
    return {
      detail: false,
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
  background: #474747;
  border-radius: 20px;
  width: 100%;
}
.meal-head {
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // // background: #000;
}
.meal-stats {
  display: flex;
  justify-content: flex-end;
  padding-left: 5px;
  padding-right: 15px;
  width: 100%;
  background: #686868;
  border-radius: 0 0 20px 20px;
  height: 30px;
}
.opened {
  position: relative;
  background: none;
  border-radius: 0%;
  transition: 200ms;
}
.opened::before {
  content: "";
  position: absolute;
  left: 5%;
  top: 0;
  height: 1px;
  width: 90%; /* or 100px */
  border-top: 1px solid rgb(33, 33, 33);
}
.opened::after {
  content: "";
  position: absolute;
  left: 10%;
  bottom: 0;
  height: 1px;
  width: 80%; /* or 100px */
  border-top: 1px solid rgb(33, 33, 33);
}
</style>
