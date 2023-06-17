<template>
  <div class="day">
    <h2>{{ weekday }}</h2>
    <h5>{{ day.date }}</h5>
    <draggable class="exercises" item-key="index" v-model="day.exercises">
      <template #item="{ element, index }">
        <training-exercise
          v-auto-animate
          class="gocno"
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
    <!-- <default-button  @click="addExercise">ADD</default-button> -->
    <div v-if="!dragging" @click="addExercise" class="day-footer add">Add</div>
    <div
      @drop="onDrop"
      @dragenter.prevent
      @dragover.prevent
      v-if="dragging"
      class="day-footer bin"
    >
      <trash-icon :color="'red'" />
    </div>
  </div>
</template>

<script>
import { trainingExercise } from "@/components/entities/TrainingProgram/model/Consts.js";
import draggable from "vuedraggable";
import TrainingExercise from "./TrainingExercise.vue";
export default {
  components: {
    TrainingExercise,
    draggable,
  },
  props: {
    weekday: { String },
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
      this.day.exercises.push(
        trainingExercise(this.day.exercises.length, this.day.id)
      );
    },
    startDrag(event, exerciseIndex) {
      this.dragging = true;
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("exerciseIndex", exerciseIndex);
    },
    endDrag() {
      this.dragging = false;
      this.day.exercises.forEach((exercise, i) => {
        exercise.count = i + 1;
      });
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
  background: $color3;
  width: 92%;
  max-width: 350px;
  height: fit-content;
  border-radius: 20px;
  padding-top: 6px;
}
.exercises {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.day-footer {
  @include flex-centered;
  height: 50px;
  width: 100%;
  background: $color2;
  border-radius: 0 0 20px 20px;
}
.bin {
  background: rgba(255, 0, 0, 0.544);
}
</style>
