import Vuex from 'vuex'
import Vue from 'vue'

import menu from './modules/menu'
import loader from './modules/loader'
import pingBicApi from './modules/pingBicApi'
import topics from './modules/topics'
import auth from './modules/auth'
import user from './modules/user'
import events from './modules/events'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    menu: menu,
    loader: loader,
    pingBicApi: pingBicApi,
    topics: topics,
    auth: auth,
    user: user,
    events: events
  },
  plugins: [createPersistedState()],
  strict: debug
})

export default store
