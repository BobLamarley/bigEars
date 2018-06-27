<template>
  <div id="app" Vuebar>
    <layout>
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

/* width */
::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #5677fc;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #5677fc;
}
html{
  overflow: hidden;
}
</style>
