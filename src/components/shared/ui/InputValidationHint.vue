<template>
  <transition name="hint">
    <div class="hint" v-if="visible">
      <div class="content">
        <slot name="text"></slot>
        <question-icon class="question" :size="0.6" v-if="annotated" />
      </div>
      <div class="annotation">
        <slot name="annotation"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "validation-hint",
  props: {
    visible: { Boolean },
    annotated: { Boolean },
  },
};
</script>

<style lang="scss" scoped>
.hint {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  font-size: 0.7em;
}
.content {
  justify-content: center;
  display: flex;
}
.content:active + .annotation {
  opacity: 1;
  display: block;
}
.annotation {
  display: none;
  position: absolute;
  z-index: 1;
  top: -80px;
  left: 0;
  right: 0;
  background: $color3;
  opacity: 0;
}
.question:active {
}
.hint-enter-from,
.hint-leave-to {
  opacity: 0;
}

.hint-enter-active,
.hint-leave-active {
  transition: 400ms;
}
</style>
