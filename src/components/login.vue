<template>
  <div id="app">
   <v-app id="inspire">
     <v-content>
       <v-container fluid fill-height>
         <v-layout align-center justify-center>
           <v-flex xs12 sm8 md4>
             <v-card class="elevation-12">
               <v-toolbar class="bandeauLogin">
                 <v-toolbar-title>Connection à BigEars</v-toolbar-title>
               </v-toolbar>
                 <v-form class="login" @submit.prevent="login">
               <v-card-text>
                 <v-text-field prepend-icon="person" v-model="username" name="Username" label="Login" required></v-text-field>
                 <v-text-field prepend-icon="lock" v-model="password" name="Password" label="Mot de passe" type="password" required></v-text-field>
               </v-card-text>
               <v-card-actions>
                 <v-spacer></v-spacer>
                   <v-btn outline color="indigo" type="submit">Se connecter</v-btn>
                 </v-card-actions>
               </v-form>
             </v-card>
           </v-flex>
         </v-layout>
       </v-container>
     </v-content>
   </v-app>
 </div>
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
    login () {
      const { username, password } = this
      console.log({ username, password })
      this.$store.dispatch('auth/authRequest', { username, password }).then(() => {
        this.$router.push({ name: 'dashboard' })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bandeauLogin{
  background-color: #5677fc;
}
</style>
