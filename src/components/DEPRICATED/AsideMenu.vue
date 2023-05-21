<template>
  <div>
    <transition name="back">
      <div v-if="visible" class="else" @click="close"></div>
    </transition>
    <transition name="menu">
      <div v-if="visible" class="aside">
        <router-link v-for="item in menuItems" :key="item.id" :to="item.path">
          <menu-button @click="close">{{ item.name }}</menu-button>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "aside-menu",
  props: {
    menuItems: { Array },
    visible: { Boolean },
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
    loginPopUp() {
      this.$store.commit("popUps/setAuth", true);
      this.$emit("update:visible", false);
    },
    newLogin() {
      this.$store.commit("popUps/setComponent", "CoachAuthentication");
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style scoped>
.aside {
  background: #222;
  position: fixed;
  height: 100vh;
  min-width: 250px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 10;
}

.else {
  position: fixed;
  background: #333;
  height: 100vh;
  width: 200%;
  opacity: 0.4;
  z-index: 1;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.menu-leave-active,
.menu-enter-active {
  transition: 0.5s ease;
}
.back-enter-from,
.back-leave-to {
  opacity: 0;
}

.back-leave-active,
.back-enter-active {
  transition: 0.5s ease;
}
</style>
