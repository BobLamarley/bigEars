<template>
  <div id="app">
    <notifications group="newTopic" position="bottom right" :duration="5000" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
