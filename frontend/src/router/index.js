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
    {
      path: '/solutions',
      name: 'solutions',
      component: () => import('@/views/SolutionsPage.vue'),
    },
    {
      path: '/kapflow',
      name: 'kapflow',
      component: () => import('@/views/KapflowPage.vue'),
    },
    {
      path: '/easylo',
      name: 'easylo',
      component: () => import('@/views/EasyloPage.vue'),
    },
    {
      path: '/qualiflow',
      name: 'qualiflow',
      component: () => import('@/views/QualiflowPage.vue'),
    },
    {
      path: '/aviconnect',
      name: 'aviconnect',
      component: () => import('@/views/AviconnectPage.vue'),
    },
    {
      path: '/myoxyane',
      name: 'myoxyane',
      component: () => import('@/views/MyoxyanePage.vue'),
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('@/views/ContactView.vue'),
    // },
  ],
})

export default router
