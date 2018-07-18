import axios from 'axios'

const events = {
  namespaced: true,
  state: {
    events: []
  },
  getters: {
    getEvents: state => state.events
  },
  mutations: {
    SET_EVENTS (state, events) {
      state.events = events
    }
  },
  actions: {
    getEventsByTopicName ({ commit }, { topicName }) {
      axios
        .get('http://localhost:8080/bigearsapi/api/events/topic/' + topicName)
        .then(r => r.data)
        .then(events => {
          commit('SET_EVENTS', events)
        })
    }
  }
}

export default events
