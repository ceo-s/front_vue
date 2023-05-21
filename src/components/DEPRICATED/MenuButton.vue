<template>
    <div class="button">
        <h3><slot></slot></h3>
    </div>
</template>

<script>
export default {
    name: "menu-button",
}
</script>

<style scoped>
.button {
    width: 100%;
    height: fit-content;
    padding-top: 10px;
    padding-bottom: 10px;
    text-transform: capitalize
}

.button:hover {
    background-color: #444;
    cursor: pointer;
}
</style>