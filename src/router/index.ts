import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/agent/MainView.vue"),
    },
    {
      path: "/tickets",
      name: "Tickets",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/agent/TicketsView.vue"),
    },
    {
      path: "/tickets/:id",
      name: "Ticket",
      component: () => import("../views/agent/TicketView.vue"),
    },
    {
      path: "/problems",
      name: "Problemas",
      component: () => import("../views/agent/ProblemsView.vue"),
    },
    {
      path: "/problems/:id",
      name: "Problema",
      component: () => import("../views/agent/ProblemView.vue"),
    },
    {
      path: "/problems/new",
      name: "Registrar Problema",
      component: () => import("../views/agent/NewSolutionView.vue"),
    },
    {
      path: "/solutions",
      name: "Soluciones",
      component: () => import("../views/agent/SolutionsView.vue"),
    },
    {
      path: "/solutions/:id",
      name: "Solución",
      component: () => import("../views/agent/SolutionView.vue"),
    },
    {
      path: "/solutions/new",
      name: "Registrar Solución",
      component: () => import("../views/agent/NewSolutionView.vue"),
    },
  ],
});

export default router;
