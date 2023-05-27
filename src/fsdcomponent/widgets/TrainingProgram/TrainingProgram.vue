<template>
  <div v-if="programId">
    <div class="programinfo">
      <h2>{{ program.name }}</h2>
      <p>{{ program.time_start }} - {{ program.time_finish }}</p>
      <h3>Общие рекоменндации по програме:</h3>
      <textarea v-model="program.description"></textarea>
    </div>
    <div class="builder">
      <div class="weeks">
        <button
          @click="currentWeekIndex = i"
          :key="i"
          :class="{ current: i === currentWeekIndex }"
          v-for="(week, i) in program.weeks"
        >
          <p>
            {{ week[0].date.slice(0, 5) }} - {{ week.at(-1).date.slice(0, 5) }}
          </p>
        </button>
        <plus-minus @plus="addWeek" @minus="delWeek" />
      </div>
      <div v-if="this.program.weeks">
        <adaptive-list>
          <training-day
            :weekday="weekdays[i]"
            :day="day"
            :key="i"
            v-for="(day, i) in this.program.weeks[this.currentWeekIndex]"
          />
        </adaptive-list>
      </div>
      <default-button @click="saveProgram">Confirm</default-button>
    </div>
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
import {
  weekdays,
  trainingWeek,
} from "@/fsdcomponent/entities/TrainingProgram/model/Consts";
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
      weekdays: weekdays,
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
      this.program.weeks.pop();
      if (this.program.weeks.length)
        this.program.time_finish = this.program.weeks.at(-1).at(-1).date;
    },
  },
  computed: {
    currentWeek() {
      if (this.currentWeekIndex + 1) {
        return this.program.weeks[this.currentWeekIndex];
      } else return {};
    },
    programId() {
      return this.$store.state.programs.trainingProgramId;
    },
  },
  watch: {
    programId() {
      this.fetchProgram();
    },
  },
};
</script>

<style lang="scss" scoped>
.builder {
  background: #ffffff35;
}
.weeks {
  position: relative;
  height: fit-content;
  width: 96%;
  display: flex;
  overflow-x: scroll;
  overflow-y: visible;
}
.weeks button {
  @include drop-default;
  cursor: pointer;
  width: max-content;
  width: 80px;
  min-width: 100px;
  padding: 6px;
}
.current {
  // position: absolute;
  background: #d02424;
  translate: 0px -4px;
}
</style>
