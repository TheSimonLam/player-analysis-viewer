<template>
  <div>
    <div class="player-name-container" @click="toggleExpand()">
      <span>{{player.name}}</span>
    </div>
    <div v-if="expanded">

      <div class="blocks">
        <div class="kda-block">
          <div class="kda-title">Avg KDA</div>
          <div class="kda-value">{{Math.round(kda * 100) / 100}}</div>
        </div>

        <div class="info-block-container">

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
            <div class="info-value">{{mostPicked1.key}} - {{mostPicked1.value}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#2 Picked</div>
            <div class="info-value">{{mostPicked2.key}} - {{mostPicked2.value}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#3 Picked</div>
            <div class="info-value">{{mostPicked3.key}} - {{mostPicked3.value}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#4 Picked</div>
            <div class="info-value">{{mostPicked4.key}} - {{mostPicked4.value}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">#5 Picked</div>
            <div class="info-value">{{mostPicked5.key}} - {{mostPicked5.value}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">CS per minute</div>
            <div class="info-value">{{Math.round(csPerMinute * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">CC Dealt</div>
            <div class="info-value">{{Math.round(ccDealt * 100) / 100}}</div>
          </div>

        </div>
      </div>

      <div class="disclaimer">*Based on the last 50 games of Solo Q</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PlayerMatchHistory',
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
        mostPicked1: '',
        mostPicked2: '',
        mostPicked3: '',
        mostPicked4: '',
        mostPicked5: '',
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
        csPerSecond = 0,
        ccDealt = 0;

      for (let match of this.player.matches) {
          kills += match.kda.kills;
          deaths += match.kda.deaths;
          assists += match.kda.assists;
          wardsKilled += match.wardsKilled;
          wardsPlaced += match.wardsPlaced;
          csPerSecond += (match.totalMinionsKilled / (match.gameDuration / 60));
          ccDealt += match.ccDealt;

          if(match.Victory){
              this.wins++;
          }
          else{
              this.losses++;
          }

          if(champTally[match.Champ]){
              champTally[match.Champ]++;
          }
          else{
              champTally[match.Champ] = 1;
          }

          var champRecurrance = [];

          for (var key in champTally) {
              if (champTally.hasOwnProperty(key)) {
                  champRecurrance.push({
                      key: key,
                      value: champTally[key]
                  });
              }
          }
      }

      champRecurrance.sort(function(obj1, obj2) {
          return obj2.value - obj1.value;
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
      this.csPerMinute = csPerSecond / this.matchesLength;
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
    font-size: 2em;
    background: white;
    padding: 10px;
    color: #00215c;
    border-radius: 5px;
  }

  .kda-block{
    text-align: center;
    padding: 10px;
    display: inline-block;
    background: white;
    color: #00215c;
    border-radius: 15px;
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
