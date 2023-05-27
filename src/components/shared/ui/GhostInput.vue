<template>
  <div>
    <input
      :value="modelValue"
      @input="updateModelValue"
      class="ghost-input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "ghost-input",
  props: {
    modelValue: { String },
    placeholder: { String },
  },
  methods: {
    updateModelValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.ghost-input {
  color: #c0c2ca;
  background: none;
  border-radius: 10px;
  box-shadow: none;
  border: none;
  height: 100%;
  width: 100%;
}
.ghost-input::placeholder {
  color: #c0c2ca;
}
.ghost-input:hover {
  // border: 1px solid #c0c2ca;
  box-shadow: 0 0 5px 1px #c0c2ca inset, 0 0 2px 1px #c0c2ca;
}
</style>
