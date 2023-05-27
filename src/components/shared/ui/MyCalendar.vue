<template>
  <div>
    <VueDatePicker
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

<style lang="scss" scoped></style>
