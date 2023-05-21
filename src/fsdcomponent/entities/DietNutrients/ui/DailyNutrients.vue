<template>
  <div class="nutrients">
    <h2>{{ dailyNutrients.name }}</h2>
    <div class="stats">
      <div>
        <h3>Белок -</h3>
        <input
          :disabled="updating"
          v-model="dailyNutrients.proteins"
          class="num-input"
          type="number"
        />
      </div>
      <div>
        <h3>Жиры -</h3>
        <input
          :disabled="updating"
          v-model="dailyNutrients.fats"
          class="num-input"
          type="number"
        />
      </div>
      <div>
        <h3>Углеводы -</h3>
        <input
          :disabled="updating"
          v-model="dailyNutrients.carbohydrates"
          class="num-input"
          type="number"
        />
      </div>
    </div>
    <div class="summary">
      <div>
        <h3>Калории:</h3>
        <input
          :disabled="updating"
          v-model="dailyNutrients.calories"
          class="num-input"
          type="number"
        />
      </div>
      <div>
        <h3>Вода:</h3>
        <input
          :disabled="updating"
          v-model="dailyNutrients.water"
          class="num-input"
          type="number"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { getDailyNutrients } from '../api/Get';
export default {
  props: {
    dailyNutrients: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: "Нутриенты",
          water: 0,
          proteins: 0,
          fats: 0,
          carbohydrates: 0,
          calories: 0,
          diet_program: 0,
        };
      },
    },
    updating: { Boolean },
  },
  data() {
    return {};
  },
  methods: {
    // async fetchNutrients() {
    //   await getDailyNutrients()
    // }
  },
};
</script>

<style lang="scss" scoped>
.nutrients {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  text-align: start;
}
.nutrients > h2 {
  text-align: center;
  font-size: 2rem;
}
.nutrients > div {
  display: flex;
  // justify-content: center;
  font-size: larger;
}
.stats {
  justify-content: center;
  flex-direction: column;
  flex-grow: 2;
  padding-left: 5ch;
}
.summary {
  justify-content: space-between;
  text-align: start;
  padding-left: 2ch;
  flex-grow: 1;
  gap: 10px;
}
</style>
