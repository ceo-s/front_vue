import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/pages/HomeView.vue";
import ProfileView from "@/components/pages/ProfileView.vue";
import ExercisesView from "@/components/pages/ExercisesView.vue";
import ProgramView from "@/components/pages/TrainingProgramView.vue";
import DietView from "@/components/pages/DietView.vue";
import ClientsView from "@/components/pages/ClientsView.vue";
import ClientCabinetView from "@/components/pages/ClientCabinetView.vue";

const routes = [
  {
    id: 0,
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    id: 1,
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    id: 2,
    path: "/exercises",
    name: "exercises",
    component: ExercisesView,
  },
  {
    id: 3,
    path: "/programs",
    name: "programs",
    component: ProgramView,
  },
  {
    id: 4,
    path: "/clients",
    name: "clients",
    component: ClientsView,
  },
  {
    id: 5,
    path: "/diet",
    name: "diet",
    component: DietView,
  },
  {
    id: 6,
    path: "/clients/:id",
    name: "client",
    component: ClientCabinetView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
