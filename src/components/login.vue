<template>
  <v-container fluid>
   <v-layout row>
     <v-flex xs4>
     </v-flex>
     <v-flex xs4>
        <div class="login">
        <h1>Login</h1>
        <form method="post">
          <v-text-field id="username" name="input-1" label="Identifiant"></v-text-field>
          <v-text-field id="password" name="input-1" label="Mot de passe"></v-text-field>
          <v-btn outline color="indigo">Se connecter</v-btn>
        </form>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
