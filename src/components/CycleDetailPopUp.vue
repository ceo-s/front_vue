<template>
    <div>
        <pop-up-back @update:visible="close">
            <pop-up>
                <div class="cycle-pop-up">
                <div>{{ cycleInfo.name }}</div>
                <div>{{ cycleInfo.tasks }}</div>
                <div>{{ cycleInfo.time_start }} - {{ cycleInfo.time_finish }}</div>
                <div @click="redirectToProgramView(cycleInfo.id, cycleInfo.client)">Открыть для редактирования</div>
                </div>
            </pop-up>
        </pop-up-back>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {
        this.fetchCycleInfo()
    },
    data() {
        return {
            cycleInfo: {},
        }
    },
    methods: {
        async fetchCycleInfo() {
            const id = this.$store.state.popUps.cycleDetail
            await axios.get(`http://127.0.0.1:8000/api/cycles/${id}/`)
                .then((resp) => {
                    console.log(resp.data);
                    this.cycleInfo = {...resp.data}
                })
                .catch(e => console.log(e))
        },
        close() {
            this.$store.commit('popUps/setCycleDetail', false)
        },
        redirectToProgramView(cycle_id, client_id) {
            if (this.$route.name == "programs") this.close()
            else this.$router.push({name: "programs", query: {cycle_id: cycle_id, client_id: client_id}})
            this.close()
        }
    },
    computed: {
        cycleId() {
            return this.$store.state.popUps.cycleDetail
        },
    }
}
</script>

<style lang="scss" scoped>
.cycle-pop-up {
    width: 300px;
    height: 300px;
}
</style>