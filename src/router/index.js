import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import BooksView from '../views/Books.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'books',
    component: BooksView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
