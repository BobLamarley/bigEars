import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import settings from '@/components/settings'
import home from '@/components/home'
import corePage from '@/components/corePage'
import pageNotFound from '@/components/pageNotFound'
import dictionnary from '@/components/dictionnary'
import notifications from '@/components/notifications'
import login from '@/components/login'
import editTopic from '@/components/editTopic'
import store from '../vuex/store'

Vue.use(Router)
Vue.use(Vuetify)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

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
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/dashboard',
      name: 'corePage',
      component: corePage
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications
    },
    {
      path: '/editTopic',
      name: 'editTopic',
      component: editTopic
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
