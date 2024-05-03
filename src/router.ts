import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/Feed.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./pages/About.vue'),
    },
    {
      path: '/bloggers',
      name: 'Bloggers',
      component: () => import('./pages/Bloggers.vue'),
    },
  ],
})
