// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import notifications from 'vue-notification'
import vuetify from 'vuetify'
import vuetifycss from 'vuetify/dist/vuetify.min.css'
import globalFilters from './services/filters'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(globalFilters, store)
Vue.use(notifications)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  vuetifycss,
  components: { App },
  template: '<App/>'
})

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}
