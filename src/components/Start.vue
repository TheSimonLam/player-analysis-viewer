<template>
  <div class="player-button-container">
    <div class="player-button" v-for="player in playerData">
      <playerButton v-bind:player="player"></playerButton>
    </div>
  </div>
</template>

<script>

import PlayerButton from './PlayerButton';
import * as playerData from "../../player-data";

export default {
  name: 'Start',
  components: {
      PlayerButton
  },
  data(){
      return{
        playerData: playerData.players,
        selectedPlayer: ''
      }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .player-button-container{
    text-align: center;
  }

  .player-button{
    margin: 10px;
  }

</style>
