<template>
  <div class="pm-container">
    <button @click="$emit('plus')">+</button>
    <button @click="$emit('minus')">-</button>
  </div>
</template>

<script>
export default {
  name: "plus-minus",
};
</script>

<style lang="scss" scoped>
.pm-container button {
  @include drop-default;
}
</style>
