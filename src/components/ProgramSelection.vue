<template>
    <div class="selects">
    <pop-up-select    
    @update:option="fetchCycles"
    :options="clients">
    <template v-slot:title>
    <plus-svg class="plus"/>
    <p>Клиенты:</p>
    </template>
    <template v-slot:if-empty>
       <div> Похоже что у вас ни одного клиента... </div>
    </template>
    </pop-up-select>
    <pop-up-select
    @update:option="fetchPrograms"
    :options="cycles">
    <template v-slot:title>
    <plus-svg class="plus"/>
    <p> Программы: </p>
    </template>
    <template v-slot:if-empty>
       <div> Для начала выберите клиента: </div>
    </template>
    <template v-slot:extra-block>
       <div @click="openCyclePopUp" class="add"> Добавить: </div>
    </template>
    </pop-up-select>
    </div>
    <div class="selects">
    </div>
    <cycle-create-pop-up :clientId="currentClientId"/>    
</template>

<script>
// import Plus from '@/assets/plus.svg'
import { mapState } from 'vuex';
import axios from 'axios';
import CycleCreatePopUp from './CycleCreatePopUp.vue';
export default {
    components: {
        CycleCreatePopUp
    },
    mounted() {
        this.initializeCycle()
    },
    props: {

    },
    data() {
        return {
            currentClientId: 0,
            cycles: [],
            currentCycleId: 0,
            programs: [],
            currentProgramId: 0,
        }
    },
    methods: {
        initializeCycle() {
            let cycle_id = this.$route.query.cycle_id
            let client_id = this.$route.query.client_id
            if (cycle_id || client_id) {
                this.currentClientId = client_id
                this.currentCycleId = cycle_id
                this.fetchCycles(client_id)
                this.fetchPrograms(cycle_id)
                this.$router.replace({'query': null})
            }
        },
        async fetchCycles(client_id) {
            this.currentClientId = client_id;
            await axios.get('http://127.0.0.1:8000/api/cycles/client_cycles/',
            {params:{client_id: client_id}})
                .then((resp) => {
                    this.cycles = resp.data;
                    this.currentCycleId = Math.min(...this.cycles.map(item => item.id));
                })
                .catch((ex) => console.log(ex))
        },
        async fetchPrograms(cycle_id) {
            this.currentCycleId = cycle_id;
            this.$emit("update:cycle_id", cycle_id)

            // await axios.get('http://127.0.0.1:8000/api/tprograms/get_cycle_programs/',
            // {params:{cycle_id: cycle_id}})
            //     .then((resp) => {
            //         let data = resp.data;
            //         this.programs = data.map(item => {
            //             return {
            //             id: item.id, name: `${item.time_start} - ${item.time_finish}`,
            //             }
            //         })
            //         this.currentProgramId = data.at(-1).id;
            //         console.log(data)
            //     })
            //     .catch((ex) => console.log(ex))
        },
        // defineCurrentProgram(program_id) {
        //     console.log("GOCKO")
        //     this.$emit("update:", program_id)
        // },
        openCyclePopUp() {
            this.$store.commit('popUps/setCycleCreate', true)
            
        },
    },
    computed: {
        ...mapState({
            clients: state => state.userInfo.clients,
        }),
    },
    watch: {
        currentProgramId: {
            handler(program_id) {
                this.$emit("update:programId", program_id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.selects {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}
.plus {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    fill: #FFBD69;
}

.add {
    /* width: 100%; */
    height: 100px;
    background: rgb(82, 51, 82);
    /* border-radius: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #000;
    border-radius: 20px;
    font-size: 400%;
    color: antiquewhite;
    cursor: pointer;
}

</style>