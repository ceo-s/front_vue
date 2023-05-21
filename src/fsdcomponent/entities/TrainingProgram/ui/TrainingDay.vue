<template>
  <div class="day">
    <h2>{{ day.date }}</h2>
    <draggable itemKey="index" v-model="day.exercises">
      <template #item="{ element, index }">
        <training-exercise
          @dragstart="startDrag($event, index)"
          @dragend="endDrag($event)"
          item-key="index"
          :dragging="dragging"
          :exercise="element"
          :index="index"
          :key="index"
          draggable="true"
        />
      </template>
    </draggable>
    <default-button v-if="!dragging" @click="addExercise">ADD</default-button>
    <div
      @drop="onDrop"
      @dragenter.prevent
      @dragover.prevent
      v-if="dragging"
      class="bin"
    >
      DELETE
    </div>
  </div>
</template>

<script>
import { trainingExercise } from "@/fsdcomponent/entities/TrainingProgram/model/Consts.js";
import draggable from "vuedraggable";
import TrainingExercise from "./TrainingExercise.vue";
export default {
  components: {
    TrainingExercise,
    draggable,
  },
  props: {
    day: { Object },
  },
  data() {
    return {
      dragging: false,
    };
  },
  methods: {
    addExercise() {
      // mutating prop object tree
      this.day.exercises.push(trainingExercise(this.day.id));
    },
    startDrag(event, exerciseIndex) {
      this.dragging = true;
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("exerciseIndex", exerciseIndex);
    },
    endDrag() {
      this.dragging = false;
    },
    onDrop(event) {
      let exerciseIndex = event.dataTransfer.getData("exerciseIndex");
      let arrFiltered = this.day.exercises.filter((val, i) =>
        i != exerciseIndex ? val : null
      );
      this.day.exercises = arrFiltered;
    },
  },
};
</script>

<style lang="scss" scoped>
.day {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(74, 82, 63);
  width: 260px;
  height: fit-content;
  border-radius: 20px;
}
</style>
