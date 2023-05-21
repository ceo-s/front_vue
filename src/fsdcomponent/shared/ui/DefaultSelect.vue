<template>
  <div class="select-container" v-clickoutside="close">
    <div @click="toggleSelect" class="select">
      <h3>{{ currentOption || "Sort:" }}</h3>
      <h3 @click="resetOption" v-if="currentOption">❌</h3>
    </div>
    <div v-if="visible" class="options">
      <div v-if="!options" class="option disabled">Select sort option</div>
      <div
        :key="option.id"
        @click="chooseOption(option)"
        v-for="option in options"
        class="option"
      >
        <h3>{{ option.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "default-select",
  props: {
    modelValue: { Object },
    options: { Array },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggleSelect() {
      this.visible = !this.visible;
    },
    close() {
      this.visible = false;
    },
    chooseOption(option) {
      this.visible = false;
      this.$emit("update:modelValue", option);
    },
    resetOption() {
      this.$emit("update:modelValue", {
        id: 0,
        name: "Sort:",
        value: "name",
        order: 1,
      });
    },
  },
  computed: {
    currentOption() {
      if (this.modelValue.id) {
        return this.options.find((val) => val.id === this.modelValue.id).name;
      } else return null;
    },
  },
};
</script>

<style lang="scss" scoped>
$width: 200px;
$border-width: 2px;
.select-container {
  display: flex;
  flex-direction: column;
  position: absolute;
}
.select {
  height: 50px;
  width: $width;
  border: $border-width solid #000;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
  align-items: center;
  z-index: 0;
  // position: absolute;
  cursor: pointer;
}
.options {
  min-height: fit-content;
  max-height: 300px;
  overflow-y: scroll;
  width: fit-content;
  background: #fff;
  border: $border-width solid #000;
  border-top: none;
  // border-radius: 0 0 15px 15px;
}
.option {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: calc($width - ($border-width * 2));
  cursor: pointer;
}
.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
