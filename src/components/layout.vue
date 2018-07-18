<template>
  <v-app>
    <loader></loader>
    <v-layout row wrap>
      <v-flex xs12>
        <stickyHeader></stickyHeader>
      </v-flex>
      <v-flex xs12>
        <sideNavMenu></sideNavMenu>
        <!-- no slot needed, we just render all children here (with this layout) -->
        <router-view />
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
  name: 'layout',
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
