<template>
    <div>
        <h2><slot></slot></h2>
        <div class="supplements-container">
            <div v-if="!supplements.length">Добавьте продукты!</div>
            <div v-for="supplement in supplements">
                <div class="supplement">{{ supplement.name.name }}</div>
            </div>
        </div>
        <div @click="visible = true" class="add-button">Добавить:</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        // programId: {Number},
    },
    mounted() {
        this.fetchSupplements()
    },
    data() {
        return {
            supplements: [],
            programId: 1,
        }
    },
    methods: {
        async fetchSupplements() {
            this.supplements = (await axios.get("api/supplements_amount/filter/",
                {params: {program: this.programId}})).data
        }
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
.supplements-container {
    margin-bottom: 10px;
    margin-top: 10px;
    border: 2px solid black;
    border-radius: 20px;
    flex-grow: 1;
    max-height: 250px;
    overflow-y: scroll;
}
.supplement {
    // margin-top: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;
    height: 36px;
    // border-top: 2px solid black;
    border-bottom: 2px solid black;
    // border-radius: 20px;
}
</style>