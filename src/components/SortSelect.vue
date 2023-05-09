<template>
    <div>
        <my-select v-model="selectesOption" :options="options"/>
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
            selectesOption: 0,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>