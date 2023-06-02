<template>
  <div class="auth-container">
    <h1>Registration</h1>
    <input v-model="username" :placeholder="'username'" />
    <input v-model="telegram" :placeholder="'telegram'" />
    <input
      type="password"
      @input="(e) => $emit('update:password', e)"
      v-model="password"
      :placeholder="'password'"
    />
    <default-button class="submit-button" @click="submitForm"
      >Submit</default-button
    >
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
      setTimeout(() => {
        login(this.username, this.password).then((resp) => {
          console.log(resp);
          this.$store.commit("auth/setToken", resp.auth_token);
          this.$router.push("/profile");
          this.$router.go();
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
.submit-button {
  border: none;
  position: relative;
  // @include neon-border(45deg, $color-blue, $color-pink, 6px, 16px);
}
</style>
