<template>
  <div>
    <v-container fluid>
       <v-layout row>
          <v-flex xs3>
          </v-flex>
          <v-flex xs6>
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
              <td><router-link :to="{ name: 'editTopic', params: { id: props.item.id, topicName: props.item.topic, description: props.item.description } }" ><i class="fas fa-edit"></i></router-link></td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Topic edit</span>
              </v-card-title>
              <v-card-text>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
  </div>

</template>
<script>
export default
{
  name: 'dictionnary',
  data () {
    return {
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
          text: 'Action',
          value: 'action'
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
</style>
