<template>
    <div @click="openSelectPopUp" id="select">
    <slot name="title"></slot>
    </div>
    <pop-up-back v-if="popUpVisible" @update:visible="popUpVisible = false">
    <pop-up class="popup">
    <slot name="title"></slot>

    <div
    @click="chooseOption(option.id)"
    v-for="option in options"
    :key="option.id"
    class="option">
        <h1>{{ option.name }}</h1>
    </div>
    <slot v-if="!options.length" name="if-empty"></slot>
    <slot name="extra-block"></slot>
    </pop-up>
    </pop-up-back>
</template>

<script>
export default {
    name: "pop-up-select",
    props: {
        // selectedOption: {Number},
        options: {Array},
    },
    data() {
        return {
            selectedOption: 0,
            popUpVisible: false,
        //     options: [
        //         {id:1, name: "Some", telegram: "tg"},
        //         {id:2, name: "Some2", telegram: "tg2"},
        //         {id:3, name: "Some1", telegram: "tg3"},
        // ],
        }
    },
    methods: {
        openSelectPopUp(event) {
            this.popUpVisible = true;
        },
        chooseOption(id) {
            this.popUpVisible = false;
            this.selectedOption = id;
            this.$emit("update:option", id)
        },
        govno() {
            this.popUpVisible = false;
        }
    }
}
</script>

<style scoped>
#select {
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
#select:hover {
    background-position: 100% 100%;
    cursor: pointer;
}
#select:hover .plus {
    filter: blur(5px);
}
.popup {
    width: 40%;
    height:400px;
    overflow:scroll;
    background:none;
}
.option {
    /* width: 100%; */
    height: 100px;
    background: rgb(175, 123, 175);
    /* border-radius: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #000;
}
.option:nth-child(1) {
    border-top: none;
}
.option:hover {
    cursor: pointer;
}
</style>