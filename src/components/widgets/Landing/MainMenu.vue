<template>
  <div>
    <h1>{{ isAuthenticated ? "YES" : "NO" }}</h1>
    <transition name="menuicon">
      <menu-icon
        v-if="!visible && isAuthenticated"
        @click="openMenu"
        id="menu-icon"
        class="positioned"
      />
    </transition>
    <!-- <button class="positioned login-button">Войти</button> -->
    <authenticate-user
      v-if="!isAuthenticated"
      class="positioned login-button"
      :defaultOption="'CoachAuthorization'"
      >Войти</authenticate-user
    >
    <new-aside-menu v-model="visible">
      <h1>{{ $store.state.userInfo.profileInfo }}</h1>
      <button
        class="menu-button"
        @click="$router.push(item.path), (this.visible = false)"
        :key="item.id"
        v-for="item in menuItems"
      >
        {{ item.name }}
      </button>
      <logout-user class="menu-button">Выйти</logout-user>
      <!-- <logot-user></logot-user> -->
    </new-aside-menu>
  </div>
</template>

<script>
import AuthenticateUser from "@/components/features/Coach/AuthenticateUser.vue";
import LogoutUser from "@/components/features/Coach/LogoutUser.vue";
export default {
  components: {
    AuthenticateUser,
    LogoutUser,
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: "Главная", path: "/" },
        { id: 2, name: "Профиль", path: "/profile" },
        { id: 3, name: "Упражнения", path: "/exercises" },
        { id: 4, name: "Программы", path: "/programs" },
        { id: 5, name: "Клиенты", path: "/clients" },
        { id: 6, name: "Питание", path: "/diet" },
      ],
      visible: false,
    };
  },
  methods: {
    openMenu() {
      this.visible = true;
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
  },
};
</script>

<style lang="scss">
.positioned {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  margin: 10px;
}
.login-button {
  @include drop-default;
  font-size: 1.4em;
  cursor: pointer;
}
#menu-icon {
}
.menuicon-leave-to,
.menuicon-enter-from {
  transform: translateX(100px);
}
.menuicon-enter-active {
  transition: 300ms 400ms ease;
}
.menuicon-leave-active {
  transition: 300ms ease;
}
.menu-button {
  @include drop-default;
  width: 100%;
  height: fit-content;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: capitalize;
  color: antiquewhite;
  font-size: 1em;
}

.menu-button:hover {
  background-color: #444;
  cursor: pointer;
}
</style>
