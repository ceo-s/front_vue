<template>
  <div>
    <div>
      <default-button
        @click="currentWeekIndex = i"
        :key="i"
        v-for="(week, i) in program.weeks"
      >
        <p>{{ week[0].date }} - {{ week.at(-1).date }}</p>
      </default-button>
      <default-button @click="addWeek"> ADD WEEK </default-button>
      <default-button @click="delWeek"> DELETE WEEK </default-button>
      {{ currentWeekIndex }}
    </div>
    {{ program.name }}
    <textarea v-model="program.description"></textarea>
    <p>{{ program.time_start }} - {{ program.time_finish }}</p>
    <div v-if="this.program.weeks">
      <adaptive-list>
        <training-day
          :day="day"
          :key="i"
          v-for="(day, i) in this.program.weeks[this.currentWeekIndex]"
        />
      </adaptive-list>
    </div>
    <default-button @click="saveProgram">Confirm</default-button>
  </div>
</template>

<script>
import {
  addDays,
  toJSFormattedDate,
} from "@/fsdcomponent/shared/lib/DateManagment";
import { getProgram } from "@/fsdcomponent/entities/TrainingProgram/api/Get";
import { updateProgram } from "@/fsdcomponent/entities/TrainingProgram/api/Update";
import { transformProgram } from "@/fsdcomponent/entities/TrainingProgram/model/TransformProgram";
import { trainingWeek } from "@/fsdcomponent/entities/TrainingProgram/model/Consts";
import TrainingDay from "@/fsdcomponent/entities/TrainingProgram/ui/TrainingDay.vue";
export default {
  components: {
    TrainingDay,
  },
  mounted() {
    // this.fetchProgram();
  },
  data() {
    return {
      program: {},
      currentWeekIndex: -1,
    };
  },
  methods: {
    async fetchProgram() {
      const program = await getProgram(this.programId);
      this.program = { ...program, weeks: transformProgram(program.days) };
      delete this.program.days;
      this.currentWeekIndex = 0;
    },
    saveProgram() {
      updateProgram(this.program);
    },
    addWeek() {
      let week;
      if (this.program.weeks.length) {
        const date = new Date(
          toJSFormattedDate(this.program.weeks.at(-1).at(-1).date)
        );
        week = trainingWeek(
          this.program.id,
          addDays(date, 1).toLocaleDateString()
        );
      } else {
        week = trainingWeek(this.program.id, this.program.time_start);
        console.log(week);
      }
      this.program.weeks.push(week);
      this.program.time_finish = week.at(-1).date;
    },
    delWeek() {
      let week = this.program.weeks.pop();
      if (week) this.program.time_finish = week.at(-1).date;
    },
  },
  watch: {
    programId() {
      this.fetchProgram();
    },
  },
  computed: {
    currentWeek() {
      if (this.currentWeekIndex + 1) {
        return this.program.weeks[this.currentWeekIndex];
      } else return {};
    },
    programId() {
      return this.$store.state.trainingProgram.programId;
    },
  },
};
</script>

<style lang="scss" scoped></style>
