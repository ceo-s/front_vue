<template>
  <button @click="logout">
    <slot></slot>
  </button>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const logout = () => {
  store.dispatch("auth/logout");
};
</script>

<style lang="scss" scoped></style>
