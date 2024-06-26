import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/UserList.vue'
import View from '../components/View.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: UserList
  },
  {
    path: '/view/:id',
    name: 'View',
    component: View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
