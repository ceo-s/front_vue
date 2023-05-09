<template>
    <pop-up-back v-if="visible" @update:visible="togglePopUp">    
        <pop-up class="products-add-popup">
            <h1>Hello</h1>
            <my-input v-model="searchQuery" :placeholder="'Search in products:'"/>
            <div class="search-products-container">
                <div
                :class="{selected: isSelected(product.id)}"
                @click="toggleSelectProduct(product)"
                v-for="product in products"
                class="search-product">
                    <h3>{{ product.name }}</h3>
                </div>
            </div>
        </pop-up>
    </pop-up-back>
</template>

<script>
import debouncedSearch from '@/misc/Search'
export default {
    props: {
        visible: {Boolean},
        selectedProducts: {Array},
    },
    data() {
        return {
            searchQuery: "",
            products: [],
            // selectedProducts: [],
        }
    },
    methods: {
        togglePopUp(bool) {
            this.$emit("update:visible", bool)
        },
        toggleSelectProduct(product) {
            console.log(this.selectedProducts);
            if (this.selectedProducts.some((val) => val.id === product.id)) {
                console.log("yes");
                this.$emit("update:selectedProducts", this.selectedProducts.filter((val) => !(val.id === product.id)))
            } else {
                this.$emit("update:selectedProducts", [...this.selectedProducts, {...product}])
            }
        },
        isSelected(id) {
            return this.selectedProducts.some((val) => val.id === id)
        },
    },
    watch: {
        searchQuery: {
            handler(val) {
                debouncedSearch((resp) => {
                    this.products = resp
                }, val, "api/foods/filter/", ["name__startswith"])
            }
        }
    },
    computed: {
        notSelectedProducts() {

        }
    },
}
</script>

<style lang="scss" scoped>
.products-add-popup {
    width: 400px;
    height: 500px;
    overflow-y: scroll;
}
.search-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 10px;
    border: 2px solid #000;
    border-radius: 10px;
    cursor: pointer;
}
.selected {
    background: greenyellow;
}
</style>