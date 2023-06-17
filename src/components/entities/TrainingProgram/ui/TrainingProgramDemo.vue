<template>
  <div>
    <h2>{{ programInfo.name }}</h2>
    <p>{{ programInfo.time_start }} - {{ programInfo.time_finish }}</p>
  </div>
</template>

<script>
export default {
  props: {
    programInfo: { Object },
  },
};
</script>

<style lang="scss" scoped></style>
