<template>
  <div>
    <div v-auto-animate class="day">
      <h3>{{ day.day }}</h3>
      <draggable itemKey="index" v-model="day.exercises">
        <template #item="{ element, index }">
          <program-builder-exercise
            @dragstart="startDrag($event, index)"
            @dragend="endDrag($event)"
            item-key="index"
            :key="index"
            :exercise="element"
            :exerciseIndex="index"
            draggable="true"
          />
        </template>
      </draggable>

      <div
        @drop="onDrop"
        @dragenter.prevent
        @dragover.prevent
        v-if="showBin"
        class="bin"
      >
        DELETE
      </div>
      <div v-else @click="addExercise" class="add">+</div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ProgramBuilderExercise from "./ProgramBuilderExercise.vue";
export default {
  components: {
    ProgramBuilderExercise,
    draggable,
  },
  props: {
    day: { Object },
    dayCardWidth: { String },
  },
  data() {
    return {
      showBin: false,
    };
  },
  methods: {
    addExercise() {
      console.log("GOVNO");
      console.log(this.day.exercises);
      this.day.exercises.push({ name: "", sets: "", reps: "", weight: "" });
    },
    startDrag(event, exerciseIndex) {
      this.showBin = true;
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("exerciseIndex", exerciseIndex);
      // ('dayIndex')
    },
    endDrag() {
      this.showBin = false;
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
$day_width: v-bind(dayCardWidth);
.day {
  width: $day_width;
  height: fit-content;
  background: rgb(192, 145, 192);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 5px;
  position: static;
}
.add {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 40px;
  background: #666;
  border-radius: 0 0 20px 20px;
}
.add:hover {
  cursor: pointer;
}
.bin {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 40px;
  background: #b92f2f;
  border-radius: 0 0 20px 20px;
}
</style>
