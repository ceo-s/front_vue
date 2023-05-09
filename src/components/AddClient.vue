<template>
    <div>
        <add-client-pop-up/>
        <my-button @click="openPopUp">
            Добавить пользователя
        </my-button>
    </div>
</template>

<script>
import AddClientPopUp from './AddClientPopUp.vue';
export default {
    components: {
        AddClientPopUp,
    },
    data() {
        return {

        }
    },
    methods: {
        openPopUp() {
            this.$store.commit("popUps/setAddClient", true)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>