<template>
  <div class="exercise-detail">
    <div class="img-container">
      <img :src="exercise.image" alt="exercise-preview" />
    </div>
    <div @wheel.prevent="horizontalScroll" ref="media" class="media-container">
      <img
        :key="media.id"
        v-for="media in exercise.media"
        :src="media.file"
        alt=""
      />
      <video
        :key="media.id"
        v-for="media in exercise.media"
        :src="media.file"
        controls
      ></video>
    </div>
    <h2>{{ exercise.name }}</h2>
    <article class="description">
      <p>
        {{ exercise.description }}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        ducimus quod veritatis cum, rerum consectetur eaque nemo et officia
        similique quam necessitatibus, dolorem, dolor quasi accusamus ullam
        aperiam adipisci a minus odit! Quaerat voluptatibus amet voluptates
        veniam, pariatur unde eaque?
      </p>
    </article>
  </div>
</template>

<script>
import { getExercise } from "../api/Get";
export default {
  props: {
    exerciseId: { Number },
  },
  mounted() {
    this.fetchDetail();
  },
  data() {
    return {
      exercise: {},
    };
  },
  methods: {
    async fetchDetail() {
      this.exercise = await getExercise(this.exerciseId);
      console.log(this.exercise.media);
    },
    closeDetail() {
      this.$emit("update:exerciseId", 0);
    },
    horizontalScroll(e) {
      this.$refs.media.scrollBy({ left: e.deltaY < 0 ? -80 : 80 });
    },
  },
};
</script>

<style lang="scss" scoped>
.exercise-detail {
  padding: 5px;
  width: 100%;
  max-width: 400px;
  height: 560px;
}
.img-container {
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.img-container .description {
  max-height: 200px;
  overflow-y: scroll;
}
.media-container {
  display: flex;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  height: 8em;
  img {
    height: 100%;
  }
}
</style>
