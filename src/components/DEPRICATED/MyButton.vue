<template>
    <button @click.prevent type="submit" class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button",        
}
</script>

<style scoped>
.button {
    width: 200px;
    height: 50px;
    border: 1px solid #000;
    box-shadow: none;
}
.button:hover {
    cursor: pointer;
    /* scale: 1.01; */
}

</style>