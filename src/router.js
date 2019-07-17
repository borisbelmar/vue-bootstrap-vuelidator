import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import(/* webpackChunkName: "nosotros" */ './views/Nosotros.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "grid" */ './views/Grid.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import(/* webpackChunkName: "grid" */ './views/Cards.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import(/* webpackChunkName: "grid" */ './views/Form.vue')
    },
    {
      path: '/vuelidate',
      name: 'vuelidate',
      component: () => import(/* webpackChunkName: "grid" */ './views/Vuelidate.vue')
    }
  ]
})
