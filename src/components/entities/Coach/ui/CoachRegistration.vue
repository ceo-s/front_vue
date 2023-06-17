<template>
  <form @submit.prevent="submitForm" class="auth-container" action="">
    <h1>Регистрация</h1>
    <div class="input-container">
      <input v-model="username" :placeholder="'Телеграм:'" />
      <validation-hint :visible="usernameValid">
        <template v-slot:text>
          {{ usernameValid }}
        </template>
      </validation-hint>
    </div>
    <div class="input-container">
      <input
        type="password"
        @input="(e) => $emit('update:password', e)"
        v-model="password"
        :placeholder="'Пароль:'"
      />
      <validation-hint :annotated="true" :visible="passwordValid">
        <template v-slot:text>
          {{ passwordValid }}
        </template>
        <template v-slot:annotation>
          <div style="text-align: end; padding-right: 1em">
            <p :key="key" v-for="(val, key) in passwordDataCheck">
              {{ val }}
            </p>
          </div>
        </template>
      </validation-hint>
    </div>
    <div class="input-container">
      <input
        type="password"
        @input="(e) => $emit('update:password', e)"
        v-model="password2"
        :placeholder="'Подтверждение пароля:'"
      />
      <validation-hint :visible="password2Valid">
        <template v-slot:text>
          {{ password2Valid }}
        </template>
      </validation-hint>
    </div>
    <default-button class="submit-button" @click="submitForm"
      >Submit</default-button
    >
    <div class="blur pink"></div>
    <div class="blur blue"></div>
  </form>
</template>

<script>
import { registration, login } from "../api/Auth";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      passwordDataCheck: {
        length: "",
        lower: "",
        upper: "",
        numbers: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const data = await registration(
        this.username,
        this.username,
        this.password
      );

      // const resp = await login(this.username, this.password);
      // await this.$store.dispatch("auth/login", resp.auth_token);
      // await this.$router.push("/profile");
    },
    serializeUsername() {
      let username = this.username;
      if (username.startsWith("@")) {
        username = username.substring(1);
      }
      return username;
    },
    analizePassword() {
      if (this.password.match(/^(?=.*\d)/)) {
        this.passwordDataCheck.numbers = "Пароль содержит цифры ✅";
      } else {
        this.passwordDataCheck.numbers = "Цифры ❌";
      }
      if (this.password.match(/^(?=.*[a-z])/)) {
        this.passwordDataCheck.lower = "Пароль содержит строчные буквы ✅";
      } else {
        this.passwordDataCheck.lower = "Строчные буквы❌";
      }
      if (this.password.match(/^(?=.*[A-Z])/)) {
        this.passwordDataCheck.upper = "Пароль содержит заглавные буквы✅";
      } else {
        this.passwordDataCheck.upper = "Заглавные буквы❌";
      }
      if (this.password.match(/^[0-9a-zA-Z]{8,}$/)) {
        this.passwordDataCheck.length = "Пароль достаточно длинный✅";
      } else {
        this.passwordDataCheck.length = "Пароль короче 8 символов❌";
      }
    },
  },
  computed: {
    usernameValid() {
      if (this.username && this.username.length <= 5) {
        return "5 chars minimum";
      } else return "";
    },
    passwordValid() {
      if (!this.password) {
        return "";
      }
      this.analizePassword();
      if (
        this.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      ) {
        return "Сильный пароль!";
      } else {
        return "Пароль не соответствует критериям!";
      }
    },
    password2Valid() {
      if (!this.password2) {
        return "";
      }
      if (this.password == this.password2) {
        return "Пароли совпадают!";
      } else {
        return "Пароли не совпадают!";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/components/entities/Coach/styles/authform.scss";
</style>
