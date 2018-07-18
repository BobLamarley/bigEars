<template>
  <div id="app">
    <notifications group="newTopic" position="bottom right" :duration="5000" />
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    // When mounted, we stop the loader
    this.loading = false
    // Then we show new topics by notifications
    for (var i = 0; i < this.$store.getters['topics/getNewTopics'].length; i++) {
      this.$notify({
        group: 'newTopic',
        title: this.$store.getters['topics/getNewTopics'][i].topic,
        text: 'Veuillez vous rendre dans la section dictionnaire'
      })
    }
  },
  created () {
    this.$store.dispatch('user/userRequest')
    // We update the store with new topics since the last connection of the user
    this.$store.dispatch('topics/getNewTopicsSinceTimestampFromApi', { timestampOfLastConnection: this.$store.getters['user/getProfile']['lastConnection'] })
    // We control if the user is authorized
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        // if you ever get an unauthorized, logout the user
          this.$store.dispatch('auth/authLogout')
          this.$router.push('login')
        }
        throw err
      })
    })
  }
}
</script>

<style>
#app
{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* Custom scrollbar for Chrome */
::-webkit-scrollbar
{
      width: 8px;
      height: 8px;
      background: transparent;
}
  /* Track */
::-webkit-scrollbar-track
{
      background: transparent;
}

  /* Handle */
::-webkit-scrollbar-thumb
{
      background: #5677fc;
}

  /* Handle on hover */
::-webkit-scrollbar-thumb:hover
{
      background: #5677fc;
}
</style>
