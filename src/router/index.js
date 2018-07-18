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
import events from '@/components/events'
import plainLayout from '@/components/plainLayout'
import layout from '@/components/layout'
import dashboard from '@/components/dashboard'
import store from '../vuex/store'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  mode: 'history',
  // basic layout
  routes: [
    {
      // change this so we use the plain layout for home/login pages
      path: '/',
      component: plainLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        }
      ]
    },
    {
      // change this so we use the fancy layout for NON home/login pages
      path: '/',
      component: layout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'corePage',
          name: 'corePgae',
          component: corePage
        },
        {
          path: 'events',
          name: 'events',
          component: events
        },
        {
          path: 'settings',
          name: 'settings',
          component: settings
        },
        {
          path: 'dictionnary',
          name: 'dictionnary',
          component: dictionnary
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: notifications
        },
        {
          path: 'editTopic',
          name: 'editTopic',
          component: editTopic
        }
      ]
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: pageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  // tweak this to allow 'home' page to be viewed regardless of login state
  if (!store.getters['auth/isAuthenticated'] && !['login'].includes(to.name)) {
    next({ name: 'login' })
  } else if (store.getters['auth/isAuthenticated'] && (to.name === 'login' || to.path === '/')) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
