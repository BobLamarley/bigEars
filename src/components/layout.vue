<template>
  <v-app>
    <loader></loader>
    <v-layout row wrap>
      <v-flex xs12>
        <stickyHeader></stickyHeader>
      </v-flex>
      <v-flex xs12>
        <notifications group="newTopic" position="bottom right" :width=430 :duration="500000000000000" />
        <sideNavMenu></sideNavMenu>
        <!-- no slot needed, we just render all children here (with this layout) -->
        <router-view />
      </v-flex>
    </v-layout>
    <footerPage></footerPage>
  </v-app>
</template>

<script>
import axios from 'axios'
import stickyHeader from './stickyHeader.vue'
import sideNavMenu from './sideNavMenu.vue'
import footerPage from './footerPage.vue'
import loader from './loader.vue'
import axios from 'axios'

export default {
  name: 'layout',
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
  },
  components: {
    stickyHeader,
    sideNavMenu,
    loader,
    footerPage
  },
  mounted () {
    // When mounted, we stop the loader after a second
    setTimeout(() => {
      this.$store.commit('loader/notLoading')
    }, 1000)

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
    // When created, we start the loader
    this.$store.commit('loader/loading')

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
</style>
