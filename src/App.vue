<template>
  <menu-block/>
  <div>
  </div>
  <div class="content">
    <authorization-pop-up/>
    <router-view style="padding-top: 100px;" v-slot="{Component}">
      <transition name="router" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import MenuBlock from "./components/MenuBlock.vue";
import AuthorizationPopUp from "./components/AuthorizationPopUp.vue";
export default {
  beforeCreate() {
    this.$store.commit('auth/initStorage')
    let token = this.$store.state.auth.token;

    

    if (token) {
      axios.defaults.headers.common['Authorization'] = token
    }
    this.$store.dispatch('userInfo/fetchProfileInfo', "GOVNO")
    this.$store.dispatch('userInfo/fetchClients')
    

  },

  components: {
    AuthorizationPopUp, MenuBlock
  },
  computed: {

  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #20252b;
  font-family: 'Carlito', sans-serif;
  background: #ffffff;
  // margin-top: 84px;
}
::-webkit-scrollbar{
    display: none;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // background: #2a2f35;
}

html, body {
  overflow-x: hidden;
  scrollbar-width: none;
  height: fit-content;
}
body {
  position: relative;
}
a {
  text-decoration: none;
  color: aliceblue;
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
