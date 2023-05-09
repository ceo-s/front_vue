<template>
    <div v-clickoutside="close" class="multi-select-group">
        <div class="group-options-container">
            <div @click="toggleGroup(i)" class="group-option" :key="i" v-for="(group, i) in optionsGroup">
                {{ group.name }}
            </div>
        </div>
        <div v-for="(group, i) in optionsGroup">
        <multi-select
        @update:chosenOptions="updateChosenOptions($event, group.field)"
        v-show="(selectedGroup === i)"
        :options="group.options"/>
        </div>
    </div>
</template>

<script>
import MultiSelect from './MultiSelect.vue';
export default {
    components: {
        MultiSelect,
    },
    props: {
        optionsGroup: {Array},
    },
    data() {
        return {
            selectedGroup: -1,
            chosenOptions: {}
        }
    },
    methods: {
        updateChosenOptions(chosenOptions, field) {            
            if (!chosenOptions.length) {
                delete this.chosenOptions[field]
            } else {
                this.chosenOptions[field] = chosenOptions
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
    width: min-content;
    background: #666;
}
</style>