<template>
    <div>
        <h2><slot></slot></h2>
        <div style="display: flex; justify-content: center; height: 100%;">
        <div @click="previousDay" class="arrow">←</div>
            <!-- TODO  -->
            <diet-day v-if="currentDay + 1" :day="days[currentDay]"/>
        <div @click="nextDay" class="arrow">→</div>
        </div>
        <div class="add-button">Добавить:</div>
    </div>
</template>

<script>
import axios from 'axios';
import DietDay from './DietDay.vue';
export default {
    components: {
        DietDay,
    },
    mounted() {
        console.log("Mounted DietDaysReference");
        this.fetchDays()
    },
    data() {
        return {
            days: [],
            currentDay: -1,
        }
    },
    methods: {
        async fetchDays() {
            // TODO move fetch on one level higher
            const data = (await axios.get("api/diet_days/")).data;
            this.days = data;
            console.log("WHA??", this.days);
            this.currentDay = 0;
        },
        nextDay() {
            if (this.currentDay === this.days.length - 1 ) this.currentDay = 0
            else this.currentDay++
        },
        previousDay() {
            if (this.currentDay === 0) this.currentDay = this.days.length - 1
            else this.currentDay--
        },
    }
}
</script>

<style lang="scss" scoped>
.add-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    border: 2px solid #000;
    border-radius: 20px;
    margin-top: auto;
    cursor: pointer; 
}
.arrow {
    font-size: 200%;
    // background: #894;
    size: auto;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
}
</style>