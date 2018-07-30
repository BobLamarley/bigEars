<template>
  <div class="header" v-bind:style="{ background: color }">
    <v-container grid-list-xs text-xs-center>
      <v-layout row wrap  v-if="isAuthenticated">
        <v-flex xs2>
          <materialBurger></materialBurger>
        </v-flex>
        <v-flex xs7>
          <v-layout row wrap>
            <v-flex xs4>
            </v-flex>
            <v-flex xs4>
              <router-link :to="{ name: 'home' }"><img src='../assets/images/bigears.svg' height="60"></router-link>
            </v-flex>
            <v-flex xs4>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3 class="settings" >
          <v-layout row wrap>
            <v-flex xs2 offset-xs6>
              <router-link :to="{ name: 'notifications' }" tag="button"><i class="far fa-bell"></i></router-link>
            </v-flex>
            <v-flex xs2 offset-xs2>
              <div class="text-xs-center">
                   <v-menu offset-y>
                     <v-avatar slot="activator">
                       <img :src="this.$store.getters['user/getProfile']['imageProfile']" alt="profile image"/>
                     </v-avatar>
                     <v-list>
                       <v-list-tile class="cliquable">
                         <v-list-tile-title v-on:click="openSettings">Mes paramètres</v-list-tile-title>
                       </v-list-tile>
                       <v-list-tile class="cliquable">
                         <v-list-tile-title v-on:click="logout">Déconnexion</v-list-tile-title>
                       </v-list-tile>
                     </v-list>
                   </v-menu>
                 </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<!--
<v-flex xs4 offset-xs1>
  <form class="logout" @submit.prevent="logout">
    <v-btn type="submit">Deconnexion</v-btn>
  </form>
</v-flex>
-->
<script>
import materialBurger from './materialBurger.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'stickyHeader',
  components: {
    materialBurger
  },
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  }),
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated'
    ]),
    color () {
      return this.$store.getters['color/getColor']
    }
  },
  methods: {
    logout: function () {
      this.$store.commit('menu/closeMenu')
      this.$store.dispatch('auth/authLogout')
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    },
    openSettings: function () {
      this.$router.push({ name: 'settings' })
    }
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
    width: 101%;
    z-index: 2;
    background: #5677fc;
    position: fixed;
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

.settings
{
  margin: auto;
}

.far{
  padding-top: 18px;
}

.cliquable
{
  cursor: pointer;
}

.cliquable:hover
{
  background-color: #a5a4a5;
}
</style>
