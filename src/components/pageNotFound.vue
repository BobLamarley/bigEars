<template>
  <div>
    <img src="../assets/images/404.gif" alt="image animée de page introuvable">
    <a v-on:click="goBackHome">Retour à la civilisation</a>
  </div>
</template>

<script>
export default {
  name: 'pageNotFound',
  methods: {
    goBackHome: function () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
img
{
  margin-top: 12%;
}
</style>
