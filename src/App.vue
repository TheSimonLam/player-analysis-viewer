<template>
  <div id="app">
    <router-link to="/">Homepage</router-link>
    <router-link to="/anotherpage">Anotherpage</router-link>
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
