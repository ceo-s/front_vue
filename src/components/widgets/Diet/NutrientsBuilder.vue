<template>
  <div>
    <manage-nutrients :nutrientsList="nutrientsList" />
    <!-- <ChangeDayRef class="settings" v-model="updating" /> -->
    <h1>БЖУ</h1>
    <div
      v-if="nutrientsList.length"
      @click="scheduleVisible = !scheduleVisible"
    >
      Открыть схему приёма
    </div>
    <div v-if="scheduleVisible" class="scheme">
      <div ref="schedule" @wheel.prevent="horizontalScroll" class="schedule">
        <div :key="day.day_type" v-for="day in schedule">
          <diet-schedule :scheduleDay="day" :nutrientsList="nutrientsList">
            <template #nutrients="{ nutrients }">
              <schedule-day :scheduleDay="day" :dayNutrients="nutrients">
              </schedule-day>
            </template>
            <template #managment> </template>
          </diet-schedule>
        </div>
        <manage-schedule-days
          @update:schedule="
            (schedule) => this.$emit('update:schedule', schedule)
          "
          :nutrientsList="nutrientsList"
          :schedule="schedule"
        />
      </div>
      <div class="scheme-content">
        <p :key="i" v-for="(str, i) in nutrientsCyclingScheme">{{ str }}</p>
      </div>
    </div>
    <default-carousel
      v-model:currentItemIndex="currentNutrientsIndex"
      :itemsLength="nutrientsList.length"
      :direction="'row'"
      :arrowSize="0.6"
    >
      <daily-nutrients
        v-if="currenNutrients"
        :updating="updating"
        :dailyNutrients="currenNutrients"
      />
    </default-carousel>
  </div>
</template>

<script>
// import ChangeDayRef from "@/components/features/Diet/ChangeDayRef.vue";
import ScheduleDay from "@/components/entities/DietNutrients/ui/ScheduleDay.vue";
import DietSchedule from "@/components/entities/DietNutrients/ui/DietSchedule.vue";
import DailyNutrients from "@/components/entities/DietNutrients/ui/DailyNutrients.vue";
import ManageScheduleDays from "@/components/features/DietNutrients/ManageScheduleDays.vue";
import ManageNutrients from "@/components/features/DietNutrients/ManageNutrients.vue";
export default {
  components: {
    // ChangeDayRef,
    DailyNutrients,
    ScheduleDay,
    DietSchedule,
    ManageScheduleDays,
    ManageNutrients,
  },
  props: {
    nutrientsList: { Array },
    schedule: { Array },
  },
  data() {
    return {
      currentNutrientsIndex: 0,
      scheduleVisible: false,
      updating: false,
    };
  },
  methods: {
    horizontalScroll(e) {
      this.$refs.schedule.scrollBy({ left: e.deltaY < 0 ? -80 : 80 });
    },
  },
  computed: {
    nutrientsMapping() {
      const mapping = {};
      for (let day of this.schedule) {
        mapping[day.day_type] = this.nutrientsList.find(
          (val) => val.id === day.day_type
        );
      }
      return mapping;
    },
    currenNutrients() {
      return this.nutrientsList[this.currentNutrientsIndex];
    },
    nutrientsCyclingScheme() {
      let content = ["Циклирование БЖУ по схеме:"];
      for (let day of this.schedule) {
        content.push(
          String(day.count) +
            " день - " +
            this.nutrientsMapping[day.day_type].name
        );
      }
      return content;
    },
  },
};
</script>

<style lang="scss" scoped>
.scheme {
  margin-top: 5rem;
  position: absolute;
  z-index: 1;
  width: 80%;
  height: 80%;
  background: #2a2537;
}
.schedule {
  display: flex;
  align-items: center;
  overflow-x: scroll;
}
.schedule::-webkit-scrollbar {
  display: inline;
  -webkit-appearance: scrollbarbutton-left;
}
.scheme-content {
  padding-top: 20px;
  line-height: 1.2rem;
  background: red;
  height: 70%;
  overflow-y: scroll;
}
</style>
