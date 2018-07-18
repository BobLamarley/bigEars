
<template>
  <div>
   <p>Ceci est la page de présentation de bigEars</p>
   <!-- use named routes -->
   <router-link :to="{ name: 'dashboard' }" tag="button">Dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
</style>
