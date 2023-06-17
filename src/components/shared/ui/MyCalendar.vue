<template>
  <div>
    <VueDatePicker
      class="calendar"
      v-model="modelValue"
      @update:model-value="handle"
      :dark="true"
      :locale="'ru'"
      :min-date="minDate.toString()"
      :max-date="maxDate.toString()"
      :enable-time-picker="false"
      range
    />
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "my-calendar",
  setup() {
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      // new Date().toDateString()
      return date;
    };
  },
  created() {
    console.log("ARRA", this.min);
    // this.minDate =
    // this.maxDate =
  },
  components: {
    VueDatePicker,
  },
  props: {
    min: { Number },
    max: { Number },
  },
  data() {
    return {
      minDate: new Date().addDays(-this.min).toDateString(),
      maxDate: new Date().addDays(this.max).toDateString(),
      modelValue: "",
    };
  },
  methods: {
    handle(date) {
      this.$emit("update:date", date);
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.calendar {
  --dp-font-size: 0.8rem;
  --dp-border-radius: 16px;
  --dp-overlay-col-padding: 3px;
  --dp-background-color: #302c3f !important;
  --dp-text-color: #dad5e7;
  --dp-hover-text-color: #dad5e7;
  --dp-hover-icon-color: #959595;
  --dp-primary-text-color: #dad5e7;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #83808c;
  --dp-menu-border-color: #dd0000;
  --dp-border-color-hover: #bbb6c8;
  --dp-disabled-color: #737373;
  --dp-scroll-bar-background: #302c3f;
  --dp-scroll-bar-color: #302c3f;
  --dp-success-color: #00ffab;
  --dp-success-color-disabled: #00ffab;
  --dp-icon-color: #bbb6c8;
  --dp-danger-color: #ff4980;
  --dp-highlight-color: rgba(7, 118, 223, 0.897);
  .dp__menu {
    font-size: 0.8em;
    --dp-hover-color: #6a62887e;

    --dp-background-color: #302c3f !important;
    --dp-primary-color: #4f56ff;

    --dp-common-transition: all 0.1s ease-in;
    --dp-menu-padding: 4px 6px;
    --dp-animation-duration: 0.1s;
    --dp-menu-appear-transition-timing: cubic-bezier(0.4, 0, 1, 1);
    --dp-transition-timing: ease-out;
    --dp-action-row-transtion: all 0.2s ease-in;
    --dp-cell-border-radius: 4px;
    --dp-transition-length: 22px;
    --dp-transition-timing-general: 0.1s;
    --dp-button-height: 35px;
    --dp-month-year-row-height: 30px;
    --dp-month-year-row-button-size: 25px;
    --dp-button-icon-height: 20px;
    --dp-calendar-wrap-padding: 0 5px;
    --dp-cell-size: 30px;
    --dp-cell-padding: 5px;
    --dp-common-padding: 10px;
    --dp-input-icon-padding: 30px;
    --dp-input-padding: 6px 30px 6px 12px;
    --dp-menu-min-width: 260px;
    --dp-action-buttons-padding: 1px 6px;
    --dp-row-maring: 1px 0;
    --dp-calendar-header-cell-padding: 0.5rem;
    --dp-multi-calendars-spacing: 4px;
    --dp-time-inc-dec-button-size: 32px;
    --dp-preview-font-size: 0.8rem;
    --dp-time-font-size: 2rem;
    --dp-action-button-height: 22px;
  }
}
</style>
