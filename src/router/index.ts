import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/assistant/MainView.vue')
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
      component: () => import('../views/assistant/IncidenceView.vue')
    },
    {
      path: '/problems',
      name: 'Problemas',
      component: () => import('../views/assistant/ProblemsView.vue')
    },
    {
      path: '/solutions',
      name: 'Soluciones',
      component: () => import('../views/assistant/SolutionsView.vue')
    },
    {
      path: '/solutions/:id',
      name: 'Solucion',
      component: () => import('../views/assistant/SolutionView.vue')
    },
    {
      path: '/solutions/new',
      name: 'Nueva Solucion',
      component: () => import('../views/assistant/NewSolutionView.vue')
    }
  ]
})

export default router
