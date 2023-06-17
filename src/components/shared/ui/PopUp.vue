<template>
  <div>
    <transition name="popup">
      <dialog
        v-bind="$attrs"
        name="dialog"
        @click="closeOnClickOutside"
        ref="popup"
      >
        <slot></slot>
      </dialog>
    </transition>
  </div>
</template>

<script>
export default {
  name: "pop-up",
  inheritAttrs: false,
  props: {
    visible: { type: Boolean },
  },
  // mounted() {
  //   if (this.visible) {
  //     this.$refs.popup.showModal();
  //   }
  // },
  methods: {
    closeOnClickOutside(e) {
      if (e.target.getAttribute("name") === "dialog") {
        console.log("Vasya!!");
        this.$refs.popup.close();
        this.$emit("update:visible", false);
      }
    },
  },
  watch: {
    visible(val) {
      console.log("WATCH POPUP");
      if (val) {
        this.$refs.popup.showModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes enter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog[open],
dialog[open]::backdrop {
  animation: enter 260ms ease;
}
dialog {
  width: fit-content;
  height: fit-content;
  background: $color1;
  margin: auto;
  border-radius: 15px;
}
dialog::backdrop {
  background: #000000af;
}
.popup-leave-to,
.popup-enter-from {
  opacity: 0;
}
.popup-enter-active,
.popup-leave-active {
  transition: ease 200ms;
}
</style>
