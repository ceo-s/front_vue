<template>
  <div class="exercise-list">
    <search-complex
      v-model:items="exercises"
      :itemsApiLink="exercisesApiLink"
      :sortOptions="sortOptions"
      :optionsFieldsModels="optionsFieldsModels"
    />
    <adaptive-list>
      <exercise-demo
        :key="exercise.id"
        v-for="exercise in exercises"
        class="exercise"
        @click="openDetail(exercise.id)"
        :exercise="exercise"
      />
    </adaptive-list>
    <pop-up @update:visible="detailId = 0" :visible="Boolean(detailId)">
      <exercise-detail v-if="detailId" v-model:exerciseId="detailId" />
    </pop-up>
  </div>
</template>

<script>
// entities
import { listExercises } from "@/components/entities/Exercise/api/List.js";
import ExerciseDemo from "@/components/entities/Exercise/ui/ExerciseDemo.vue";
import ExerciseDetail from "@/components/entities/Exercise/ui/ExerciseDetail.vue";
export default {
  components: {
    ExerciseDemo,
    ExerciseDetail,
  },
  mounted() {
    this.fetchExercises();
  },
  data() {
    return {
      exercises: [],
      exercisesApiLink: "exercises",
      sortOptions: [
        { id: 1, name: "Name↑", value: "name", order: 1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
        { id: 2, name: "Nasdfsdfsdfme↓", value: "name", order: -1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
        { id: 2, name: "Name↓", value: "name", order: -1 },
      ],
      optionsFieldsModels: [
        { field: "sport_tag", toModel: "sports", name: "По видам спорта" },
        { field: "muscle", toModel: "muscles", name: "По группам мышц" },
        { field: "muscle", toModel: "muscles", name: "По группам мышц" },
        { field: "muscle", toModel: "muscles", name: "По группам мышц" },
        { field: "muscle", toModel: "muscles", name: "По группам мышц" },
        { field: "muscle", toModel: "muscles", name: "По группам мышц" },
        { field: "muscle", toModel: "muscles", name: "По группам мышц" },
      ],
      detailId: 0,
    };
  },
  methods: {
    async fetchExercises() {
      this.exercises = await listExercises();
    },
    openDetail(id) {
      console.log(id);
      this.detailId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.exercise-list {
  // width: 900px;
}
.exercise {
  @include bordered;
  background: #555;
  width: 100%;
  max-width: 260px;
  height: 300px;
  transition: 400ms ease;
}
.exercise:hover {
  scale: 1.02;
}
</style>
