<template>
    <div v-clickoutside="close" class="multi-select-group">
        <div class="group-options-container">
            <div @click="toggleGroup(i)" class="group-option" v-for="(fieldsModels, i) in optionsFieldsModels">
                {{ fieldsModels.name }}
            </div>
        </div>
        <div v-for="(options, i) in optionsGroup">
        <multi-select
        @update:chosenOptions="updateChosenOptions($event, optionsFieldsModels[i].field)"
        v-show="(selectedGroup === i)"
        :options="options"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import MultiSelect from './MultiSelect.vue';
export default {
    components: {
        MultiSelect,
    },
    props: {
        optionsFieldsModels: {Array},
    },
    mounted() {
        this.fetchOptions()
    },
    data() {
        return {
            selectedGroup: -1,
            chosenOptions: {},
            optionsGroup: []
        }
    },
    methods: {
        updateChosenOptions(chosenOptions, field) {
            if (!chosenOptions.length) {
                delete this.chosenOptions[field]
            } else {
                this.chosenOptions[field] = chosenOptions.map((val) => val.id);
            }
            this.$emit("update:chosenOptions", this.chosenOptions)
        },
        toggleGroup(i) {
            if (this.selectedGroup === i) this.selectedGroup = -1
            else this.selectedGroup = i
        },
        close() {
            this.selectedGroup = -1
        },
        async fetchOptions() {
            const fieldsModels = this.optionsFieldsModels
            for (let i in fieldsModels) {
                console.log(i);
                this.optionsGroup.push((await axios.get(`api/${fieldsModels[i].toModel}/`)).data)
            }
        }
    },
    compted: {

    }
}
</script>

<style lang="scss" scoped>
// .multi-select-group {
// // background: #232;
// }
.group-options-container {
    display: flex;
    width: fit-content;
}
.group-option {
    cursor: pointer;
    height: 30px;
    min-width: 60px;
    width: max-content;
    background: #666;
}
</style>