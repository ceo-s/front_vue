<template>
    <div>
        <aside-menu
        @update:authPopUp="(bool) => authPopUp=bool"
        v-model:visible="menu"
        :menuItems="menuItems"/>
        <transition name="menu">
            <img id="menu" @click="menu = true" v-if="!menu" alt="" src="@/assets/menu.png">
        </transition>
        <header></header>
    </div>
</template>

<script>
import { menu as mainMenu } from '@/assets/menu' 
import AsideMenu from "@/components/AsideMenu.vue";
export default {
    components: {
        AsideMenu,
    },
    data() {
        return {
        menu: false,
        menuItems: mainMenu,
        }
    },
}
</script>

<style lang="scss" scoped>
header {
  height: 84px;
  width: 100%;
  position: fixed;
  background: #333;
  z-index: 9;
}
#menu {
  left: 10px;
  top: 10px;
  position: fixed;
  z-index: 11;
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
</style>