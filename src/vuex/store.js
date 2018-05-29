import Vuex from 'vuex'
import Vue from 'vue'

import menu from './modules/menu'
import loader from './modules/loader'
import pingBicApi from './modules/apiBic/pingBicApi'
import topics from './modules/apiBigEars/topics'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    menu: menu,
    loader: loader,
    pingBicApi: pingBicApi,
    topics: topics
  },
  strict: debug
})

export default store
