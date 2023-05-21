<template>
  <div class="buttons">
    <default-button
      :key="option.name"
      @click="$emit('update:modelValue', option)"
      v-for="option in options"
    >
      {{ option.name }}
    </default-button>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [
          { name: "Login", value: "CoachAuthorization" },
          { name: "Registration", value: "CoachRegistration" },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
}
</style>
