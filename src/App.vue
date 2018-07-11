<template>
  <div id="app">
    <layout>
      <notifications group="newTopic" position="bottom right" :duration="5000" />
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
import layout from '@/components/layout'

export default {
  name: 'App',
  components: {
    layout
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.loading = false
    for (var i = 0; i < this.$store.getters['topics/getNewTopics'].length; i++) {
      this.$notify({
        group: 'newTopic',
        title: this.$store.getters['topics/getNewTopics'][i].topic,
        text: 'Veuillez vous rendre dans la section dictionnaire'
      })
    }
  },
  created () {
    this.$store.dispatch('topics/getNewTopicsSinceTimestampFromApi')
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
/*  color: #2c3e50;
  margin-top: 60px; */
}

</style>
