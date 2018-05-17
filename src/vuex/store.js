import Vuex from 'vuex'
import Vue from 'vue'

import menu from './modules/menu'
import loader from './modules/loader'
import crypto from './modules/crypto'
import pingBicApi from './modules/pingBicApi'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    menu: menu,
    loader: loader,
    crypto: crypto,
    pingBicApi: pingBicApi
  },
  strict: debug
})

export default store
