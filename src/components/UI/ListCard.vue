<template>
    <div class="list-card">
        <div class="footer">
        <div class="footer-content">
        <slot></slot>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-card"
}
</script>

<style scoped>
.list-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 300px;
    height: 450px;
    background: #666;
    overflow: hidden;
    /* margin: 10px; */
}
.footer {
    height: 25%;
    width: 100%;
    background: #000;
    transition: 0.4s;
}
.list-card:hover {
    cursor: pointer;
}
.list-card:hover .footer {
    /* transform: scaleY(200%); */
    transform-origin: bottom;
    scale: 1 4;
}
.footer-content {
    height: auto;
    width: 80%;
    scale: none;
    background: #666;
    transition: 0.4s;
}
</style>