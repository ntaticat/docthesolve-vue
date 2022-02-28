import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/assistant/AssistantMainView.vue')
    },
    {
      path: '/incidences',
      name: 'Incidencias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/assistant/IncidencesView.vue')
    },
    {
      path: '/incidences/:id',
      name: 'Incidencia',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/assistant/IncidenceView.vue')
    }
  ]
})

export default router
