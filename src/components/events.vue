<template>
  <div>
    <v-container fluid>
       <v-layout row>
          <v-flex xs3>
          </v-flex>
          <v-flex xs6 class="events">
           <div v-if="isLoading">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
           </div>
           <v-data-table :headers="headers" :items="events" class="elevation-1" v-else>
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
            <loader></loader>

            <template slot="items" slot-scope="props">
              <td>{{ props.item.environment }}</td>
              <td class="text-xs-right">{{ props.item.codeBoite }}</td>
              <td class="text-xs-right">{{ props.item.nomApplication }}</td>
              <td class="text-xs-right">{{ props.item.numeroPersonne }}</td>
              <td class="text-xs-right">{{ props.item.body }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default
{
  name: 'dictionnary',
  data () {
    return {
      selection: '',
      isLoading: false,
      headers: [
        {
          text: 'Event',
          value: 'topicKafkaName'
        },
        {
          text: 'Topic',
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
    this.isLoading = true
    setTimeout(() => {
      this.$store.dispatch('events/getEventsByTopicName', { topicName: this.$route.params.topicName })
        .then(() => (this.isLoading = false))
    }, 1000)
  },
  // be able to get the data
  computed: {
    events () {
      return this.$store.getters['events/getEvents']
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.events{
  margin-top: 10%;
}
</style>
