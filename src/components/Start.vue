<template>
  <div>
    <select v-model="selectedPlayer">
      <option value="" disabled hidden>Select Player</option>
      <option v-for="player in players">{{player.name}}</option>
    </select>

  </div>
</template>

<script>
const fs = require('fs');

export default {
  name: 'Start',
  data(){
      return{

      }
  },
  methods:{

  },
  created(){
    //TODO: Get the things somehow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
