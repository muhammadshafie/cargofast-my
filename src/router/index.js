import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Add the 404 route at the end
    {
      path: '/:catchAll(.*)', // Matches any path that doesn't match the above routes
      component: NotFound
    }
  ]
})

export default router
