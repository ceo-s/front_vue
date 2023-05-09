<template>
    <div>
        <h2>{{ nutrients.name }}</h2>
        <div class="stats">
        <h3>Б - {{ nutrients.proteins }}</h3>
        <h3>Ж - {{ nutrients.fats }}</h3>
        <h3>У - {{ nutrients.carbohydrates }}</h3>
        <hr style="border-color: black;">
        <h2>Калории - {{ nutrients.calories }}</h2>
        <h2>Вода - {{ nutrients.water }}</h2>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        // nutrientsId: {Number},
        nutrients: {Object},
    },
    mounted() {
        // this.fetchNutrients()
    },
    data() {
        return {
            // nutrientsId: 1,
            // nutrientsData: [],
        }
    },
    methods: {
        async fetchNutrients() {
            this.nutrientsData = (await axios.get("api/nutrients/" + this.nutrientsId + "/")).data
        }
    },
}
</script>

<style lang="scss" scoped>

</style>