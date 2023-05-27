<template>
  <div>
    <ChangeDayRef class="settings" v-model="updating" />
    <ManageDaysRef :days="daysRef" />
    <default-carousel
      :arrowSize="0.5"
      v-model:currentItemIndex="currentDayIndex"
      :itemsLength="daysRef.length"
      :direction="'row'"
    >
      <NewDayReference v-if="daysRef.length" :dayRef="currenDay">
        <template #meals="{ meals }">
          <NewDietMeal :meal="meal" :key="meal.id" v-for="meal in meals">
            <template #addFoodAmount>
              <AddProduct
                v-if="updating"
                @update:product="
                  (product) =>
                    meal.food_amount.push({
                      product: product,
                      grams: '100',
                      meal: meal.id,
                    })
                "
              />
            </template>
            <template #foodAmount="{ foodAmount }">
              <NewFoodAmount
                :updating="updating"
                :key="amount.id"
                :foodAmount="amount"
                v-for="amount in foodAmount"
              >
                <template #delete
                  ><trash-icon
                    v-if="updating"
                    @click="deleteFood(meal, amount.id)"
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
// import { getReferenceDays } from "@/components/entities/Diet/api/Get";
import AddProduct from "@/components/features/Diet/AddProduct.vue";
import ChangeDayRef from "@/components/features/Diet/ChangeDayRef.vue";
import ManageDaysRef from "@/components/features/Diet/ManageDaysRef.vue";
import NewDayReference from "@/components/entities/Diet/ui/NewDayReference.vue";
import NewDietMeal from "@/components/entities/Diet/ui/NewDietMeal.vue";
import NewFoodAmount from "@/components/entities/Diet/ui/NewFoodAmount.vue";
export default {
  components: {
    AddProduct,
    ChangeDayRef,
    ManageDaysRef,
    NewDayReference,
    NewDietMeal,
    NewFoodAmount,
  },
  props: {
    daysRef: { Array },
  },
  data() {
    return {
      currentDayIndex: 0,
      updating: false,
      mealDetail: false,
    };
  },
  methods: {
    deleteFood(meal, id) {
      meal.food_amount = meal.food_amount.filter((val) => val.id !== id);
    },
  },
  computed: {
    currenDay() {
      return this.daysRef[this.currentDayIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.settings {
  position: absolute;
  width: fit-content;
  height: fit-content;
  inset: 5px;
}
</style>
