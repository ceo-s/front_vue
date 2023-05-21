<template>
  <input
    :value="modelValue"
    @input="updateValue"
    class="main"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  // data() {
  // return {
  // modelValue: ""
  // }
  // },
  name: "default-input",
  props: {
    modelValue: { String },
    placeholder: { String },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 30px;
  outline: none;
  /* margin: 10px; */
  /* background: #000; */
}
</style>
