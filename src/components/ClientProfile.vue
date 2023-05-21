<template>
  <div class="container">
    <cycle-detail-pop-up v-if="$store.state.popUps.cycleDetail" />
    <div class="profile">
      <div class="box stats">
        <p>{{ clientStats }}</p>
        <stats-plot />
      </div>
      <div class="box cycles">
        <div
          @click="$store.commit('popUps/setCycleDetail', cycle.id)"
          v-for="cycle in clientCycles"
          :key="cycle.id"
          class="cycle"
        >
          {{ cycle.name }}
        </div>
      </div>
      <div class="box bio">
        <div class="pic"></div>
        <div class="bio-content">
          <h1>{{ client.name }}</h1>
          <a
            :href="`https://t.me/${client.telegram}`"
            target="_blank"
            rel="noopener noreferrer"
            >@{{ client.telegram }}</a
          >
        </div>
      </div>
      <div class="box base-exercises">
        <p>{{ clientBaseExercises }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StatsPlot from "@/components/StatsPlot.vue";
import CycleDetailPopUp from "./CycleDetailPopUp.vue";
export default {
  components: {
    StatsPlot,
    CycleDetailPopUp,
  },
  mounted() {
    this.fetchClient();
    this.fetchClientStats();
    this.fetchClientBaseExercises();
    this.fetchCycles();
  },
  data() {
    return {
      clientId: this.$route.params.id,
      client: {},
      clientStats: {},
      clientBaseExercises: {},
      clientCycles: {},
    };
  },
  methods: {
    async fetchClient() {
      await axios
        .get("http://127.0.0.1:8000/api/clients/" + this.clientId + "/")
        .then((resp) => {
          this.client = resp.data;
        })
        .catch((ex) => console.log(ex));
    },
    async fetchClientStats() {
      await axios
        .get(
          "http://127.0.0.1:8000/api/clientstats_active/" + this.clientId + "/"
        )
        .then((resp) => {
          this.clientStats = resp.data;
        })
        .catch((ex) => console.log(ex));
    },
    async fetchClientBaseExercises() {
      await axios
        .get(
          "http://127.0.0.1:8000/api/client_base_exercises/" +
            this.clientId +
            "/"
        )
        .then((resp) => {
          this.clientBaseExercises = resp.data;
        })
        .catch((ex) => console.log(ex));
    },
    async fetchCycles() {
      await axios
        .get("http://127.0.0.1:8000/api/cycles/client_cycles/", {
          params: { client_id: this.clientId },
        })
        .then((resp) => {
          this.clientCycles = resp.data;
          // this.currentCycleId = Math.min(...this.cycles.map(item => item.id));
        })
        .catch((ex) => console.log(ex));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 88vh;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.profile {
  width: 84%;
  height: 80vh;
  border-radius: 20px;
  border: 1px solid #000;
  box-shadow: 0 0 15px 1px #555;
  display: grid;
  // grid-template-columns: ;
  grid-gap: 20px;
  padding: 30px;
}
.box {
  background: #555;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  text-overflow: clip;
  padding: 20px;
}
.stats {
  grid-column: 1/7;
  grid-row: 1/7;
}
.cycles {
  grid-column: 7/10;
  grid-row: 1/4;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
}
.cycle {
  width: 90%;
  height: 50px;
  height: 100px;
  background: #999;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
}
.bio {
  grid-column: 14/16;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  height: 140px;
}
.pic {
  height: 100px;
  width: 100px;
  background: #656;
  border-radius: 50%;
}
.bio-content {
  width: calc(100% - 100px);
}
.base-exercises {
  grid-column: 7/16;
  grid-row: 4/7;
}
</style>
