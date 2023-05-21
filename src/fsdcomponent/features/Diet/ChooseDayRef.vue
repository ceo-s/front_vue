<template>
  <div class="container">
    <arrow-icon @click="nextDay" :direction="'left'" />
    <day-reference :dayRef="dayRefList[currentDay]" />
    <arrow-icon @click="previousDay" :direction="'right'" />
  </div>
</template>

<script>
import DayReference from "@/fsdcomponent/entities/Diet/ui/DayReference.vue";
export default {
  components: {
    DayReference,
  },
  props: {
    dayRefList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentDay: 0,
    };
  },
  methods: {
    nextDay() {
      if (this.currentDay === this.dayRefList.length - 1) this.currentDay = 0;
      else this.currentDay++;
    },
    previousDay() {
      if (this.currentDay === 0) this.currentDay = this.dayRefList.length - 1;
      else this.currentDay--;
    },
  },
  // computed: {
  //   dayRef() {
  //     return this.dayRefList[this.currentDay];
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
