<template>
  <div>
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
    <aside-menu v-model="visible">
      <div
        @click="
          $router.push('/profile');
          visible = false;
        "
        class="user-demo"
      >
        <div class="text">
          <h3>{{ $store.state.userInfo.profileInfo.name }}</h3>
          <h6>@{{ $store.state.userInfo.profileInfo.user.telegram }}</h6>
        </div>
        <div class="avatar-container">
          <div class="avatar">
            <img :src="$store.state.userInfo.profileInfo.profile_pic" />
          </div>
        </div>
      </div>
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
    </aside-menu>
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
        // { id: 1, name: "Главная", path: "/" },
        // { id: 2, name: "Профиль", path: "/profile" },
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
.menuicon-leave-to,
.menuicon-enter-from {
  transform: translateX(100px);
}
.menuicon-enter-active {
  transition: 200ms 300ms ease;
}
.menuicon-leave-active {
  transition: 200ms ease;
}
.user-demo {
  @include bordered;
  display: flex;
  // border: 4px solid $color1;
  justify-content: space-around;
  align-items: center;
  height: 18vh;
  margin: 0.8em;
  transition: 600ms;
  background: #302c3f36;

  .avatar-container {
    @include neon-border(45deg, $color-blue, $color-pink, 3px, 16px);
    border-radius: 50%;
    width: 25%;
    .avatar {
      aspect-ratio: 1/1;
      overflow: hidden;
      object-fit: cover;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
  }
}
.user-demo:hover {
  background: #302c3f80;
  cursor: pointer;
}
.menu-button {
  @include drop-default;
  @include bordered;
  width: 90%;

  flex-shrink: 1;
  text-transform: capitalize;
  color: $font-color1;
  margin: 0.2em;
  font-size: 1em;
  height: 4.6em;
  transition: 600ms ease;
}
.menu-button:last-of-type {
  @include drop-default;
  width: 100%;
  margin: auto;
  font-size: larger;
  position: absolute;
  // bottom: 20px;
  // inset: 0;
  z-index: 110;
  bottom: 0;
  right: 0;
  &:hover {
    background: none;
    text-shadow: 0 0 50px $color-purple;
  }
}

.menu-button:hover {
  background: #302c3f80;
  cursor: pointer;
}
</style>
