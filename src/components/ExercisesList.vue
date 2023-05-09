<template>
    <div>
        <my-input v-model="searchQuery" :placeholder="'Search:'"/>
        <!-- <filter-select/> -->
        <multi-select-group @update:chosenOptions="filter" :optionsGroup="filterOptionsGroup"/>
        <list-display :column_width="column_width">
            <div
            class="exercise-card"
            v-for="exercise in exercises"
            @click="openExerciseDetails(exercise.slug)"
            :key="exercise.id">
            <div class="content">
            <h1>{{exercise.name}}</h1>
            </div>
            </div>
        </list-display>
    </div>
</template>

<script>
import axios from 'axios'
import debouncedSearch from '@/misc/Search'
import FilterSelect from './FilterSelect.vue'
import MultiSelectGroup from './UI/MultiSelectGroup.vue'
export default {
    components: {
        FilterSelect, MultiSelectGroup,
    },
    mounted() {
        this.debouncedSearch = debouncedSearch
        this.fetchExercises()
        this.fetchFilterOptions()
        console.log("Mounted ExercisesList")
    },
    data() {
        return {
            column_width: "300px",
            exercises: [],
            searchQuery: "",
            filterQuery: [],
            filterFields: ["sports", "muscles"],
            filterOptionsGroup: [
                {field: "sport_tag", name: "Sports", options: [
                    {id:1, name: "Powerlifting"},
                    {id:2, name: "Streetlifting"},
                    {id:3, name: "Bodybuilding"},
                    {id:4, name: "Strongman"},
                ]},
                {field: "muscle", name: "Muscles", options: [
                    {id:1, name: "Butt"},
                    {id:2, name: "Quads"},
                    {id:3, name: "Bicep"},
                    {id:4, name: "Tricep"},
                ]}
            ],
        }
    },
    methods: {
        async fetchExercises() {
            await axios.get('http://127.0.0.1:8000/api/exercises/')
            .then((resp) => {
                this.exercises = Array(...resp.data);
            })
            .catch(ex => console.log(ex))

        },
        openExerciseDetails(slug) {
            let link = `${this.$route.fullPath}/${slug}/`;
            this.$store.commit('popUps/setExercise', link);
        },
        search(resp) {
            console.log(resp)
            this.exercises = [...resp]
        },
        async fetchFilterOptions() {
            const fields = this.filterFields
            for (let i in fields) {
                this.filterOptionsGroup[i].options = (await axios.get(`api/${fields[i]}/`)).data
            }
        },
        filter(chosenOptions) {
            this.filterQuery = chosenOptions;
            console.log(this.filterQuery)
        },
    },
    watch: {
        searchQuery: {
            handler(value) {
                this.debouncedSearch(this.search, value, 'api/exercises/filter/', ['name__startswith'])
            }
        }
    },
}
</script>

<style lang="scss" scoped>
$card_width: v-bind(column_width);
.exercise-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: $card_width;
    height: 450px;
    background: #666;
    overflow: hidden;
    border-radius: 20px;
    /* margin: 10px; */
}
.content {
    background: #5f0;
}

.exercise-card:hover .content{
    scale: 1.1;
}
.filter-select {
    width: 500px;
    height: 50px;
    background: #5f0;
}
</style>