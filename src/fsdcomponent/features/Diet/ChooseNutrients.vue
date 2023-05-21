<template>
  <div class="nutrients">
    <arrow-icon @click="previousNutrients" :direction="'left'" />
    <daily-nutrients :dailyNutrients="dailyNutrientsList[currentNutrients]" />
    <arrow-icon @click="nextNutrients" :direction="'right'" />
  </div>
</template>

<script>
import DailyNutrients from "@/fsdcomponent/entities/DietNutrients/ui/DailyNutrients.vue";
export default {
  components: {
    DailyNutrients,
  },
  props: {
    dailyNutrientsList: { Array },
    // dietSchedule: { Array },
  },
  mounted() {},
  data() {
    return {
      currentNutrients: 0,
    };
  },
  methods: {
    nextNutrients() {
      if (this.currentNutrients === this.dailyNutrientsList.length - 1)
        this.currentNutrients = 0;
      else this.currentNutrients++;
    },
    previousNutrients() {
      if (this.currentNutrients === 0)
        this.currentNutrients = this.dailyNutrientsList.length - 1;
      else this.currentNutrients--;
    },
  },
};
</script>

<style lang="scss" scoped>
.nutrients {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.main {
  display: flex;
}
</style>
