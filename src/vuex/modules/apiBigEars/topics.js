import axios from 'axios'

const topics = {
  namespaced: true,
  state: {
    topics: []
  },
  getters: {
    getTopics: state => state.topics
  },
  mutations: {
    SET_TOPICS (state, topics) {
      state.topics = topics
    }
  },
  actions: {
    getTopicsFromApi ({ commit }) {
      axios
        .get('http://localhost:8080/bigearsapi/api/topics')
        .then(r => r.data)
        .then(topics => {
          commit('SET_TOPICS', topics)
        })
    }
  }
}

export default topics
