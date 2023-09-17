import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: "main" },
    component: HomeView,
  },
  {
    path: '/pets',
    name: 'pets',
    meta: { layout: "inner" },
    component: () => import('../views/PetsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
