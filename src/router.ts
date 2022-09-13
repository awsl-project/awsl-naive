import { createRouter, createWebHistory } from 'vue-router'
import Feed from './pages/Feed.vue'
import About from './pages/About.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Feed,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
})
