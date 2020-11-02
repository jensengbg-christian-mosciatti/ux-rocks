import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lineup from '../views/Lineup.vue'
import Contact from '../views/Contact.vue'
import Faq from '../views/Faq.vue'
import Tickets from '../views/Tickets.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lineup',
    name: 'Lineup',
    component: Lineup,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
