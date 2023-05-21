<template>
    <pop-up-back v-if="$store.state.popUps.addClient" @update:visible="closePopUp">
        <pop-up>
            <div class="add-form">
                <my-input v-model="name" :placeholder="'Имя клиента:'"/>
                <my-input v-model="telegram" :placeholder="'Телеграм клиента:'"/>
                <my-input v-model="description" :placeholder="'Ократкое описание (для души)'"/>
                <my-button @click="createClient">Сохранить</my-button>
            </div>
        </pop-up>
    </pop-up-back>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        visible: {Boolean},
    },
    data() {
        return {
            name: "",
            telegram: "",
            description: "",
        }
    },
    methods: {
        closePopUp() {
            this.$store.commit("popUps/setAddClient", false)
        },
        async createClient() {
            const newClient = (await axios.post("api/clients/", {
                name: this.name, telegram: this.telegram,
                description: this.description
            })).data
            console.log(newClient);
            this.closePopUp()
            this.$store.commit("userInfo/appendClient", newClient)
        }
    }

}
</script>

<style lang="scss" scoped>
.add-form {
    width: 400px;
    height: 250px;

}
</style>