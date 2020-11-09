import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lineup from '../views/Lineup.vue'
import Contact from '../views/Contact.vue'
import Faq from '../views/Faq.vue'
import Tickets from '../views/Tickets.vue'
import Style from '../views/Style.vue'

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
    path: '/style',
    name: 'Style',
    component: Style,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => {
    // very bad, maybe better use a Navigation Guard?
    document.getElementById('app').scrollIntoView()
    return null
  },
})

export default router
