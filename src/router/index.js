import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/Scrivener',
      name: 'Scrivener',
      component: () => import('../views/Scrivener.vue')
    },
    {
      path: '/RealEstate',
      name: 'RealEstate',
      component: () => import('../views/RealEstate.vue')
    },
    {
      path: '/Visa',
      name: 'Visa',
      component: () => import('../views/Visa.vue')
    },
  ]
});

export default router
