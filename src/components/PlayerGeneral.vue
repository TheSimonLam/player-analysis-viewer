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

          <div class="info-block" v-if="mostPicked1">
            <div class="info-title">{{mostPicked1.counter}} x {{mostPicked1.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked1.kda / mostPicked1.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block" v-if="mostPicked2">
            <div class="info-title">{{mostPicked2.counter}} x {{mostPicked2.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked2.kda / mostPicked2.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block" v-if="mostPicked3">
            <div class="info-title">{{mostPicked3.counter}} x {{mostPicked3.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked3.kda / mostPicked3.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block" v-if="mostPicked4">
            <div class="info-title">{{mostPicked4.counter}} x {{mostPicked4.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked4.kda / mostPicked4.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block" v-if="mostPicked5">
            <div class="info-title">{{mostPicked5.counter}} x {{mostPicked5.name}}</div>
            <div class="info-value">KDA {{(Math.round(mostPicked5.kda / mostPicked5.counter * 100) / 100)}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">Avg CS at 20 mins</div>
            <div class="info-value">{{Math.round(csPerMinAt20 * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">CC Dealt</div>
            <div class="info-value">{{Math.floor(ccDealt / 60)}}</div>
          </div>

        </div>
      </div>

      <div class="disclaimer">*Based on the last 20 games of SoloQ</div>
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
        csPerMinAt20: 0,
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
        csPerMinAt20 = 0,
        ccDealt = 0,
        kdaDeathsFiniteCalc = 1;

      for (let match of this.player.matches) {
          kills += match.kda.kills;
          deaths += match.kda.deaths;
          assists += match.kda.assists;
          wardsKilled += match.wardsKilled;
          wardsPlaced += match.wardsPlaced;
          csPerMinAt20 += match.csPerMinAt20Mins;
          ccDealt += match.ccDealt;
          kdaDeathsFiniteCalc = match.kda.deaths === 0 ? 1 : match.kda.deaths;

          if(match.victory){
              this.wins++;
          }
          else{
              this.losses++;
          }

          if(champTally[match.champ]) {
              champTally[match.champ].counter++;
              champTally[match.champ].kda += (match.kda.kills + match.kda.assists) / kdaDeathsFiniteCalc;
          }
          else{
              champTally[match.champ] = {};
              champTally[match.champ].counter = 1;
              champTally[match.champ].kda = (match.kda.kills + match.kda.assists) / kdaDeathsFiniteCalc;
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
      this.kda = (this.avgKills + this.avgAssists) / this.avgDeaths;
      this.avgWardsKilled = wardsKilled / this.matchesLength;
      this.avgWardsPlaced = wardsPlaced / this.matchesLength;
      this.mostPicked1 = champRecurrance[0];
      this.mostPicked2 = champRecurrance[1];
      this.mostPicked3 = champRecurrance[2];
      this.mostPicked4 = champRecurrance[3];
      this.mostPicked5 = champRecurrance[4];
      this.csPerMinAt20 = csPerMinAt20 / this.matchesLength;
      this.ccDealt = ccDealt / this.matchesLength;

      //To calculate NinjaScore
      // console.log(this.player.name + " " + (this.kda + this.avgWardsPlaced + this.csPerMinAt20 + this.avgWardsKilled));

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
