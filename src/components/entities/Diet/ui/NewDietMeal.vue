<template>
  <transition name="meal">
    <div draggable="true" class="meal-container">
      <div class="handle"></div>
      <div class="meal-head">
        <input
          @focusout="updateMeal"
          :value="meal.name"
          class="ghost"
          type="text"
          placeholder="Приём пищи:"
        />

        <slot name="addFoodAmount"></slot>
      </div>
      <div
        v-if="foodAmount.length"
        :class="{ opened: detail }"
        @click="this.detail = !detail"
        class="meal-stats"
      >
        <div class="stats">
          <p>Б{{ nutrientsCount.proteins }}</p>
          <p>Ж{{ nutrientsCount.fats }}</p>
          <p>У{{ nutrientsCount.carbohydrates }}</p>
          <p>{{ nutrientsCount.calories }}ккал</p>
        </div>
        <arrow-icon
          :color="arrowColor"
          :direction="arrowDirection"
          :size="0.5"
        />
      </div>
      <div v-auto-animate class="food-amount">
        <slot v-if="detail" name="foodAmount" :foodAmount="foodAmount"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  getProductNutrients,
  getTotalNutrients,
} from "../model/ProductManaging.js";
// import FoodAmount from "./FoodAmount.vue";
export default {
  props: {
    meal: { Object },
  },
  data() {
    return {
      detail: false,
    };
  },
  methods: {
    updateMeal(e) {
      const meal = { ...this.meal };
      meal.name = e.target.value;
      this.$emit("update:meal", meal);
    },
  },
  computed: {
    foodAmount() {
      return this.meal.food_amount;
    },
    arrowDirection() {
      return this.detail ? "top" : "bottom";
    },
    arrowColor() {
      return this.detail ? "#bbb6c8" : "#302c3f";
    },
    nutrientsCount() {
      const nutrients = this.meal.food_amount.map((foodAmount) =>
        getProductNutrients(foodAmount)
      );
      // const totalNutrients = nutrients.reduce((prev, nutrientVal) => {
      //   return {
      //     proteins: prev.proteins + nutrientVal.proteins,
      //     fats: prev.fats + nutrientVal.fats,
      //     carbohydrates: prev.carbohydrates + nutrientVal.carbohydrates,
      //     calories: prev.calories + nutrientVal.calories,
      //   };
      // });
      const totalNutrients = getTotalNutrients(nutrients);

      for (let key in totalNutrients) {
        console.log(key);
        totalNutrients[key] = Math.round(totalNutrients[key]);
      }
      console.log(this.meal.food_amount);
      console.log(nutrients);
      console.log("Total", totalNutrients);
      return totalNutrients;
    },
  },
  watch: {
    foodAmount: {
      handler(val) {
        console.log("food amount watcher", val);
        this.detail = true;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$head-height: 30px;
.meal-container {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: start;
  background: $color3;
  border-radius: 20px;
  width: 100%;
  scroll-snap-align: start;
  .handle {
    cursor: grab;
    width: 30px;
    height: 1px;
    background: $color5;
    top: 4px;
    left: calc(50% - 15px);
    position: absolute;
    &::after,
    &::before {
      content: "";
      width: 30px;
      height: 1px;
      top: 2px;
      background: $color5;
      position: absolute;
    }
    &::after {
      top: 4px;
    }
  }
  .meal-head {
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    height: 40px;
    display: flex;
    align-items: start;
    // justify-content: space-between;
    input {
      width: 90%;
      font-size: larger;
    }
  }
  .meal-stats {
    display: flex;
    justify-content: flex-end;
    padding-left: 5px;
    padding-right: 15px;
    width: 100%;
    background: $color4;
    border-radius: 0 0 20px 20px;
    height: 30px;
    transition: 400ms;
    .stats {
      display: flex;

      width: 100%;
      align-items: center;
      justify-content: space-around;
      font-size: 0.8em;
      p {
        transition: 400ms;
        color: v-bind(arrowColor);
      }
    }
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
}

.meal-enter-from,
.meal-leave-to {
  opacity: 0;
}
.meal-enter-active,
.meal-leave-active {
  transition: 3s ease;
}
</style>
