import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/phones',
    component: () => import('../views/Phones.vue')
  },
  {
    path: '/notebooks',
    component: () => import('../views/Notebooks.vue')
  },
  {
    path: '/tv',
    component: () => import('../views/TV.vue')
  },
  {
    name: 'Info',
    path: '/item/:id',
    component: () => import ('../views/Info.vue')
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/registration',
    component:()=>import('../views/Registration.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
