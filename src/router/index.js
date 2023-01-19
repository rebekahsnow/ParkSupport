import Vue from 'vue'
import VueRouter from 'vue-router'

import Activate from '@/views/Activate'
import AppleWallet from '@/views/AppleWallet'
import Contact from '@/views/Contact'
import Home from '@/views/Home'
import Online from '@/views/Online'
import OpenEvey from '@/views/OpenEvey'
import Pdf from '@/views/Pdf'
import Receipt from '@/views/Receipt'
import Scan from '@/views/Scan'
import UseEvey from '@/views/UseEvey'
import Wifi from '@/views/Wifi'
import Card from '@/views/Card'
import PPrinter from '@/views/PPrinter'
import SPrinter from '@/views/SPrinter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/activate',
    name: 'Activate',
    component: Activate
  },
  {
    path: '/applewallet',
    name: 'AppleWallet',
    component: AppleWallet
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/online',
    name: 'Online',
    component: Online
  },
  {
    path: '/openevey',
    name: 'OpenEvey',
    component: OpenEvey
  },
  {
    path: '/pdf',
    name: 'Pdf',
    component: Pdf
  },
  {
    path: '/receipt',
    name: 'Receipt',
    component: Receipt
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan
  },
  {
    path: '/useevey',
    name: 'UseEvey',
    component: UseEvey
  },
  {
    path: '/wifi',
    name: 'Wifi',
    component: Wifi
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/pprinter',
    name: 'PPrinter',
    component: PPrinter
  },
  {
    path: '/sprinter',
    name: 'SPrinter',
    component: SPrinter
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router