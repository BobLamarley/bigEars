<template>
  <div>
    lamaaaa
    {{ ping.msg }}
  </div>
</template>

<script>
export default {
  name: 'corePage',
  created () {
    this.$store.dispatch('pingBicApi/pingBicApi')
  },
  // be able to get the data
  computed: {
    ping () {
      return this.$store.getters['pingBicApi/getPing']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
