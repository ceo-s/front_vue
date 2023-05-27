<template>
  <new-pop-up @update:visible="closeDetail" :visible="Boolean(exerciseId)">
    <div class="exercise-detail">
      <div class="img-container">
        <img :src="exercise.image" alt="exercise-preview" />
      </div>

      <h2>{{ exercise.name }}</h2>
      <article class="description">
        <p>
          {{ exercise.description }} Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Tempora nisi tempore eveniet odit suscipit itaque
          inventore fuga libero, natus voluptas deserunt cumque. Architecto,
          quae non eaque asperiores quaerat tempore enim. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cumque veritatis at ducimus magni
          vitae necessitatibus rerum iste ullam libero! Dignissimos ullam harum,
          temporibus officia consequatur dolore totam voluptas atque, illum
          iusto voluptatum repellat architecto tempore sapiente deserunt
          placeat. Dolorem eveniet illum blanditiis nihil excepturi culpa nobis
          provident ab cum labore molestias tempore deleniti voluptas sapiente
          cumque, harum sit. Dicta asperiores saepe quos error dolor officia vel
          magni corporis dolore consectetur accusamus eum iusto dolores rem
          veritatis ad tempora quas, nemo delectus odio quis cupiditate.
          Inventore mollitia tenetur iste quasi vero, quidem repudiandae
          adipisci labore doloribus harum nisi distinctio, illo architecto autem
          tempore enim obcaecati. Vitae aspernatur cum aliquid. Voluptatibus
          sequi deserunt expedita id veritatis a vero ut deleniti atque, nam
          velit voluptatem dicta ipsam, quisquam quos sed delectus! Alias sint
          enim ad voluptatem officiis. Similique nemo quisquam consectetur
          nesciunt quia, deserunt velit obcaecati dolor quasi totam, architecto
          quis numquam corrupti.
        </p>
      </article>
    </div>
  </new-pop-up>
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
    },
    closeDetail() {
      this.$emit("update:exerciseId", 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.exercise-detail {
  padding: 5px;
}
.img-container {
  width: 460px;
  height: 460px;
  border-radius: 15px;
  overflow: hidden;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description {
  max-height: 200px;
  overflow-y: scroll;
}
</style>
