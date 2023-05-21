<template>
  <div v-if="visible" class="hints">
    <div
      @click="chooseHint(hint)"
      class="hint"
      :key="hint.id"
      v-for="hint in hints"
    >
      {{ hint.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "search-hints",
  props: {
    hints: { Array },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    chooseHint(hint) {
      this.visible = false;
      this.$emit("update:hint", hint);
    },
  },
  watch: {
    hints: {
      handler() {
        this.visible = true;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.hints {
  position: absolute;
  bottom: 0;
  width: 14rem;
  max-height: 8rem;
  background: #444;
  overflow-y: scroll;
}
.hint {
  height: 30px;
  border: 1px solid black;
  cursor: pointer;
}
</style>
