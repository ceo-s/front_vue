<template>
  <div>
    <transition name="back">
      <div v-if="modelValue" @click="closeMenu" class="background"></div>
    </transition>
    <transition name="aside">
      <aside v-if="modelValue">
        <menu>
          <slot> </slot>
        </menu>
      </aside>
    </transition>
  </div>
</template>

<script>
export default {
  name: "new-aside-menu",
  props: {
    modelValue: { Boolean },
  },
  methods: {
    closeMenu() {
      this.$emit("update:modelValue", false);
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: #222;
  height: 100vh;
  width: 40%;
  min-width: 280px;
  max-width: 360px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
}
@media (max-width: 450px) {
  aside {
    width: 80%;
    min-width: 200px;
  }
}
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #444444a8;
  z-index: 10;
}
.back-leave-to,
.back-enter-from {
  opacity: 0;
}
.back-enter-active,
.back-leave-active {
  transition: 400ms;
}
.aside-leave-to,
.aside-enter-from {
  opacity: 0.5;
  transform: translateX(100%);
}
.aside-enter-active,
.aside-leave-active {
  transition: 700ms;
}
</style>
