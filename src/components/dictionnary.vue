<template>
  <div>
    <v-container fluid>
       <v-layout row>
          <v-flex xs3>
          </v-flex>
          <v-flex xs6>
            <div class="autocomplete">
              <autocomplete :suggestions="topics" v-model="selection">
              </autocomplete>
            </div>
           <v-data-table :headers="headers" :items="topics" class="elevation-1">
             <template slot="headerCell" slot-scope="props">
              <v-tooltip bottom>
                <span slot="activator">
                  {{ props.header.text }}
                </span>
                <span>
                  {{ props.header.text }}
                </span>
                <span>
                  {{ props.header.text }}
                </span>
              </v-tooltip>
            </template>
            <template slot="items" slot-scope="props">
              <td>{{ props.item.topic }}</td>
              <td class="text-xs-right">{{ props.item.description }}</td>
              <td><router-link :to="{ name: 'editTopic', params: { id: props.item.id, topicName: props.item.topic, description: props.item.description, uptime: props.item.uptime } }" ><i class="fas fa-edit"></i></router-link></td>
              <td><router-link :to="{ name: 'events', params: { topicName: props.item.topic } }" ><i class="fas fa-edit"></i></router-link></td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>

import autocomplete from './autocomplete.vue'

export default
{
  name: 'dictionnary',
  components: {
    autocomplete
  },
  data () {
    return {
      selection: '',
      headers: [
        {
          text: 'Nom du topic Kafka',
          value: 'topicKafkaName'
        },
        {
          text: 'Topic description',
          value: 'topicDescription'
        },
        {
          text: 'Editer le topic',
          value: 'edit'
        },
        {
          text: 'Afficher les evenements',
          value: 'showEvents'
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('topics/getTopicsFromApi')
  },
  // be able to get the data
  computed: {
    topics () {
      return this.$store.getters['topics/getTopics']
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.autocomplete
{
  padding-bottom: 250px;
}
</style>
