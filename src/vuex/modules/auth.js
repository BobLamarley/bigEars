import apiCall from '../../utils/api'
import axios from 'axios'
// This module is used to manage authentication state
const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('user-token') || '',
    status: ''
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },
  actions: {
    authRequest ({commit, dispatch}, user) {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit('AUTH_REQUEST')
        apiCall({ url: 'auth', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.token // resp.data.token si pas en mock
            localStorage.setItem('user-token', token) // store the token in localstorage
            axios.defaults.headers.common['Authorization'] = token
            commit('AUTH_SUCCESS', token)
            // if we get the token, we can log in the user :)
            resolve(resp)
          })
          .catch(err => {
            commit('AUTH_ERROR', err)
            localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
            reject(err)
          })
      })
    },
    authLogout ({commit, dispatch}) {
      return new Promise((resolve, reject) => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('user-token') // clear your user's token from localstorage
        // remove the axios default header
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  mutations: {
    AUTH_REQUEST (state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS (state, token) {
      state.status = 'success'
      state.token = token
    },
    AUTH_ERROR (state) {
      state.status = 'error'
    },
    AUTH_LOGOUT (state) {
      state.token = ''
    }
  }
}

export default auth
