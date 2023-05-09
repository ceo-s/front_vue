<template>
    <div class="container">
        <h1>Login</h1>
        <form class="form" @submit.prevent action="" method="post">
        <my-input v-model="username" :placeholder="'username'"/>
        <my-input v-model="password" :placeholder="'password'"/>
        <my-button @click="submitForm">Log in</my-button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        async submitForm(event) {
            await axios.post('http://127.0.0.1:8000/api/auth/token/login/',{username: this.username, password: this.password})
            .then((resp) => {
                let token = resp.data.auth_token;
                this.$store.commit('auth/setToken', token);
            })
            .catch((ex) => console.log(ex))
            .finally(() => {
                this.username = "";
                this.password = "";
            })
        },

    },
}
</script>

<style scoped>

</style>