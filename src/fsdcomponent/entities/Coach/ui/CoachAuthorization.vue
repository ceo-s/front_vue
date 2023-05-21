<template>
  <div>
    <h1>Login</h1>
    <default-input v-model="username" :placeholder="'username'" />
    <default-input v-model="password" :placeholder="'password'" />
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

<style scoped></style>
