<template>
  <div class="button">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "new-menu-button",
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: fit-content;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: capitalize;
  color: antiquewhite;
}

.button:hover {
  background-color: #444;
  cursor: pointer;
}
</style>
