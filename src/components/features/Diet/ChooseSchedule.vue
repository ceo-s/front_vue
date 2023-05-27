<template>
  <div class="container">
    <div :key="day.id" v-for="(day, i) in dietSchedule" class="day-choice">
      <arrow-icon @click="previousDayType(day.day_type, i)" :size="0.5" />
      <schedule-day
        :scheduleDay="day"
        :dayNutrients="getAnnotation(day.day_type)"
      />
      <arrow-icon
        @click="nextDayType(day.day_type, i)"
        :size="0.5"
        :direction="'bottom'"
      />
    </div>
    <button @click="addDayToSchedule">ADD</button>
    <button @click="deleteDayFromSchedule">DELETE</button>
  </div>
</template>

<script>
// entities
import ScheduleDay from "@/components/entities/DietNutrients/ui/ScheduleDay.vue";
export default {
  components: {
    ScheduleDay,
  },
  props: {
    dietSchedule: { Array },
    dailyNutrientsList: { Array },
  },
  methods: {
    getAnnotation(day_type) {
      return this.dailyNutrientsList.find((val) => val.id === day_type);
    },
    nextDayType(current, i) {
      let index = this.nurtientsIds.indexOf(current);
      if (index === this.dailyNutrientsList.length - 1)
        this.dietSchedule[i].day_type = this.nurtientsIds[0];
      else this.dietSchedule[i].day_type = this.nurtientsIds[index + 1];
    },
    previousDayType(current, i) {
      let index = this.nurtientsIds.indexOf(current);
      if (index === 0) {
        this.dietSchedule[i].day_type = this.nurtientsIds.at(-1);
      } else {
        this.dietSchedule[i].day_type = this.nurtientsIds[index - 1];
      }
    },
    addDayToSchedule() {
      const lastDay = this.dietSchedule.at(-1);
      this.dietSchedule.push({ ...lastDay, count: lastDay.count + 1 });
    },
    deleteDayFromSchedule() {
      this.dietSchedule.pop();
    },
  },
  computed: {
    nurtientsIds() {
      return this.dailyNutrientsList.map((val) => {
        return val.id;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.day-choice {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
