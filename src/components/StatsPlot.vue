<template>
    <div>
        <line-chart :data="data"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // data: [1,2,3,4,5,6,7,8,9,10,4,5,6,3,7,3,7,2],
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10,4,5,6,3,7,3,7,2],
                datasets: [ { data: [1,2,3,4,5,6,7,8,9,10,4,5,6,3,7,3,7,2]} ]
            },
            option: {},
        }
    }
}
</script>

<style lang="scss" scoped>

</style>