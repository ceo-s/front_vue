<template>
  <div class="auth-container">
    <h1>Login</h1>
    <input
      id="username"
      class="auth-input"
      v-model="username"
      :placeholder="'username'"
    />
    <input
      id="password"
      class="auth-input"
      v-model="password"
      type="password"
      :placeholder="'password'"
    />
    <default-button @click="submitForm">Submit</default-button>
  </div>
</template>

<script>
// import axios from "axios";
import api from "@/fsdcomponent/shared/api/ky";
import { login } from "../api/Auth";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const resp = await login(this.username, this.password);
      this.$store.commit("auth/setToken", resp.auth_token);
      this.$router.go("/profile");
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-container {
  @include flex-centered;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  width: 100%;
}
.auth-input {
  width: 80%;
  height: 40px;
  border-radius: 14px;
  padding-left: 6px;
}
</style>
