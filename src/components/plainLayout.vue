<template>
  <v-app>
    <v-layout row wrap>
      <v-flex xs12>
        <!-- render all children here, using this 'plain' layout -->
        <router-view />
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'plain-layout'
}
</script>

<style>
</style>
