<template>
    <div>
        <my-select v-model="selectedOption" :options="options"/>
    </div>
</template>

<script>
export default {
    name: "sort-select",
    data() {
        return {
            options: [
                {id:1, name: "Name↑", value: ""},
                {id:2, name: "Name↓", value: ""},
            ],
            selectedOption: 0,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>