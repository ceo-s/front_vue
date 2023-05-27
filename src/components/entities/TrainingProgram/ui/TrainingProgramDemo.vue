<template>
  <div>
    <h2>{{ programInfo.name }}</h2>
    <h2>{{ programInfo.time_start }} - {{ programInfo.time_finish }}</h2>
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
