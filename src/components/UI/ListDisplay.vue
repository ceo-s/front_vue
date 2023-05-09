<template>
    <div class="list-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "list-display",
    props: {
        column_width: {String},
    },
}
</script>

<style lang="scss" scoped>
// $minwidth: ;
.list-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(v-bind(column_width), 1fr));
    grid-gap: 20px;
    place-items: start center;
    height: fit-content;
    width: 100%;
}
</style>