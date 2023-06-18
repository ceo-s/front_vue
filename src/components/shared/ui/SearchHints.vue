<template>
  <div v-if="visible" class="hints-container">
    <div class="hints">
      <div
        @click="chooseHint(hint)"
        class="hint"
        :key="hint.id"
        v-for="hint in hints"
      >
        {{ hint.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-hints",
  props: {
    hints: { Array },
    visible: { Boolean },
  },
  methods: {
    chooseHint(hint) {
      this.$emit("update:visible", false);
      this.$emit("update:hint", hint);
    },
  },
  watch: {
    hints: {
      handler() {
        this.$emit("update:visible", true);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.hints-container {
  position: absolute;
  top: -9rem;
  .hints {
    border-radius: 0.8em;
    position: relative;
    bottom: 0;
    width: 14rem;
    max-height: 8rem;
    background: $color4;
    overflow-y: scroll;
    z-index: 1;
    .hint {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      border-bottom: 1px solid $color2;
      cursor: pointer;
    }
    .hint:last-child {
      border-bottom: none;
    }
  }
}

.hints-container::after {
  content: "";
  width: 1.4em;
  height: 1.4em;
  position: absolute;
  left: 2em;
  bottom: -1.2em;
  transform: translateY(-15px);
  background-color: $color4;
  rotate: 45deg;
}
</style>
