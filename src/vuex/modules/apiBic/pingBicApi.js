import axios from 'axios'

const pingBicApi = {
  namespaced: true,
  state: {
    msg: {},
    error: ''
  },
  getters: {
    getPing: state => state.msg
  },
  mutations: {
    SET_BIC (state, msg) {
      state.msg = msg
    },
    SET_ERROR (state, error) {
      state.error = error
    }
  },
  actions: {
    pingBicApi ({ commit }) {
      axios
        .post('http://api-sandbox.rec.s.arkea.com:8080/bicapi/InteractionsService/ping')
        .then(r => r.data)
        .then(msg => {
          commit('SET_BIC', msg)
        })
        .catch(function (error) {
          commit('SET_ERROR', error)
        })
    }
  }
}

export default pingBicApi
