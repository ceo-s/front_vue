<template>
  <div class="logo"><img src="@/assets/pngwing.com.png" alt="" /></div>
  <main-menu />
  <!-- <header></header> -->
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="router" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import MainMenu from "@/components/widgets/Landing/MainMenu.vue";
export default {
  beforeCreate() {
    this.$store.commit("auth/initStorage");
    if (this.isAuthenticated) {
      this.$store.dispatch("userInfo/fetchProfileInfo");
    } else {
      this.$router.push("/");
    }
  },

  components: {
    MainMenu,
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
  },
};
</script>

<style lang="scss">
@import "src/components/shared/styles/main.scss";
</style>
