<template>
  <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
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
  async beforeCreate() {
    await this.$store.dispatch("auth/initStorage");
    if (this.isAuthenticated) {
      await this.$store.dispatch("userInfo/fetchProfileInfo");
    } else {
      await this.$router.push("/");
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
