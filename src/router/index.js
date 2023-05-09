import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ExercisesView from '@/views/ExercisesView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import ProgramView from '@/views/ProgramView.vue'
import ClientsView from '@/views/ClientsView.vue'
import ClientView from '@/views/ClientView.vue'
import DietView from '@/views/DietView.vue'

const routes = [
  {
    id: 0,
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    id: 1,
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    id: 2,
    path: '/exercises',
    name: 'exercises',
    component: ExercisesView,
  },
  {
    id: 3,
    path: '/articles',
    name: 'articles',
    component: ArticlesView,
  },
  {
    id: 4,
    path: '/programs',
    name: 'programs',
    component: ProgramView,
  },
  {
    id: 5,
    path: '/clients',
    name: 'clients',
    component: ClientsView,
  },
  {
    id: 6,
    path: '/clients/:id',
    name: 'client',
    component: ClientView,
  },
  {
    id: 7,
    path: '/diet',
    name: 'diet',
    component: DietView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
