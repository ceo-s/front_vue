<template>
  <div class="auth-container">
    <h1>Registration</h1>
    <input class="auth-input" v-model="username" :placeholder="'username'" />
    <input class="auth-input" v-model="telegram" :placeholder="'telegram'" />
    <input
      class="auth-input"
      type="password"
      @input="(e) => $emit('update:password', e)"
      v-model="password"
      :placeholder="'password'"
    />
    <default-button @click="submitForm">Submit</default-button>
  </div>
</template>

<script>
import { registration, login } from "../api/Auth";
export default {
  data() {
    return {
      username: "",
      telegram: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const data = await registration(
        this.username,
        this.telegram,
        this.password
      );
      console.log(data);
      const resp = await login(this.username, this.password);
      console.log(resp);
      this.$store.commit("auth/setToken", resp.auth_token);
      this.$router.go("/profile");
      setTimeout(() => {
        login(this.username, this.password).then((resp) => {
          console.log(resp);
          this.$store.commit("auth/setToken", resp.auth_token);
          this.$router.go("/profile");
        });
      }, 2000);
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
