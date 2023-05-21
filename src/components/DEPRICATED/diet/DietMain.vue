<!-- Feature -->
<template>
    <div>
        <div class="main-top">
            <div v-for="(day, i) in scheduleDays" class="schedule-day">
                <p @click="nextDayType(day.day_type, i)" class="arrow">⇧</p>
                <h3>{{ day.count }}</h3>
                <div class="schedule-day-info">
                    <p>{{ getDayType(day.day_type) }}</p>
                </div>
                <p @click="previousDayType(day.day_type, i)" class="arrow">⇩</p>
            </div>
            <p @click="addDayToSchedule" class="add-schedule-day">+</p>
            <div @click="deleteDayFromSchedule" class="delete-schedule-day">-</div>
            <div class="add-day"></div>
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
        this.fetchSchedule()
        // TODO спросить у Сани как обратиться к arr прямо отсюда, 
        // чтоб не передавать его параметром
        // Object.prototype.accesByNestedKey =  function (obj, nestedKey) {
        //     for (let key of nestedKey.split(".")) {
        //         obj = obj[key]
        //     }
        //     return obj
        // }

    },
    data() {
        return {
            dietProgramId: 1,
            scheduleDays: [],
            daysNutrients: [],
            currentNutrients: -1,
        }
    },
    methods: {
        async fetchSchedule() {
            const data = (await axios.get("api/diet_schedules/filter/",
                {params: {program: this.dietProgramId}})).data
            this.scheduleDays = data
        },
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
        getDayType(id) {
            console.log("Here id", id);
            if (id) return this.daysNutrients.find((value) => value.id === id).name
        },
        nextDayType(current, i) {
            console.log("Computed", this.nurtientsIds);
            let index = this.nurtientsIds.indexOf(current)
            if (index === this.daysNutrients.length - 1 ) this.scheduleDays[i].day_type = this.nurtientsIds[0]
            else this.scheduleDays[i].day_type = this.nurtientsIds[index + 1]
        },
        previousDayType(current, i) {
            let index = this.nurtientsIds.indexOf(current)
            if (index === 0) {
                this.scheduleDays[i].day_type = this.nurtientsIds.at(-1)
                console.log(this.scheduleDays[i].day_type);
            }
            else {
                this.scheduleDays[i].day_type = this.nurtientsIds[index - 1]
                console.log(this.scheduleDays[i].day_type);
            }
        },
        addDayToSchedule() {
            const lastDay = this.scheduleDays.at(-1)
            this.scheduleDays.push({...lastDay, count: lastDay.count + 1})
        },
        deleteDayFromSchedule() {
            // const lastDay = this.scheduleDays.at(-1)
            // this.scheduleDays.push({...lastDay, count: lastDay.count + 1})
            this.scheduleDays.pop()
        }
    },
    computed: {
        nurtientsIds() {
            return this.daysNutrients.map((val) => {return val.id})
        }
    }
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
.main-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.schedule-day {
    size: 30px 30px;
    background: #538;
    cursor: pointer;
}
.schedule-day-info {
    margin-top: -170px;
    width: 150px;
    height: 100px;
    position: absolute;
    background: rgb(173, 145, 127);
    display: none;
}
.schedule-day:hover .schedule-day-info {
    display: flex;
}
.add-schedule-day {
    font-size: 300%;
    background: #572;
    border-radius: 50%;
    cursor: pointer;
}
.delete-schedule-day {
    font-size: 300%;
    background: rgb(163, 59, 33);
    border-radius: 50%;
    cursor: pointer;
}
</style>