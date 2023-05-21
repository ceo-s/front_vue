<template>
  <div>
    <h1>{{ programInfo.name }}</h1>
    <h3>{{ programInfo.date_start }} - {{ programInfo.date_finish }}</h3>
    <div v-if="!detail">
      <p>{{ descriptionCut }}</p>
    </div>
    <div v-if="detail">
      <p>{{ programInfo.description }}</p>
    </div>
    <arrow-icon @click="this.detail = !detail" :direction="arrowDirection" />
  </div>
</template>

<script>
export default {
  props: {
    programInfo: { Object },
  },
  data() {
    return {
      detail: false,
    };
  },
  computed: {
    descriptionCut() {
      return this.programInfo.description.slice(0, 50) + "...";
    },
    arrowDirection() {
      if (this.detail) return "top";
      else return "bottom";
    },
  },
};
</script>

<style lang="scss" scoped></style>
