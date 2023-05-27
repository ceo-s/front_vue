<template>
  <div>
    <transition name="menuicon">
      <menu-icon v-if="!visible" @click="openMenu" id="menu-icon" />
    </transition>
    <new-aside-menu v-model="visible">
      <new-menu-button
        @click="$router.push(item.path), (this.visible = false)"
        :key="item.id"
        v-for="item in menuItems"
      >
        {{ item.name }}</new-menu-button
      >
      <authenticate-user />
    </new-aside-menu>
  </div>
</template>

<script>
import AuthenticateUser from "@/components/features/Coach/AuthenticateUser.vue";
export default {
  components: {
    AuthenticateUser,
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
};
</script>

<style lang="scss" scoped>
#menu-icon {
  position: fixed;
  right: 0;
  top: 0;
  margin: 10px;
  z-index: 10;
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
</style>
