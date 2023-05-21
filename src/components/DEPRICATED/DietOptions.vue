<template>
    <div class="options-main">
    <div class="options-container">
        <div @click="updateCurrentOption('DietList')" class="choice">Food</div>
        <div @click="updateCurrentOption('DietList')" class="choice">Custom meals</div>
        <div @click="updateCurrentOption('DietBuilder')" class="choice">Programs</div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {Number},
    },
    methods: {
        updateCurrentOption(componentName) {
            this.$emit("update:modelValue", componentName)
        }
    }
}
</script>

<style lang="scss" scoped>
.options-main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.options-container {
    display: flex;
    width: 80%;
    justify-content: space-evenly;
}
.choice {
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 200px;
    border-radius: 20px;
    background: #657;
    left: auto;
    right: 0;
    margin: 4px;
    background: linear-gradient(45deg,  #F806CC,#A91079, #2E0249);
    background-size: 300% 300%;
    background-position: 0% 0%;
    transition: background-position 450ms ease;
}
.choice:hover {
    background-position: 100% 100%;
    cursor: pointer;
}

</style>