<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    color () {
      return this.$store.getters['color/getColor']
    }
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
