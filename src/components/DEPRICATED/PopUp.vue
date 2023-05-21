<template>
  <div @click.stop class="window">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "pop-up",
};
</script>

<style scoped>
.window {
  position: fixed;
  /* width: 100%;
    height: 100vh; */
  background: #fff;
  /* border-radius: 0 0 20px 20px; */
  border-radius: 20px;
  z-index: 11;
}
</style>
