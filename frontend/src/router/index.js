import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    // Autres routes à ajouter plus tard
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('@/views/AboutView.vue'),
    // },
    // {
    //   path: '/solutions',
    //   name: 'solutions',
    //   component: () => import('@/views/SolutionsView.vue'),
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('@/views/ContactView.vue'),
    // },
  ],
})

export default router
