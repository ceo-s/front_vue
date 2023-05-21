<template>
  <div>
    <h1 @click="addNutrients">+</h1>
    <h1 @click="popNutrients">-</h1>
  </div>
</template>

<script>
export default {
  props: {
    nutrientsList: { Object },
  },
  methods: {
    addNutrients() {
      // const lastDay = this.nutrientsList.at(-1);
      // this.$emit(
      //   "update:nutrientsList",
      //   [...this.nutrientsList].concat({
      //     ...lastDay,
      //     id: -Math.abs(lastDay.id) - 1,
      //     count: lastDay.count + 1,
      //   })
      // );
      if (this.nutrientsList.length) {
        this.nutrientsList.push({
          name: "Somename",
          water: 0,
          proteins: 0,
          fats: 0,
          carbohydrates: 0,
          calories: 0,
          // TODO надо бы сюда диет програм живой сделать
          diet_program: 1,
        });
      } else {
        // this.nutrientsList.push({ count: 1 , day_type: });
      }
    },
    popNutrients() {
      // this.$emit("update:nutrientsList", [...this.nutrientsList].slice(0, -1));
      this.nutrientsList.pop();
    },
  },
};
</script>
