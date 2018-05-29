<template>
  <v-container grid-list-md>
     <v-layout wrap>
       <v-flex xs4>
      </v-flex>
       <v-flex xs12 sm6 md4>
         <v-text-field label="Id mongo du topic" :value="this.$route.params.id" disabled></v-text-field>
         <v-text-field label="Nom du topic" :value="this.$route.params.topicName"></v-text-field>
         <v-text-field label="description du topic" :value="this.$route.params.description" hint="Quels sont les informations stockées dans ce topic ?"></v-text-field>
         <v-text-field label="Responsable du topic" hint="Qui est le RA de ce topic"></v-text-field>
         <v-btn color="blue" flat @click.native="dialog = false">Retour</v-btn>
         <v-btn color="blue" flat @click.native="dialog = false">Sauvegarder</v-btn>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
export default {
  name: 'editTopic'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
