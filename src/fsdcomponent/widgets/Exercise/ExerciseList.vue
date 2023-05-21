<template>
  <div>
    <search-complex
      v-model:items="exercises"
      :itemsApiLink="exercisesApiLink"
      :sortOptions="sortOptions"
      :optionsFieldsModels="optionsFieldsModels"
    />
    <adaptive-list>
      <div :key="exercise.id" v-for="exercise in exercises">
        <exercise-demo
          class="exercise"
          @click="openDetail(exercise.id)"
          :exercise="exercise"
        />
      </div>
    </adaptive-list>
    <exercise-detail v-if="detailId" v-model:exerciseId="detailId" />
  </div>
</template>

<script>
// entities
import { listExercises } from "@/fsdcomponent/entities/Exercise/api/List.js";
import ExerciseDemo from "@/fsdcomponent/entities/Exercise/ui/ExerciseDemo.vue";
import ExerciseDetail from "@/fsdcomponent/entities/Exercise/ui/ExerciseDetail.vue";
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
      ],
      optionsFieldsModels: [
        { field: "sport_tag", toModel: "sports", name: "По видам спорта" },
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
      this.detailId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.exercise {
  background: #555;
  width: 260px;
  height: 300px;
}
</style>
