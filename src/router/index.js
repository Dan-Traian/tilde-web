import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpecialisationView from '../views/SpecialisationView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/specialisation',
      name: 'specialisation',
      component: () => SpecialisationView
    },
    {
      path: '/about',
      name: 'about',
      component: () => AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => ContactView
    }
  ]
})

export default router
