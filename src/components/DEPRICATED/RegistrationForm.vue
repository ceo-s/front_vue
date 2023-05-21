<template>
    <div>
        <h1>Registration</h1>
        <form @submit.prevent action="" method="post">
        <my-input v-model="username" :placeholder="'username'"/>
        <my-input v-model="telegram" :placeholder="'telegram'"/>
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
            telegram: "",
            password: "",
        }
    },
    methods: {
        async submitForm(event) {
            console.log(this.username);
            console.log(this.password);
            
            await axios.post('http://127.0.0.1:8000/api/token-auth/users/',{username: this.username, password: this.password, telegram: this.telegram})
            .then((resp) => {
                
            })
            .catch((ex) => console.log(ex))
            await axios.post('http://127.0.0.1:8000/api/auth/token/login/',{username: this.username, password: this.password})
            .then((resp) => {
                let token = resp.data.auth_token;
                this.$store.commit('auth/setToken', token);
            })
            .catch((ex) => console.log(ex))
            .finally(() => {
                this.username = "";
                this.telegram = "";
                this.password = "";
            })
        },

    },
}
</script>

<style scoped>

</style>