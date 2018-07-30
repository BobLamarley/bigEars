<template>
  <div id="footer">
    <v-footer height="auto" class="white--text" v-bind:style="{ background: color }">
          <v-layout row wrap>
            <v-flex xs12>
              &copy;2018 — <strong>Alpha</strong>
            </v-flex>
          </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'footerPage',
  computed: {
    color () {
      return this.$store.getters['color/getColor']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color
{
  background: #5677fc;
}

#footer
{
  z-index: 1;
  position: relative;
  width: 101%;
}
</style>
