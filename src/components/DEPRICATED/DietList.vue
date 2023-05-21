<template>
  <div>
    <list-display :column_width="'400px'" class="food-list">
      <div :key="food.id" v-for="food in foods" class="food">
        <h2>{{ food.name }}</h2>
        <div class="food-stats">
          <p>P</p>
          <p>{{ food.proteins }}</p>
          <p>F</p>
          <p>{{ food.fats }}</p>
          <p>C</p>
          <p>{{ food.carbohydrates }}</p>
          <p>Cals</p>
          <p>{{ food.calories }}</p>
        </div>
      </div>
    </list-display>
  </div>
</template>

<script>
import axios from "axios";
// import SearchComplex from '@/components/searching/SearchComplex.vue';
export default {
  components: {
    // SearchComplex,
  },
  mounted() {
    this.fetchFood();
  },
  data() {
    return {
      foods: [],
      foodsApiLink: "foods",
      sortOptions: [
        { id: 1, name: "Название в алфавитном", value: "name", order: 1 },
        { id: 2, name: "Название в обратном", value: "name", order: -1 },
        {
          id: 3,
          name: "Калории (сначала калорийные)",
          value: "calories",
          order: 1,
        },
        {
          id: 4,
          name: "Калории (сначала низкокалорийные)",
          value: "calories",
          order: -1,
        },
      ],
    };
  },
  methods: {
    async fetchFood() {
      this.foods = (await axios.get("api/foods/")).data;
    },
  },
};
</script>

<style scoped>
.food-list {
  grid-template-columns: repeat(auto, 1fr);
  padding: 20px;
}
.food {
  background: #555;
  height: fit-content;
  width: 100%;
}
.food-stats {
  display: grid;
  /* justify-content: space-evenly; */
  grid-template-rows: repeat(2, 40px);
  grid-auto-flow: column;
}
</style>
