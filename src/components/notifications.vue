<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                <v-list-tile v-else :key="item.title" avatar>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
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
  data () {
    return {
      items: [
        {
          avatar: 'https://iptc.org/wp-content/uploads/2014/12/diagram-media-topics.png',
          title: 'Un nouveau topic viens d\'arriver',
          subtitle: "<span class='text--primary'>Topics</span> &mdash; Nom du topic"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://iptc.org/wp-content/uploads/2014/12/diagram-media-topics.png',
          title: 'Un nouveau topic viens d\'arriver',
          subtitle: "<span class='text--primary'>Topics</span> &mdash; Nom du topic"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://iptc.org/wp-content/uploads/2014/12/diagram-media-topics.png',
          title: 'Un nouveau topic viens d\'arriver',
          subtitle: "<span class='text--primary'>Topics</span> &mdash; Nom du topic"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://iptc.org/wp-content/uploads/2014/12/diagram-media-topics.png',
          title: 'Un nouveau topic viens d\'arriver',
          subtitle: "<span class='text--primary'>Topics</span> &mdash; Nom du topic"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://iptc.org/wp-content/uploads/2014/12/diagram-media-topics.png',
          title: 'Un nouveau topic viens d\'arriver',
          subtitle: "<span class='text--primary'>Topics</span> &mdash; Nom du topic"
        }
      ]
    }
  },
  methods: {
    openNotification () {

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
