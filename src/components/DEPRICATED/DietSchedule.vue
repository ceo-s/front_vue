<template>
  <div>
    <div class="container">
      <div class="item" :key="day.id" v-for="day in annotations">
        <arrow-icon />
        <h2>{{ day.day.id }}</h2>
        <arrow-icon :direction="'bottom'" />
        <div>
          <h3 class="annotation">{{ day.day.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDietSchedule } from "../api/Get";
export default {
  props: {
    // scheduleDays: {Array}
  },
  data() {
    return {
      dietSchedule: [
        {
          id: 1,
          count: 1,
          program: 1,
          day_type: 1,
        },
        {
          id: 2,
          count: 2,
          program: 1,
          day_type: 1,
        },
        {
          id: 3,
          count: 3,
          program: 1,
          day_type: 2,
        },
      ],
      days: [
        {
          id: 1,
          name: "Загруз углями",
          water: 5000.0,
          proteins: 200.0,
          fats: 100.0,
          carbohydrates: 450.0,
          calories: 3600.0,
          diet_program: 1,
        },
        {
          id: 2,
          name: "Разгрузочный день",
          water: 3500.0,
          proteins: 250.0,
          fats: 120.0,
          carbohydrates: 200.0,
          calories: 3000.0,
          diet_program: 1,
        },
      ],
    };
  },
  methods: {
    async fetchNutrients() {
      this.sheduleDays = await getDietSchedule(1);
    },
  },
  computed: {
    annotations() {
      return this.dietSchedule.map((val) => {
        return {
          ...val,
          day: this.days.find((val2) => val2.id === val.day_type),
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.annotation {
  background: #5f3;
  display: none;
}
.item:hover .annotation {
  display: block;
  z-index: 100;
}
</style>
