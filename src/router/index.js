import { createRouter, createWebHistory } from 'vue-router'
//import LoginCrud from '@/views/LoginCrud.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import('../views/LoginCrud.vue'),
    },
    {
      path: "/table",
      name: "table",
      component: () => import('../views/TableCrud.vue'),
    },
    {
      path: "/item",
      name: "item",
      component: () => import('../components/NewItem.vue'),
    },
    {
      path: "/editItem/:id",
      name: "edit",
      component: () => import('../components/EditItem.vue'),
    },
  ]
})

export default router
