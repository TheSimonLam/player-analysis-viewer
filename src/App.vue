<template>
  <div id="app">
    <router-link to="/">Homepage</router-link>
    <router-link to="/individual-champ">IndividualChamps</router-link>
    <router-link to="/team-champs">TeamChamps</router-link>
    <router-link to="/team-average">TeamAverage</router-link>
    <router-link to="/team-individual-average">TeamIndividualAverage</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
#app{
  font-family: 'Roboto', sans-serif;
}
</style>
