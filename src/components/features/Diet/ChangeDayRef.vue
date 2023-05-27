<template>
  <div>
    <settings-icon @click="$emit('update:modelValue', !modelValue)" />
    <!-- <new-pop-up :visible="updating">
      <day-reference :dayRef="dayRef" />
    </new-pop-up> -->
  </div>
</template>

<script>
// import DayReference from "@/components/entities/Diet/ui/DayReference.vue";
export default {
  components: {
    // DayReference,
  },
  props: {
    modelValue: { Boolean },
    // dayRef: { Object },
  },
  data() {
    return {
      // updating: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
