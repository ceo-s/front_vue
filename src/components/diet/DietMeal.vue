<template>
    <div>
        <p v-for="product in productsAmount">{{ product }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        mealId: {Number},
    },
    mounted() {
        this.fetchProductsAmount()
    },
    data() {
        return {
            productsAmount: []
        }
    },
    methods: {
        // Блять и ещё теперь запрос надо чтоб имя этой хуни узнать че за пиздец я чё даун
        async fetchProductsAmount() {
            this.productsAmount = (await axios.get("api/foods_amount/filter/",
                {params: {dish__id: this.mealId}})).data
        }
    },
    watch: {
        mealId() {
            this.fetchProductsAmount()
        }
    },
}
</script>

<style lang="scss" scoped>

</style>