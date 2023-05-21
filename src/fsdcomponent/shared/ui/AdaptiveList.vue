<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "adaptive-list",
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 16px;
}
</style>