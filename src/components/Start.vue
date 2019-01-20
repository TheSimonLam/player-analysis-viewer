<template>
  <div>
    <div class="title-container">
      <span class="title">Barrage Player Progress</span>
    </div>

    <div class="section">
      <div class="player-block" v-for="player in barragePlayerData">
        <playerMatchHistory v-bind:player="player"></playerMatchHistory>
      </div>
    </div>


    <!--<div v-for="player in barragePlayerData">-->
      <!--<player v-bind:player="player"></player>-->
    <!--</div>-->

    <!--<teamOverall v-bind:team="teamBarrage"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamEnclave"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamFnatic"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamDiabolus"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamDarkspawn"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamMnm"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamXl"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamPhelan"></teamOverall>-->
    <!--<teamOverall v-bind:team="teamBulldog"></teamOverall>-->

  </div>
</template>

<script>

import PlayerMatchHistory from './PlayerMatchHistory';
import Player from './Player';
import TeamOverall from './TeamOverall';
const teamBarrage = require("../../teams/soloq-progress/barrage.json");

export default {
  name: 'Start',
  components: {
      PlayerMatchHistory,
      Player,
      TeamOverall
  },
  data(){
      return{
          barragePlayerData: teamBarrage.players
      }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title{
    font-size: 1.5em;
    font-weight: bold;
  }

  .title-container{
    text-align: center;
    padding: 15px;
  }
  .section{
    background-color: #00215c;
    border-radius: 5px;
    padding: 10px;
  }

  .player-block{
    margin: 10px;
  }
</style>
