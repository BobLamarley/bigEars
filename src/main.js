// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import notifications from 'vue-notification'
import vuetify from 'vuetify'
import vuetifycss from 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(notifications)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  vuetifycss,
  components: { App },
  template: '<App/>',
  mounted: function () {
    this.$notify({
      group: 'newTopic',
      title: 'Nouveau stopic à décrire',
      text: 'Veuillez vous rendre dans la section dictionnaire'
    })
  }
})
