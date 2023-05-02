import Vue from 'vue'
import VueRouter from 'vue-router'
 
import Home from '@/views/Home'
import Counter from '@/views/Counter'
import Timers from '@/views/Timers'
import Report from '@/views/Report'
import Settings from '@/views/Settings'
import DefaultName from '@/views/DefaultName'
import DefaultEmail from '@/views/DefaultEmail'
import DataUtilization from '@/views/DataUtilization'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter/:park',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/counter/:park/timers',
    name: 'Timers',
    component: Timers
  },
  {
    path: '/report/:index',
    name: 'Report',
    component: Report
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/settings/defaultname',
    name: 'DefaultName',
    component: DefaultName
  },
  {
    path: '/settings/defaultEmail',
    name: 'DefaultEmail',
    component: DefaultEmail
  },
  {
    path: '/settings/datautilization',
    name: 'DataUtilization',
    component: DataUtilization
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router