import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
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
  ],
})
