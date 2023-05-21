<template>
  <div class="logo"><img src="@/assets/pngwing.com.png" alt="" /></div>
  <main-menu />
  <header></header>
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="router" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import axios from "axios";
import MainMenu from "@/fsdcomponent/widgets/Landing/MainMenu.vue";
export default {
  beforeCreate() {
    this.$store.commit("auth/initStorage");
    let token = this.$store.state.auth.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    }
    this.$store.dispatch("userInfo/fetchProfileInfo", "GOVNO");
    this.$store.dispatch("userInfo/fetchClients");
  },

  components: {
    MainMenu,
  },
  computed: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eae3da;
  font-family: "Carlito", sans-serif;
  background: #ffffff;
}
::-webkit-scrollbar {
  display: none;
}
// @import "@/fsdcomponent/shared/styles/mixins.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // background: #2a2f35;
}

html,
body {
  font-family: "Bebas Neue", sans-serif;
  overflow-x: hidden;
  scrollbar-width: none;
  height: fit-content;
  // background: #20252b;
}
header {
  display: flex;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 0;
  background: rgb(37, 40, 44);
}
body {
  // position: relative;
  background: #20252b;
  // @include flex-centered;
}
a {
  text-decoration: none;
  color: aliceblue;
}

h1 {
  // font-family: "Bebas Neue", sans-serif;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #a3bbd3;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#menu {
  left: 10px;
  top: 10px;
  position: fixed;
  z-index: 100;
}
#menu:hover {
  cursor: pointer;
  scale: 1.01;
}
.logo {
  display: flex;
  position: fixed;
  inset: 0;
  z-index: 1000;
  width: min-content;
  height: min-content;
  height: 70px;
  align-items: center;
}
.logo img {
  width: 60px;
  height: 60px;
}

.content {
  background: #20252b;
  padding-top: 100px;
}
textarea.textarea {
  resize: none;
  background: none;
  outline: none;
  border: none;
}
.text-input-container {
  display: flex;
  width: fit-content;
  height: fit-content;
}
.text-input[type="text"] {
  background: none;
  outline: none;
  border: none;
}
.num-input[type="number"] {
  text-align: right;
}
.num-input[type="number"]:disabled {
  color: currentColor;
  background: none;
  outline: none;
  border: none;
  appearance: textfield;
  -moz-appearance: textfield;
  font-size: medium;
}

.num-input[type="number"]:disabled::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
.router-enter-from {
  transform: translateX(-30%);
  opacity: 0;
}
.router-leave-to {
  transform: translateX(30%);
  opacity: 0;
}

.router-leave-active,
.router-enter-active {
  transition: 0.25s ease-in;
}
</style>
