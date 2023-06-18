<template>
  <div v-if="programId">
    <div class="programinfo">
      <h2>{{ program.name }}</h2>
      <p>{{ program.time_start }} - {{ program.time_finish }}</p>
      <!-- <h3>Общие рекоменндации по програме:</h3> -->
      <textarea
        class="recommendations"
        v-model="program.description"
      ></textarea>
    </div>
    <div class="builder">
      <default-button :size="0.8" @click="addWeek"
        >Добавить неделю</default-button
      >
      <default-button :size="0.8" @click="delWeek"
        >Удалить неделю</default-button
      >
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
} from "@/components/shared/lib/DateManagment";
import { getProgram } from "@/components/entities/TrainingProgram/api/Get";
import { updateProgram } from "@/components/entities/TrainingProgram/api/Update";
import { transformProgram } from "@/components/entities/TrainingProgram/model/TransformProgram";
import {
  weekdays,
  trainingWeek,
} from "@/components/entities/TrainingProgram/model/Consts";
import TrainingDay from "@/components/entities/TrainingProgram/ui/TrainingDay.vue";
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
.recommendations {
  height: 5em;
  width: 40em;
  max-width: 90%;
}
.weeks {
  position: relative;
  height: fit-content;
  width: 96%;
  display: flex;
  overflow-x: scroll;
  overflow-x: visible;
  button {
    @include drop-default;
    cursor: pointer;
    width: max-content;
    width: 80px;
    min-width: 100px;
    padding: 6px;
    transition: 400ms;
  }
}

.current {
  translate: 0px -4px;
  text-shadow: 0 0 20px $color-purple;
}
</style>
