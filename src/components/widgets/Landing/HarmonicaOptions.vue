<template>
  <div>
    <div class="option" :key="i" v-for="(content, i) in contnets">
      <h2>{{ content.header }}</h2>
      <p v-if="chosen">{{ content.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contnets: { Array },
  },
  data() {
    return {
      chosen: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.option {
  width: 40rem;
  height: 20rem;
  background: #f5f;
}
</style>
