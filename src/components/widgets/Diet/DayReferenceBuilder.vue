<template>
  <div>
    <add-day-ref class="add" @update:days="addDay" :days="daysRef" />
    <trash-icon class="del" @click="deleteDay" :size="2" :color="'#83808c'" />
    <default-carousel
      :arrowSize="0.5"
      v-model:currentItemIndex="currentDayIndex"
      :itemsLength="daysRef.length"
      :direction="'row'"
    >
      <NewDayReference
        @drop:meal="mealDrop"
        @update:day="updateDay"
        v-if="daysRef.length"
        :dayRef="currenDay"
        :mealDragging="this.mealDraggingIndex !== null ? true : false"
      >
        <template #meals="{ meals }">
          <NewDietMeal
            @update:meal="(meal) => updateMeal(meal, i)"
            :class="{
              dragging: mealDraggingIndex !== null && mealDraggingIndex === i,
            }"
            @dragstart="startDragMeal(i)"
            @dragend="endDragMeal"
            :meal="meal"
            :key="meal.id"
            v-for="(meal, i) in meals"
          >
            <template #addFoodAmount>
              <AddProduct
                @update:product="(product) => addProduct(meal, product)"
              />
            </template>
            <template #foodAmount="{ foodAmount }">
              <NewFoodAmount
                :updating="updating"
                :key="amount.id"
                :foodAmount="amount"
                v-for="(amount, i) in foodAmount"
              >
                <template #delete
                  ><trash-icon @click="deleteFood(meal, i)"
                /></template>
              </NewFoodAmount>
            </template>
          </NewDietMeal>
        </template>
      </NewDayReference>
    </default-carousel>
  </div>
</template>

<script>
import AddProduct from "@/components/features/Diet/AddProduct.vue";
import NewDayReference from "@/components/entities/Diet/ui/NewDayReference.vue";
import NewDietMeal from "@/components/entities/Diet/ui/NewDietMeal.vue";
import NewFoodAmount from "@/components/entities/Diet/ui/NewFoodAmount.vue";
import AddDayRef from "@/components/features/Diet/AddDayRef.vue";
export default {
  components: {
    AddProduct,
    NewDayReference,
    NewDietMeal,
    NewFoodAmount,
    AddDayRef,
  },
  props: {
    daysRef: { Array },
  },
  data() {
    return {
      currentDayIndex: 0,
      updating: false,
      mealDetail: false,
      mealDraggingIndex: null,
    };
  },
  methods: {
    deleteFood(meal, index) {
      meal.food_amount = meal.food_amount.filter((val, i) => i !== index);
    },
    addDay(days) {
      this.$emit("update:daysRef", days);
      this.currentDayIndex = days.length - 1;
    },
    updateDay(day) {
      console.log("here i make another copy of array");
      const days = [...this.daysRef];
      days[this.currentDayIndex] = day;
      this.$emit("update:daysRef", days);
    },
    deleteDay() {
      const days = this.daysRef.filter((val, i) => {
        return i != this.currentDayIndex;
      });

      console.log("curr day index", this.currentDayIndex);
      this.$emit("update:daysRef", days);
      this.currentDayIndex = this.daysRef.length - 2;
    },
    updateMeal(meal, i) {
      const day = { ...this.daysRef[this.currentDayIndex] };
      day.meals[i] = meal;
      this.updateDay(day);
    },
    addProduct(meal, product) {
      meal.food_amount.push({
        product: product,
        grams: 100,
        meal: meal.id,
      });
    },
    startDragMeal(index) {
      console.log("Dragstart meal", index);
      this.mealDraggingIndex = index;
    },
    endDragMeal() {
      this.mealDraggingIndex = null;
    },
    mealDrop() {
      const day = { ...this.daysRef[this.currentDayIndex] };
      day.meals = day.meals.filter((val, i) => {
        return i !== this.mealDraggingIndex;
      });
      this.updateDay(day);
    },
  },
  computed: {
    currenDay() {
      return this.daysRef[this.currentDayIndex];
    },
    // trashIconColor() {
    //   return this.mealDraggingIndex !== null ? "red" : "#83808c";
    // },
  },
};
</script>

<style lang="scss" scoped>
.add {
  position: absolute;
  width: fit-content;
  height: fit-content;
  inset: 0.8em;
}
.del {
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 0.8em;
  right: 0.8em;
}
</style>
