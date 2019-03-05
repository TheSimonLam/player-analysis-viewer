<template>
  <tr>
    <td class="info-value">{{champ.champName}} x {{champ.count}}</td>
    <td class="info-value">{{kda}}</td>
    <td class="info-value"><span class="win-text">{{wins}}</span> : <span class="loss-text">{{losses}}</span></td>
    <td class="info-value">{{avgKills}}</td>
    <td class="info-value">{{avgDeaths}}</td>
    <td class="info-value">{{avgAssists}}</td>
    <td class="info-value">{{avgWardsPlaced}}</td>
    <td class="info-value">{{avgWardsKilled}}</td>
    <td class="info-value">{{csPerMinAt20}}</td>
  </tr>
</template>

<script>


export default {
  name: 'Champion',
    props: ['champ', 'index'],
  data(){
      return{
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
    convertDate: function(timestamp){
        const theDate = new Date(timestamp);
        return theDate.toDateString();
    }
  },
  created(){
    this.matchesLength = this.champ.matches.length;

    let kills = 0,
        deaths = 0,
        assists = 0,
        wardsPlaced = 0,
        wardsKilled = 0,
        csPerMinAt20 = 0,
        kdaDeathsFiniteCalc = 1;

      for (let match of this.champ.matches) {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .win-text{
    color: green;
  }

  .loss-text{
    color: red;
  }
</style>
