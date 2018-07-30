const color = {
  namespaced: true,
  state: {
    color: ''
  },
  getters: {
    getColor: state => state.color
  },
  mutations: {
    SET_COLOR (state, color) {
      state.color = color
    }
  }
}

export default color
