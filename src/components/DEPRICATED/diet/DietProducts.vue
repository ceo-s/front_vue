<template>
    <div>
        <products-search-pop-up v-model:visible="visible" v-model:selectedProducts="products"/>
        <h2><slot></slot></h2>
        <div class="products-container">
            <div v-if="!products.length">Добавьте продукты!</div>
            <div v-for="product in products">
                <div class="product">{{ product.name }}</div>
            </div>
        </div>
        <div @click="visible = true" class="add-button">Добавить:</div>
    </div>
</template>

<script>
import ProductsSearchPopUp from '@/components/diet/ProductsSearchPopUp.vue';
export default {
    components: {
        ProductsSearchPopUp,
    },
    props: {
        
    },
    data() {
        return {
            products: [],
            visible: false,
        }
    },
    methods: {

    },

}
</script>

<style lang="scss" scoped>
// .block {
//     margin: 20px;
//     margin-left: auto;
//     margin-right: auto;
//     height: 400px;
//     width:360px;
//     background: #222;
//     border-radius: 20px;
//     padding: 15px;
//     display: flex;
//     flex-direction: column;
//     // justify-content: center;
//     justify-items: center;
// }

// .forbidden {
//     grid-column: 1/6;
//     grid-row: 9/17;
//     background: #a34e4e;
// }
.add-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    border: 2px solid #000;
    border-radius: 20px;
    margin-top: auto;
    cursor: pointer; 
}
.products-container {
    margin-bottom: 10px;
    margin-top: 10px;
    border: 2px solid black;
    border-radius: 20px;
    flex-grow: 1;
    max-height: 250px;
    overflow-y: scroll;
}
.product {
    // margin-top: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;
    height: 36px;
    // border-top: 2px solid black;
    border-bottom: 2px solid black;
    // border-radius: 20px;
}
</style>