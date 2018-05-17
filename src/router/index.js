import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import settings from '@/components/settings'
import home from '@/components/home'
import corePage from '@/components/corePage'
import pageNotFound from '@/components/pageNotFound'
import dictionnary from '@/components/dictionnary'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/pageNotFound',
      name: 'pageNotFound',
      component: pageNotFound
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/dictionnary',
      name: 'dictionnary',
      component: dictionnary
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/dashboard',
      name: 'corePage',
      component: corePage
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
