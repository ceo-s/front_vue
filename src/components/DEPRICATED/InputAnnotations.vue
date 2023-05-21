<template>
    <div class="annotations">
        <div
        @click="chooseOption(annotation)"
        v-for="annotation in annotations"
        class="annotation">
        {{ annotation.name }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import { debounce } from '@/misc/Debounce';
import debouncedSearch from '@/misc/Search'
export default {
    name: "my-input-annotations",
    props: {
        apiLink: {String},
        searchFields: {Array},
        modelValue: {String},
    },
    created() {
        // this.debouncedSearch1 = debounce(this.search)
        this.debouncedSearch = debouncedSearch
    },
    data() {
        return {
            annotations: [],
        }
    },

    methods: {

        // async search(value) {
        //     console.log("Vasya", value);
        //     if (!value) {
        //         this.annotations = []
        //         return
        //     }
        //     let searchFields = this.searchFields
        //     let params = searchFields.length ? Object.assign(...searchFields.map((val) => {
        //         return {[val]: value}
        //     })) : {}

        //     const resp = (await axios.get(this.apiLink, {params: params})).data
        //     console.log(resp);
        //     this.annotations = resp
        //     this.$emit("update:modelValue", value)
        // },
        // commitSearch(event) {
        //     this.debouncedSearch(event.target.value)
        // },
        chooseOption(option) {
            this.$emit("update:modelValue", option.name)
        },
        handleResp(resp) {
            this.annotations = resp
        }
    },
    watch: {
        modelValue: {
            handler(value) {
                this.debouncedSearch(this.handleResp, value, this.apiLink, this.searchFields)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.annotations {
    width: 100%;
    height: fit-content;
    background: #888;
    max-height: 200px;
    overflow-y: scroll;
    // position: absolute;
    // position:static;
}
.annotation {
    height: 40px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #000;
    border-top: none;
}
</style>