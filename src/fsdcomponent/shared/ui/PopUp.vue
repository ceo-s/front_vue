<template>
  <div>
    <teleport to="body">
      <div
        @click="$emit('update:visible', false)"
        v-if="visible"
        class="pop-up-back"
      >
        <div @click.stop class="pop-up">
          <slot></slot>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { Teleport } from "vue";
export default {
  components: {
    Teleport,
  },
  name: "new-pop-up",
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pop-up-back {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #00000086;
  z-index: 1000;
  display: flex;
}
.pop-up {
  width: min-content;
  height: min-content;
  transition: 1s;
  background: #d8d8d8;
  margin: auto;
  padding: 10px;
  border-radius: 15px;
}
</style>
