import axios from 'axios'

const topics = {
  namespaced: true,
  state: {
    topics: [],
    newTopics: []
  },
  getters: {
    getTopics: state => state.topics,
    getNewTopics: state => state.newTopics
  },
  mutations: {
    SET_TOPICS (state, topics) {
      state.topics = topics
    },
    SET_NEWTOPICS (state, newTopics) {
      state.newTopics = newTopics
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
    },
    getNewTopicsSinceTimestampFromApi ({ commit }, { timestampOfLastConnection }) {
      axios
        .get('http://localhost:8080/bigearsapi/api/topics/new/' + timestampOfLastConnection)
        .then(r => r.data)
        .then(newTopics => {
          commit('SET_NEWTOPICS', newTopics)
        })
    },
    setDescriptionFromTopicId ({ commit }, { id, description }) {
      axios
        .put('http://localhost:8080/bigearsapi/api/topics/' + id + '/description',
          {
            description: description
          },
          {
            headers: {
              'content-type': 'application/json',
              'cache-control': 'no-cache'
            }
          }
        )
    }
  }
}

export default topics
