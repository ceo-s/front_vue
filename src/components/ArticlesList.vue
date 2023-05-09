<template>
    <div>
        <list-display class="articles-list">
            <div class="article" v-for="article in articles">
                <div class="article-header">
                    <h1>{{ article.title }}</h1>
                    <div>{{ article.user }}</div>
                </div>
                <article>{{ article.content }}</article>
                <footer>
                    <div>{{ new Date(article.date_creation).toLocaleDateString() }}</div>
                    <div><a :href="article.source_link"
                    target="_blank" rel="noopener noreferrer">{{ article.source }}</a></div>
                </footer>
            </div>
        </list-display>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {
        this.fetchArticles()
    },
    data() {
        return {
            articles: [],
        }
    },
    methods: {
        async fetchArticles() {
            this.articles = (await axios.get("api/articles/")).data
        }
    },
    computed: {
        articleDate(djangoDate) {
            // console.log(djangoDate);
            // const date = new Date(djangoDate)
            return "SOME"
        }
    }
}
</script>

<style lang="scss" scoped>
.articles-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
}
.article {
    height: fit-content;
    background: #444;
}
.article-header {
    display: flex;
    justify-content: space-between;
}
.footer {
    display: flex;
    justify-content: space-between;
}
</style>