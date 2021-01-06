import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
  },
  {
    path: '/prodavnica',
    name: 'Prodavnica',
    component: () => import(/* webpackChunkName: "prodavnica" */ '../views/Prodavnica.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path:'/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "success" */ '../views/Success.vue')
  },
  {
    path:'/productdetails/:id',
    name: 'ProductDetails',
    component: () => import(/* webpackChunkName: "productdetails" */ '../views/ProductDetails.vue')
  },
  {
    path:'/successregistration',
    name: 'successRegistration',
    component: () => import(/* webpackChunkName: "successregistration" */ '../views/SuccessRegistration.vue')
  },
  {
    path:'/successlogout',
    name: 'successLogout',
    component: () => import(/* webpackChunkName: "successlogout" */ '../views/SuccessLogout.vue')
  },
  {
    path:'/prodavnicaprodavac',
    name: 'prodavnicaProdavac',
    component: () => import(/* webpackChunkName: "prodavnicaProdavac" */ '../views/ProdavnicaProdavac.vue')
  },
  {
    path:'/successAddProizvod',
    name: 'successAddProizvod',
    component: () => import(/* webpackChunkName: "successAddProizvod" */ '../views/SuccessAddProizvod.vue')
  },
  {
    path:'/successAddToChart',
    name: 'successAddToChart',
    component: () => import(/* webpackChunkName: "successAddChart" */ '../views/SuccessAddToChart.vue')
  },
  {
    path:'/korpa',
    name: 'korpa',
    component: () => import(/* webpackChunkName: "korpa" */ '../views/Korpa.vue')
  },
  {
    path: '/narudzbine',
    name: 'narudzbine',
    component: () => import(/* webpackChunkName: "narudzbine" */ '../views/Narudzbine.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
