<template>
  <v-container grid-list-md>
     <v-layout wrap>
       <v-flex xs4>
      </v-flex>
       <v-flex xs12 sm6 md4>
         <v-text-field ref="id" label="Id mongo du topic" :value="this.$route.params.id" disabled></v-text-field>
         <v-text-field ref="topicName" label="Nom du topic" :value="this.$route.params.topicName"></v-text-field>
         <v-text-field ref="description" label="description du topic" @change="(e) => desc = e" :value="this.$route.params.description" hint="Quels sont les informations stockées dans ce topic ?"></v-text-field>
         <v-text-field ref="addedDate" label="date d'ajout du topic" :value="this.$route.params.addedDate"></v-text-field>
         <v-text-field ref="responsableTopic" label="Responsable du topic" hint="Qui est le RA de ce topic"></v-text-field>
         <v-btn color="blue" flat @click.native="dialog = false"> <router-link to="/home">Retour</router-link></v-btn>
         <v-btn v-on:click="save" color="blue" flat @click.native="dialog = false">Sauvegarder</v-btn>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
export default {
  name: 'editTopic',
  data () {
    return {
      desc: ''
    }
  },
  methods: {
    save: function (event) {
      this.$store.dispatch('topics/setDescriptionFromTopicId', { id: this.$refs.id.value, description: this.desc })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
