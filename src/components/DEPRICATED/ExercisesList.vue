<template>
  <div>
    <list-display :column_width="column_width">
      <div
        class="exercise-card"
        v-for="exercise in exercises"
        @click="openExerciseDetails(exercise.slug)"
        :key="exercise.id"
      >
        <div class="content">
          <h1>{{ exercise.name }}</h1>
        </div>
      </div>
    </list-display>
  </div>
</template>

<script>
import axios from "axios";
import debouncedSearch from "@/misc/Search";
export default {
  components: {},
  mounted() {
    this.debouncedSearch = debouncedSearch;
    this.fetchExercises();
    this.fetchFilterOptions();
    console.log("Mounted ExercisesList");
  },
  data() {
    return {
      column_width: "300px",
      exercises: [],
      exercisesApiLink: "exercises",
      sortOptions: [
        { id: 1, name: "Name↑", value: "name", order: 1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
      ],
      optionsFieldsModels: [
        { field: "sport_tag", toModel: "sports", name: "По видам спорта" },
        { field: "muscle", toModel: "muscles", name: "По группам мышц" },
      ],
    };
  },
  methods: {
    async fetchExercises() {
      this.exercises = (
        await axios.get("http://127.0.0.1:8000/api/exercises/")
      ).data;
    },
    openExerciseDetails(slug) {
      let link = `${this.$route.fullPath}/${slug}/`;
      this.$store.commit("popUps/setExercise", link);
    },
    async fetchFilterOptions() {
      const fields = this.filterFields;
      for (let i in fields) {
        this.filterOptionsGroup[i].options = (
          await axios.get(`api/${fields[i]}/`)
        ).data;
      }
    },
  },
};
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

.exercise-card:hover .content {
  scale: 1.1;
}
.filter-select {
  width: 500px;
  height: 50px;
  background: #5f0;
}
</style>
