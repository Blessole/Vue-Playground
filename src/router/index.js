import { createRouter, createWebHistory } from 'vue-router'

const router = new createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes: [
    {path: '/lazyLoading', component: () =>    import('@/views/LazyLoading.vue')},
    ]
})