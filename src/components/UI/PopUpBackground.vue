<template>
    <div @click="close" class="back">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "pop-up-back",
    methods: {
        close() {
            this.$emit("update:visible", false)
        },
    },
}
</script>

<style scoped>
.back {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: #333333b7;
    width: 100%;
    height: 100%;
}
</style>