<template>
  <div>
    <arrow-icon :direction="'left'" @click="$router.back" />
    <div class="cabinet">
      <client-demo :client="client" />
      <client-stats :clientStats="clientStats" />
      <base-exercises :exercises="baseExercises.exercises" />
      <p>{{ client }}</p>
      <p>{{ clientStats }}</p>
      <p>{{ baseExercises }}</p>
    </div>
  </div>
</template>

<script>
import { getClient } from "@/components/entities/Client/api/Get.js";
import ClientDemo from "@/components/entities/Client/ui/ClientDemo.vue";
import ClientStats from "@/components/entities/Client/ui/ClientStats.vue";
import BaseExercises from "@/components/entities/Client/ui/BaseExercises.vue";
export default {
  components: {
    ClientDemo,
    ClientStats,
    BaseExercises,
  },
  mounted() {
    this.id = Number(this.$route.params.id);
    this.fetchClientDetails();
  },
  data() {
    return {
      // id: {},
      client: {},
      clientStats: {},
      baseExercises: {},
    };
  },
  methods: {
    async fetchClientDetails() {
      const info = await getClient(this.id);
      this.client = info.client;
      this.clientStats = info.stats;
      this.baseExercises = info.base_exercises;
    },
  },
};
</script>

<style lang="scss" scoped>
.cabinet {
  width: 90%;
  height: 80vh;
  background: #666;
  border-radius: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
