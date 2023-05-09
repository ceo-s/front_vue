<template>
    <div>
        <articles-list/>
    </div>
</template>

<script>
import axios from 'axios';
import ArticlesList from '@/components/ArticlesList.vue';
export default {
    components: {
        ArticlesList
    },
    mounted() {
        // this.fetchPage()
    },
    data() {
        return {
            data: "2",
        }
    },
    methods: {
        async fetchPage() {
            await axios.get('http://127.0.0.1:8000/')
            .then((resp) => {
                this.data = resp.data;
            })
            .catch((ex) => console.log(ex))
        }
    },
}
</script>

<style scoped>

</style>