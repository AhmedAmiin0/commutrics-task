import { createRouter, createWebHistory } from 'vue-router'
import MembersView from '@/views/Dashboard/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'members',
      component: MembersView
    },
    {
      path: '/carpooloptions',
      name: 'carpooloptions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CarPoolOptions/index.vue')
    }
  ]
})

export default router
