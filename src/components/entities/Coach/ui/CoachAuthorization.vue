<template>
  <form @submit.prevent="submitForm" class="auth-container" action="">
    <h1>Login</h1>
    <input
      id="username"
      v-model="username"
      type="text"
      autocomplete="off"
      :placeholder="'Telegram:'"
    />
    <!-- <div>{{ usernameValid }}</div> -->
    <input
      id="password"
      v-model="password"
      type="password"
      :placeholder="'Password:'"
    />
    <div class="blur pink"></div>
    <div class="blur blue"></div>
    <default-button @click="submitForm">Submit</default-button>
  </form>
</template>

<script>
import { login } from "../api/Auth";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // FIXME after removing old token still sends it if page is not reloaded (it is in ky config)
    // TODO after login still does not reload page leading 500 code requests

    async submitForm() {
      const resp = await login(this.username, this.password);

      await this.$store.dispatch("auth/login", resp.auth_token);
      await this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/components/entities/Coach/styles/authform.scss";
</style>
