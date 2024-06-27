import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/UserList.vue'
import User from '../components/User.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
