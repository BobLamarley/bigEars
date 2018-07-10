<template>
  <div id="app">
    <v-app id="inspire">
     <v-layout row>
       <v-flex xs12 sm6 offset-sm3>
         <v-card>
           <v-toolbar color="cyan" dark>
            <v-toolbar-title>Notifications</v-toolbar-title>
          </v-toolbar>
           <v-list two-line>
             <template v-for="item in topics">
               <v-list-tile :key="item.id"  >
                 <v-list-tile-content>
                   <v-list-tile-title v-html="item.topic"></v-list-tile-title>
                   <v-list-tile-sub-title v-if="item.uptime" v-html="$options.filters.formatDate(item.uptime)"></v-list-tile-sub-title>
                   <router-link :to="{ name: 'editTopic', params: { id: item.id, topicName: item.topic, description: item.description, uptime: item.uptime } }" ><i class="fas fa-edit"></i></router-link>
                 </v-list-tile-content>
               </v-list-tile>
             </template>
           </v-list>
         </v-card>
       </v-flex>
     </v-layout>
   </v-app>
  </div>
</template>

<script>
export default {
  name: 'notifications',
  computed: {
    topics () {
      return this.$store.getters['topics/getNewTopics']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#inspire
{
  margin-top: 5%;
}
</style>
