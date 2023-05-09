<template>
    <div>
        <div class="main-top">

        </div>
        <div style="display: flex; justify-content: center;">
        <!-- TODO убирать стрелочки если всего один элемент -->
        <div @click="previousNutrients" class="arrow">←</div>
        <div class="main-bottom">
            <diet-nutrients
            v-if="currentNutrients + 1"
            :nutrients="daysNutrients[currentNutrients]"/>
        </div>
        <div @click="nextNutrients" class="arrow">→</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import DietNutrients from './DietNutrients.vue';
export default {
    components: {
        DietNutrients,
    },
    props: {
        // dietProgramId: {Number}
    },
    mounted() {
        this.fetchNutrients()
    },
    data() {
        return {
            dietProgramId: 1,
            daysNutrients: [],
            currentNutrients: -1,
        }
    },
    methods: {
        async fetchNutrients() {
            const data = (await axios.get("api/nutrients/filter/",
                {params: {diet_program: this.dietProgramId}})).data
            if (data) {
                this.daysNutrients = data
                this.currentNutrients = 0
            }
        },
        nextNutrients() {
            if (this.currentNutrients === this.daysNutrients.length - 1 ) this.currentNutrients = 0
            else this.currentNutrients++
        },
        previousNutrients() {
            if (this.currentNutrients === 0) this.currentNutrients = this.daysNutrients.length - 1
            else this.currentNutrients--
        },
    },
}
</script>

<style lang="scss" scoped>
.arrow {
    font-size: 200%;
    // background: #894;
    size: auto;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
}
</style>