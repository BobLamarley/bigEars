<template>
  <v-app>
    <loader></loader>
    <v-layout row wrap>
      <v-flex xs12>
        <stickyHeader></stickyHeader>
      </v-flex>
      <v-flex xs12>
        <sideNavMenu></sideNavMenu>
        <slot/>
      </v-flex>
    </v-layout>
    <footerPage></footerPage>
  </v-app>
</template>

<script>
import stickyHeader from './stickyHeader.vue'
import sideNavMenu from './sideNavMenu.vue'
import loader from './loader.vue'
import footerPage from './footerPage.vue'

export default {
  components: {
    stickyHeader,
    sideNavMenu,
    loader,
    footerPage
  }
}
</script>

<style>
</style>
