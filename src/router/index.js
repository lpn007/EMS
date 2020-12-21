import Vue from 'vue'
import VueRouter from 'vue-router'
import page1Router from './page1'
import page2Router from './page2'
import page3Router from './page3'

Vue.use(VueRouter)

const routes = [
  page1Router,
  page2Router,
  page3Router
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
