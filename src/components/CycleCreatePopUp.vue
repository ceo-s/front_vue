<template>
    <pop-up-back v-if="cycleCreate" @update:visible="this.$store.commit('popUps/setCycleCreate', false)">
    <pop-up>
    <div class="govno">
        <my-input placeholder="Название цикла" v-model="name"/>
        <my-input placeholder="Тезисно опишите цели цикла" v-model="tasks"/>
        <div class="dates">
            <my-calendar @update:date="updateDate($event, 'start')" :min="30" :max="360"/>
        </div>
        <div>{{ date.finish }}</div>
        <my-button @click="createCycle">Confirm: </my-button>
    </div>
    </pop-up>
    </pop-up-back>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        clientId: {Number},
    },
    data() {
        return {
            name: "",
            tasks: "",
            date: {
                start: "",
                finish: "",
            }
            
        }
    },
    methods: {
        updateDate(date, option) {
            this.date.start = date[0].toISOString().split('T')[0]
            this.date.finish = date[1].toISOString().split('T')[0]
            console.log(this.date);
        },
        async createCycle() {
            await axios.post("http://127.0.0.1:8000/api/cycles/", {
                name: this.name, tasks: this.tasks,
                time_start: this.date.start, time_finish: this.date.finish,
                coach: "alex", client: this.clientId,
            })
            .then((resp) => {

            })
            .catch(ex => console.log(ex))
        },
    },
    computed: {
        cycleCreate(){
            return this.$store.state.popUps.cycleCreate
        }
    }
}
</script>

<style lang="scss" scoped>
.govno {
    width: 500px;
    height: 500px;
    background: #6ff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.dates {
    display: flex;
    align-items: center;
    width: 80%;
    gap: 20px;
}
</style>