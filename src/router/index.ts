import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import BuiltinBrowser from '@/views/BuiltinBrowser.vue'
import WhoAmI from '@/views/WhoAmI.vue'
import Contact from '@/views/Contact.vue'
import History from '@/views/History.vue'
import Friends from '@/views/Friends.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'browser/:href',
        name: 'BuiltBrowser',
        component: BuiltinBrowser
      },
      {
        path: 'whoami',
        name: 'WhoAmI',
        component: WhoAmI
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'friends',
        name: 'Friends',
        component: Friends
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
