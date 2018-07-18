<template>
  <div class="header">
    <v-container grid-list-xs text-xs-center>
      <v-layout row wrap>
        <v-flex v-if="isAuthenticated" xs1>
          <materialBurger></materialBurger>
        </v-flex>
        <v-flex xs10>
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
        <v-flex v-if="isAuthenticated" xs1 id="settings">
          <router-link :to="{ name: 'notifications' }" tag="button"><i class="far fa-bell"></i></router-link>
          <form class="logout" @submit.prevent="logout">
            <v-btn type="submit"><i class="fas fa-sign-out-alt"></i></v-btn>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import materialBurger from './materialBurger.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'stickyHeader',
  components: {
    materialBurger
  },
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated'
    ])
  },
  methods: {
    logout: function () {
      this.$store.commit('menu/closeMenu')
      this.$store.dispatch('auth/authLogout')
        .then(() => {
          this.$router.push({ name: 'login' })
        })
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
