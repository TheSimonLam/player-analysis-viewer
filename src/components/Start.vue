<template>
  <div>
    <div class="title-container">
      <span class="title">Barrage Player Progress</span>
    </div>

    <div class="section">
      <div class="player-block" v-for="player in barrageMatchHistoryPlayerData">
        <playerMatchHistory v-bind:player="player"></playerMatchHistory>
      </div>
    </div>

    <div class="title-container">
      <span class="title">Other Player's Stats</span>
    </div>

    <div class="section">
      <div class="player-block" v-for="player in barrageSoloQPlayerData">
        <player-general v-bind:player="player"></player-general>
      </div>
    </div>

    <div class="title-container">
      <span class="title">Team Average Stats</span>
    </div>

    <div class="section">
      <div class="player-block">
        <teamOverall v-bind:players="barrageSoloQPlayerData" name="Barrage"></teamOverall>
      </div>
    </div>

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
import PlayerGeneral from './PlayerGeneral';
import TeamOverall from './TeamOverall';
const teamBarrageMatchHistory = require("../../teams/soloq-progress/barrage.json");
const teamBarrageSoloQ = require("../../teams/soloq-scouting/barrage");

export default {
  name: 'Start',
  components: {
      PlayerMatchHistory,
      PlayerGeneral,
      TeamOverall
  },
  data(){
      return{
          barrageMatchHistoryPlayerData: teamBarrageMatchHistory.players,
          barrageSoloQPlayerData: teamBarrageSoloQ.players
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
