import apiCall from '../../utils/api'
import Vue from 'vue'

const user = {
  namespaced: true,
  state: {
    status: '',
    profile: {}
  },
  getters: {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name
  },
  actions: {
    userRequest ({commit, dispatch}) {
      commit('USER_REQUEST')
      apiCall({url: 'user/me'})
        .then(resp => {
          commit('USER_SUCCESS', resp)
        })
        .catch(resp => {
          commit('USER_ERROR')
          // if resp is unauthorized, logout, to
          dispatch('auth/authLogout')
        })
    }
  },
  mutations: {
    USER_REQUEST (state) {
      state.status = 'loading'
    },
    USER_SUCCESS (state, resp) {
      state.status = 'success'
      Vue.set(state, 'profile', resp)
    },
    USER_ERROR (state) {
      state.status = 'error'
    },
    AUTH_LOGOUT (state) {
      state.profile = {}
    }
  }
}

export default user
