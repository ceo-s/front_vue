<template>
  <div class="auth-container">
    <h1>Login</h1>
    <input
      id="username"
      v-model="username"
      type="text"
      autocomplete="off"
      :placeholder="'Telegram:'"
    />
    <input
      id="password"
      v-model="password"
      type="password"
      :placeholder="'Password:'"
    />
    <default-button @click="submitForm">Submit</default-button>
  </div>
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
    async submitForm() {
      const resp = await login(this.username, this.password);
      this.$store.commit("auth/setToken", resp.auth_token);
      this.$router.push("/profile");
      this.$forceUpdate();
      this.$emit("update:visible", "aue citati");
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
  input {
    @include drop-default;
    @include bordered;
    background: $color3;
    padding-left: 2ch;
    width: 82%;
    height: 40px;
  }
  input:focus {
    box-shadow: 0 0 10px #000;
  }
}
</style>
