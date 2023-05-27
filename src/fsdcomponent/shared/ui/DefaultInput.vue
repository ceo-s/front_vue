<template>
  <div>
    <input
      :value="modelValue"
      @input="updateValue"
      class="main"
      type="text"
      :placeholder="placeholder"
    />
  </div>
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
  height: 100%;
  outline: none;
  border: none;
  border-radius: 4px;
  background: #ffffff52;
  /* margin: 10px; */
  /* background: #000; */
  padding-left: 6px;
  color: aliceblue;
  font-weight: bold;
}
.main::placeholder {
  width: 100%;
  color: rgba(182, 182, 182, 0.8);
  font-weight: 100;
}
</style>
