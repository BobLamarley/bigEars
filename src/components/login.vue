<template>
  <v-container fluid>
   <v-layout row>
     <v-flex xs4>
     </v-flex>
     <v-flex xs4>
        <div>
          <h1>Login</h1>
          <form class="login" @submit.prevent="login">
            <v-text-field required v-model="username" type="text" label="Login"></v-text-field>
            <v-text-field required v-model="password" type="text" label="Mot de passe"></v-text-field>
            <v-btn outline color="indigo" type="submit">Se connecter</v-btn>
          </form>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const { username, password } = this
      console.log({ username, password })
      this.$store.dispatch('auth/authRequest', { username, password }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
