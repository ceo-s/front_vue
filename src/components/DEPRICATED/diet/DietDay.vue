<template>
    <div class="day">
        <h2>{{ day.name }}</h2>
        <div class="content">
            <h3>{{ day }}</h3>
            <div v-for="meal in meals">
                <h3>{{ meal.name }}</h3>
                <diet-meal :mealId="meal.id"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import DietMeal from '@/components/diet/DietMeal.vue'
export default {
    components: {
        DietMeal,
    },
    props: {
        day: {Object},
    },
    mounted() {
        console.log("Diet Day mounted", this.day);
        this.fetchMeals()
    },
    data() {
        return {
            meals: []
        }
    },
    methods: {
        async fetchMeals() {
            const data = (await axios.get("api/meals/filter/", {params: {day: this.day.id}})).data
            // const data = (await axios.get("api/diet_days/" + this.day.id + "/")).data
            this.meals = data
            console.log("DICK", data);
        },
    },
    watch: {
        day: {
            handler() {
                this.fetchMeals()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.day {
    margin-top: 6px;
    margin-bottom: 6px;
    width: 100%;
    // height: 100%;
    background: #444;
}
</style>