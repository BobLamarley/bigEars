// This module is a part of the vuex store and is used to manage the state of the side-menu
const menu = {
  state: {
    isMenuOpen: false
  },
  mutations: {
    openMenu (state) {
      state.isMenuOpen = true
    },
    closeMenu (state) {
      state.isMenuOpen = false
    }
  }
}

export default menu
