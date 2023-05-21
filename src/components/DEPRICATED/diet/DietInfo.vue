<template>
    <div>
        <h1>{{ this.info.name }}</h1>
        <h2>Соколов Алексей</h2>
        <h3>⇦{{ this.info.date_start }} - {{ this.info.date_finish }}⇨</h3>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        // dietId: {Number},
    },
    mounted() {
        this.fetchInfo()
    },
    data() {
        return {
            dietId: 1,
            info: {},
        }
    },
    methods: {
        async fetchInfo() {
            this.info = (await axios.get("api/dprograms/" + this.dietId + "/")).data
        }
    }
}
</script>

<style lang="scss" scoped>

</style>