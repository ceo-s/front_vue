<template>
  <div>
    <div v-auto-animate class="exercise">
      <div class="exercise-main">
        <h3>{{ exerciseIndex + 1 }}</h3>
        <div class="exercise-name">
          <my-input
            @focusin="toggleShowAnnotations(true)"
            @focusout="toggleShowAnnotations(false)"
            v-model="exercise.name"
            :placeholder="'enter exercise:'"
          />
          <my-input-annotations
            v-if="showAnnotations"
            :apiLink="'api/exercises/filter/'"
            :searchFields="['name__startswith']"
            v-model="exercise.name"
          />
        </div>
        <img
          @click="toogleDetailView"
          :class="{ up: detailView }"
          class="arrow"
          alt="arrow"
          src="@/assets/down.png"
        />
      </div>
      <!-- <div v-for="ex in exercisesAnnotations">{{ ex.name }}</div> -->
      <div v-if="detailView">
        <div class="exercise-main">
          <my-input v-model="exercise.sets" :placeholder="'sets:'" />
          <my-input v-model="exercise.reps" :placeholder="'reps:'" />
          <my-input v-model="exercise.weight" :placeholder="'weight:'" />
        </div>
        <my-input v-model="exercise.comment" :placeholder="'comment:'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      detailView: false,
      showAnnotations: false,
    };
  },
  props: {
    exercise: {},
    exerciseIndex: { Number },
  },
  methods: {
    toogleDetailView() {
      this.detailView = !this.detailView;
    },
    toggleShowAnnotations(bool) {
      console.log("arrym", bool);
      setTimeout(() => {
        this.showAnnotations = bool;
      }, 120);
    },
  },
};
</script>

<style lang="scss" scoped>
.exercise {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 0;
  position: relative;
}
.exercise-main {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
}
.exercise-name {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  // position: absolute;
  margin-left: 14px;
}
.arrow {
  width: 30px;
  height: 30px;
  // background: #333;
  // scale: 0.2;
}
.up {
  rotate: 180px;
  transform: rotate(180deg);
}
.details-enter-from {
  transform: translateY(-30%);
  height: 20px;
  opacity: 0;
}
.details-leave-to {
  transform: translateY(-30%);
  opacity: 0;
  //   height: 0;
}
.details-leave-active,
.details-enter-active {
  transition: 0.15s ease-in;
}
</style>
