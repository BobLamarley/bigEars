<template>
  <div class="header">
    <v-container grid-list-xs text-xs-center>
      <v-layout row wrap>
        <v-flex xs1>
          <materialBurger></materialBurger>
        </v-flex>
        <v-flex xs10>
            <router-link to="/home"><img src='../assets/images/bigears.svg' height="60"></router-link>
        </v-flex>
        <v-flex xs1 id="settings">
          <router-link to="/notifications" tag="button"><i class="far fa-bell"></i></router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import materialBurger from './materialBurger.vue'

export default {
  name: 'stickyHeader',
  components: {
    materialBurger
  }
}
</script>

<style>
html {
    color: #222;
    font-size: 1em;
    line-height: 1.4;
}

body{
    font-family: 'Roboto', sans-serif;
}

.header{
    z-index: 2;
    background: #5677fc;
    position: fixed;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0,0,0,.26);
}

.container
{
  padding: 0px;
}

.material-burger{
    float: left;
    margin: 25px;
}

.material-burger span,
.material-burger span:after,
.material-burger span:before{
    background: #FFF;
}

#settings
{
  margin: auto;
}

</style>
