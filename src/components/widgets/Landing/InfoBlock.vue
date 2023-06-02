<template>
  <div class="block">
    <div class="icon-container">
      <component :is="icon"></component>
    </div>
    <h4><slot name="header"></slot></h4>
    <p><slot name="content"></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    icon: { String },
  },
};
</script>

<style lang="scss" scoped></style>
