<template>
  <div class="pm-container">
    <button @click="$emit('plus')">Добавить неделю</button>
    <button @click="$emit('minus')">Удалить неделю</button>
  </div>
</template>

<script>
export default {
  name: "plus-minus",
};
</script>

<style lang="scss" scoped>
.pm-container {
  // position: absolute;
  display: flex;

  flex-direction: row;
  button {
    @include drop-default;
    @include bordered;
    background-color: $color3;
    border: 2px solid $color-purple;
    font-size: large;
    padding: 0.4em;
    width: 16em;
  }
  @media (width < 450px) {
    width: auto;
  }
}
</style>
