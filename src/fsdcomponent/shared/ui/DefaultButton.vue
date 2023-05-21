<template>
    <button class="default-button">
        <slot>

        </slot>
    </button>
</template>

<script>
export default {
    name: "default-button",
}
</script>

<style lang="scss" scoped>
.default-button {
    width: 160px;
    aspect-ratio: 3/1;
    cursor: pointer;
    border: 2px solid #000;
    border-radius: 16px;
    transition: all 150ms;
}
.default-button:hover {
    box-shadow: 0 0 10px 1px #b3b5b8;
}
.default-button:active {
    background: #c4cad4;
}
</style>