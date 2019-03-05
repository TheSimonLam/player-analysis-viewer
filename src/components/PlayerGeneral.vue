<template>
  <div>
    <div class="player-name-container" @click="toggleExpand()">
      <span>{{player.name}}</span>
    </div>
    <div v-if="expanded">

      <table style="width:100%">
        <tr>
          <th>Avg KDA</th>
          <th>Win/Loss</th>
          <th>Avg Kills</th>
          <th>Avg Deaths</th>
          <th>Avg Assists</th>
          <th>Avg Wards Placed</th>
          <th>Avg Wards Killed</th>
          <th>Avg CS at 20 mins</th>
        </tr>
        <tr>
          <td>{{kda}}</td>
          <td><span class="win-text">{{wins}}</span> : <span class="loss-text">{{losses}}</span></td>
          <td>{{avgKills}}</td>
          <td>{{avgDeaths}}</td>
          <td>{{avgAssists}}</td>
          <td>{{avgWardsPlaced}}</td>
          <td>{{avgWardsKilled}}</td>
          <td>{{csPerMinAt20}}</td>
        </tr>
      </table>

      <div class="disclaimer">*Based on the last 30 games of SoloQ</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PlayerGeneral',
    props: ['player'],
  data(){
      return{
        expanded: false,
        matchesLength: 0,
        kda: 0,
        wins: 0,
        losses: 0,
        avgKills: 0,
        avgDeaths: 0,
        avgAssists: 0,
        avgWardsPlaced: 0,
        avgWardsKilled: 0,
        csPerMinAt20: 0
      }
  },
  methods:{
    toggleExpand: function(){
        this.expanded = !this.expanded
    },
    convertDate: function(timestamp){
        const theDate = new Date(timestamp);
        return theDate.toDateString();
    }
  },
  created(){
    this.matchesLength = this.player.matches.length;

    let kills = 0,
        deaths = 0,
        assists = 0,
        wardsPlaced = 0,
        wardsKilled = 0,
        csPerMinAt20 = 0,
        kdaDeathsFiniteCalc = 1;

      for (let match of this.player.matches) {
          kills += match.kda.kills;
          deaths += match.kda.deaths;
          assists += match.kda.assists;
          wardsKilled += match.wardsKilled;
          wardsPlaced += match.wardsPlaced;
          csPerMinAt20 += match.csPerMinAt20Mins;
          kdaDeathsFiniteCalc = match.kda.deaths === 0 ? 1 : match.kda.deaths;

          if(match.victory){
              this.wins++;
          }
          else{
              this.losses++;
          }
      }

      this.avgKills = Math.round(kills / this.matchesLength * 100) / 100;
      this.avgDeaths = Math.round(deaths / this.matchesLength * 100) / 100;
      this.avgAssists = Math.round(assists / this.matchesLength * 100) / 100;
      this.kda = Math.round((this.avgKills + this.avgAssists) / this.avgDeaths * 100) / 100;
      this.avgWardsKilled = Math.round(wardsKilled / this.matchesLength * 100) / 100;
      this.avgWardsPlaced = Math.round(wardsPlaced / this.matchesLength * 100) / 100;
      this.csPerMinAt20 = Math.round(csPerMinAt20 / this.matchesLength * 100) / 100;

      //To calculate NinjaScore
      // console.log(this.player.name + " " + (this.kda + this.avgWardsPlaced + this.csPerMinAt20 + this.avgWardsKilled));

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  th{
    text-align: left;
  }

  .player-name-container{
    text-align: center;
    padding: 5px;
  }

  .disclaimer{
    padding: 5px;
    font-size: 0.7em;
  }

  .win-text{
    color: green;
  }

  .loss-text{
    color: red;
  }
</style>
