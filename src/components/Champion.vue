<template>
  <div>
    <div class="blocks">
      <div class="info-block-container">

        <div class="info-block" style="min-width: 100px;">
          <div class="info-title"> </div>
          <div class="info-value">{{champ.champName}} x {{champ.count}}</div>
        </div>

        <div class="info-block">
          <div class="info-title">Avg KDA</div>
          <div class="info-value">{{kda}}</div>
        </div>

        <div class="info-block">
          <div class="info-title">Win/Loss</div>
          <div class="info-value"><span class="win-text">{{wins}}</span> : <span class="loss-text">{{losses}}</span></div>
        </div>

        <div class="info-block">
          <div class="info-title">Avg Kills</div>
          <div class="info-value">{{avgKills}}</div>
        </div>

        <div class="info-block">
          <div class="info-title">Avg Deaths</div>
          <div class="info-value">{{avgDeaths}}</div>
        </div>

        <div class="info-block">
          <div class="info-title">Avg Assists</div>
          <div class="info-value">{{avgAssists}}</div>
        </div>

        <div class="info-block">
          <div class="info-title">Avg Wards Placed</div>
          <div class="info-value">{{avgWardsPlaced}}</div>
        </div>

        <div class="info-block">
          <div class="info-title">Avg Wards Killed</div>
          <div class="info-value">{{avgWardsKilled}}</div>
        </div>

        <div class="info-block">
          <div class="info-title">Avg CS at 20 mins</div>
          <div class="info-value">{{csPerMinAt20}}</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Champion',
    props: ['champ'],
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
  .blocks{
    text-align: center;
  }

  .info-block-container{
    text-align: center;
  }

  .info-block{
    display: inline-block;
    margin: 5px 1%;
    background: white;
    padding: 5px;
    border-radius: 5px;
  }

  .info-title{
    display: inline-block;
  }

  .info-value{
    font-weight: bold;
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
