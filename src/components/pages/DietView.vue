<template>
  <div>
    <div class="selection">
      <select-client />
      <select-diet-program />
    </div>
    <h1 v-if="client">Выбран клиент: {{ client.name }}</h1>
    <div v-if="programId" class="diet-builder">
      <div class="block info">
        <h1>{{ programInfo.name }}</h1>
        <h2>{{ client.name }}</h2>
        <h3>{{ programInfo.date_start }} - {{ programInfo.date_finish }}</h3>
        <input
          :value="dateBinding(programInfo.date_start)"
          type="date"
          name=""
          id=""
        />
        <input
          :value="dateBinding(programInfo.date_finish)"
          type="date"
          name=""
          id=""
        />
      </div>
      <div class="block comment">
        <h2>Описание:</h2>
        <textarea class="max" v-model="programInfo.description"></textarea>
      </div>
      <diet-products-builder
        v-model:products="allowedProducts"
        class="block allowed products"
        >Рекомендуемые продукты</diet-products-builder
      >
      <diet-products-builder
        v-model:products="forbiddenProducts"
        class="block forbidden products"
        >Запрещённые продукты</diet-products-builder
      >
      <day-reference-builder :daysRef="daysRef" class="block days" />
      <nutrients-builder
        v-model:schedule="schedule"
        :nutrientsList="nutrientsList"
        class="block nutrients"
      />
    </div>
    <default-button @click="saveProgram">SAVE</default-button>
  </div>
</template>

<script>
import { getDietProgram } from "@/components/entities/Diet/api/Get";
import { updateProgram } from "@/components/entities/Diet/api/Update";
import { toJSFormattedDate } from "../shared/lib/DateManagment";
import SelectClient from "@/components/features/Client/SelectClient.vue";
import SelectDietProgram from "../features/Diet/SelectDietProgram.vue";
import DietProductsBuilder from "../widgets/Diet/DietProductsBuilder.vue";
import DayReferenceBuilder from "../widgets/Diet/DayReferenceBuilder.vue";
import NutrientsBuilder from "../widgets/Diet/NutrientsBuilder.vue";
export default {
  components: {
    SelectClient,
    SelectDietProgram,
    DayReferenceBuilder,
    NutrientsBuilder,
    DietProductsBuilder,
  },
  unmounted() {
    this.$store.dispatch("programs/resetStore");
  },
  data() {
    return {
      programInfo: {},
      allowedProducts: [],
      forbiddenProducts: [],
      daysRef: [],
      nutrientsList: [],
      schedule: [],
    };
  },
  methods: {
    async fetchAll() {
      const program = await getDietProgram(this.programId);
      this.allowedProducts = program.recommended_products;
      this.forbiddenProducts = program.forbidden_products;
      this.daysRef = program.day_reference;
      this.nutrientsList = program.nutrients;
      this.schedule = program.schedule;
      this.programInfo = {
        id: program.id,
        name: program.name,
        description: program.description,
        date_start: program.date_start,
        date_finish: program.date_finish,
        coach: program.coach,
        client: program.client,
      };
    },
    async saveProgram() {
      await updateProgram({
        ...this.programInfo,
        recommended_products: this.allowedProducts,
        forbidden_products: this.forbiddenProducts,
        schedule: this.schedule,
        nutrients: this.nutrientsList,
        day_reference: this.daysRef,
      });
    },
    dateBinding(date) {
      if (date) return date.split(".").reverse().join("-");
    },
  },
  computed: {
    client() {
      return this.$store.state.programs.client;
    },
    programId() {
      return this.$store.state.programs.dietProgramId;
    },
  },
  watch: {
    programId() {
      console.log("Watcher here");
      this.fetchAll();
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 550px) {
  .diet-builder {
    position: relative;
    display: grid;
    width: 100%;
    height: 90vh;
    border-radius: 20px;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
    gap: 20px;
    padding: 10px;
    margin: auto;
  }
}

@media (max-width: 550px) {
  .diet-builder {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
    gap: 10px;
  }
}
.block {
  background: #222;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
}
// @media (max-width: 550px) {
//   .block {
//     background: #222;
//     border-radius: 20px;
//     padding: 15px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     position: relative;
//   }
// }
.info {
  grid-column: 6/12;
  grid-row: 1/5;
  background: #1d1f2a;
}
.info > h3 {
  margin-top: auto;
  margin-bottom: auto;
}
.products {
  width: 100%;
  height: 100%;
  @media (width < 550px) {
    height: 25em;
  }
}
.allowed {
  grid-column: 1/6;
  grid-row: 1/9;
  background: #2d2a39;
}
.forbidden {
  grid-column: 1/6;
  grid-row: 9/17;
  background: #2d2a39;
}
.days {
  grid-column: 6/12;
  grid-row: 5/17;
  background: #2d2a39;
  width: 100%;
  @media (width < 550px) {
    height: 35em;
  }
}
.supplements {
  grid-column: 6/12;
  grid-row: 1/6;
  background: #2d2a39;
  @media (width < 550px) {
    height: 35em;
  }
}

.nutrients {
  grid-column: 12/17;
  grid-row: 8/17;
  background: #2d2a39;
  @media (width < 550px) {
    height: 25em;
  }
}
.comment {
  grid-column: 12/17;
  grid-row: 1/8;
  background: #2d2a39;
}
TODO вынести кнопку в UI при рефакторинге в FSD .add-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border: 2px solid #000;
  border-radius: 20px;
  margin-top: auto;
  cursor: pointer;
}
#program-description {
  width: 100%;
  height: 80%;
  resize: none;
  outline: none;
  background: none;
  text-decoration: none !important;
  color: #fff;
  border: none;
}
</style>
