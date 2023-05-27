<template>
  <div class="options-container">
    <div
      @click="selectOption(option)"
      :key="i"
      v-for="(option, i) in options"
      class="option"
    >
      <h2>{{ option.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["select:option"]);
const selectOption = (option) => emits("select:option", option);
const options = [
  { title: "Text", src: "", value: "" },
  { title: "Text + image", src: "", value: "" },
  { title: "Carousel", src: "", value: "" },
];
</script>

<style lang="scss" scoped>
.options-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2px;
}
.option {
  width: 200px;
  height: 120px;
  background: #0d0;
  border: 1px solid black;
  border-radius: 14px;
  cursor: pointer;
  padding: 20px;
}
</style>
