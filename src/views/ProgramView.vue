<template>
    <div class="main">
        <program-selection @update:cycle_id="id => cycle_id = id"/>
        <div v-show="cycle_id">
        
        <program-full :cycle_id="cycle_id"/>
        
        </div>
        <program-helper v-show="!cycle_id"/>
    </div>
</template>

<!-- :selectedOption="currentClientId" -->
<!-- :selectedOption="currentCycleId" -->

<script>
import axios from 'axios';
import ProgramSelection from '@/components/ProgramSelection.vue';
import ProgramFull from '@/components/ProgramFull.vue';
import ProgramHelper from '@/components/ProgramHelper.vue'

export default {
    components: {
        ProgramSelection, ProgramFull, ProgramHelper
    },
    mounted() {
        // this.initializeCycle()
    },
    data() {
        return {
            cycle_id: 0,
            program_id: 0,
        }
    },
    methods: {
        // initializeCycle() {
        //     let cycle_id = this.$route.query.cycle_id
        //     this.cycle_id = cycle_id ? cycle_id : 0
        //     // if (this.$route.query.cycle_id) this.cycle_id
        // }
        // async confirmSave(program) {
        //     console.log(program);
        //     await axios.post('http://127.0.0.1:8000/api/tprograms/', 
        //     {weekly_program: program, cycle: this.cycle_id})
        //         .then((resp) => {

        //         })
        //         .catch(ex => console.log(ex))
        // },
        // govno(id) {
        //     console.log(id);
        //     this.program_id = id;
        // },
    },
    computed: {

    }

}
</script>

<style lang="scss" scoped>
.main {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.selects {
    display: flex;
}
</style>