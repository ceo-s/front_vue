<template>
    <div>
        <list-display :column_width="'400px'" class="food-list">
            <div v-for="food in foods" class="food">
                <h2>{{ food.name }}</h2>
                <div class="food-stats">
                    <p>P</p>
                    <p>{{ food.proteins }}</p>
                    <p>F</p>
                    <p>{{ food.fats }}</p>
                    <p>C</p>
                    <p>{{ food.carbohydrates }}</p>
                    <p>Cals</p>
                    <p>{{ food.calories }}</p>
                </div>
            </div>
        </list-display>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {
        this.fetchFood()
    },
    data() {
        return {
            foods: [],
        }
    },
    methods: {
        async fetchFood() {
            this.foods = (await axios.get("api/foods/")).data
        }
    }
}
</script>

<style scoped>
.food-list {
    grid-template-columns: repeat(auto, 1fr);
    padding: 20px;
}
.food {
    background: #555;
    height: fit-content;
    width: 100%;
}
.food-stats {
    display: grid;
    /* justify-content: space-evenly; */
    grid-template-rows: repeat(2, 40px);
    grid-auto-flow: column;
}
</style>