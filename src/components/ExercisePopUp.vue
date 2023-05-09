<template>
    <div v-if="this.$store.state.popUps.exercise">
    <pop-up-back @update:visible="close">
    <pop-up class="exercise">
        <h1>{{ exercise.name }}</h1>
        <h1>{{ exercise.description }}</h1>
        <h1>{{ exercise.id }}</h1>
        <h1>{{ exercise.slug }}</h1>
    </pop-up>
    </pop-up-back>
    </div>
</template>

<script>
import axios from "axios";
export default {
    beforeUpdate() {
        this.fetchExercise()
    },
    data() {
        return {
            exercise: {},
        }
    },
    methods: {
        async fetchExercise() {
            const link = this.$store.state.popUps.exercise
            if (link) {
            await axios.get('http://127.0.0.1:8000/api' + link)
            .then((resp) => {
                this.exercise = resp.data;
            })
            .catch(ex => console.log(ex))
            }
        },
        close() {
            this.$store.commit('popUps/setExercise', '')
        },
    },
    computed: {
    },
}
</script>

<style scoped>
.exercise {
    background: #000;
    width: 60%;
    height: 50vh;
}
</style>