<template>
  <div>
    <div class="player-name-container" @click="toggleExpand()">
      <span>{{player.name}}</span>
    </div>
    <div v-if="expanded">

      <div class="blocks">
        <div class="info-block-container">

          <div class="info-block">
            <div class="info-title">Avg KDA</div>
            <div class="info-value">{{Math.round(kda * 100) / 100}}</div>
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
            <div class="info-title">#1 Picked</div>
            <div class="info-value">{{mostPicked1.counter}} x {{mostPicked1.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked1.kda / mostPicked1.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#2 Picked</div>
            <div class="info-value">{{mostPicked2.counter}} x {{mostPicked2.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked2.kda / mostPicked2.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#3 Picked</div>
            <div class="info-value">{{mostPicked3.counter}} x {{mostPicked3.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked3.kda / mostPicked3.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#4 Picked</div>
            <div class="info-value">{{mostPicked4.counter}} x {{mostPicked4.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked4.kda / mostPicked4.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#5 Picked</div>
            <div class="info-value">{{mostPicked5.counter}} x {{mostPicked5.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked5.kda / mostPicked5.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">CS per minute</div>
            <div class="info-value">{{Math.round(csPerMinute * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">CC Dealt</div>
            <div class="info-value">{{Math.floor(ccDealt / 60)}}</div>
          </div>

        </div>
      </div>

      <div class="disclaimer">*Based on the last 100 games of Solo Q</div>
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
        mostPicked1: {},
        mostPicked2: {},
        mostPicked3: {},
        mostPicked4: {},
        mostPicked5: {},
        csPerMinute: 0,
        ccDealt: 0
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
        champTally = {},
        csPerMinute = 0,
        ccDealt = 0,
        kdaDeathsFiniteCalc = 1;

      for (let match of this.player.matches) {
          kills += match.kda.kills;
          deaths += match.kda.deaths;
          assists += match.kda.assists;
          wardsKilled += match.wardsKilled;
          wardsPlaced += match.wardsPlaced;
          csPerMinute += (match.totalMinionsKilled / (match.gameDuration / 60));
          ccDealt += match.ccDealt;
          kdaDeathsFiniteCalc = match.kda.deaths === 0 ? 1 : match.kda.deaths;

          if(match.Victory){
              this.wins++;
          }
          else{
              this.losses++;
          }

          if(champTally[match.Champ]) {
              champTally[match.Champ].counter++;
              champTally[match.Champ].kda += (match.kda.kills + match.kda.assists) / kdaDeathsFiniteCalc;
          }
          else{
              champTally[match.Champ] = {};
              champTally[match.Champ].counter = 1;
              champTally[match.Champ].kda = (match.kda.kills + match.kda.assists) / kdaDeathsFiniteCalc;
          }

          var champRecurrance = [];

          for (var key in champTally) {
              if (champTally.hasOwnProperty(key)) {
                  champRecurrance.push({
                      name: key,
                      counter: champTally[key].counter,
                      kda: champTally[key].kda
                  });
              }
          }
      }

      champRecurrance.sort(function(obj1, obj2) {
          return obj2.counter - obj1.counter;
      });

      this.avgKills = kills / this.matchesLength;
      this.avgDeaths = deaths / this.matchesLength;
      this.avgAssists = assists / this.matchesLength;
      this.avgWardsKilled = wardsKilled / this.matchesLength;
      this.avgWardsPlaced = wardsPlaced / this.matchesLength;
      this.kda = (this.avgKills + this.avgAssists) / this.avgDeaths;
      this.mostPicked1 = champRecurrance[0];
      this.mostPicked2 = champRecurrance[1];
      this.mostPicked3 = champRecurrance[2];
      this.mostPicked4 = champRecurrance[3];
      this.mostPicked5 = champRecurrance[4];
      this.csPerMinute = csPerMinute / this.matchesLength;
      this.ccDealt = ccDealt / this.matchesLength;
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
    margin: 10px 1%;
    background: white;
    color: #00215c;
    padding: 10px;
    border-radius: 10px;
  }

  .info-title{
    display: inline-block;
    font-size: 1.3em;
  }

  .info-value{
    font-weight: bold;
  }

  .player-name-container{
    text-align: center;
    background: white;
    padding: 5px;
    color: #00215c;
  }

  .kda-block{
    text-align: center;
    padding: 10px;
    display: inline-block;
    background: white;
    color: #00215c;
    border-radius: 5px;
    font-size: 1.5em;
    font-weight: bold;
    margin: 20px;
  }

  .kda-title{
    display: inline-block;
  }

  .kda-value{

  }

  .disclaimer{
    color: white;
    padding: 20px;
  }

  .win-text{
    color: green;
  }

  .loss-text{
    color: red;
  }
</style>
