<template>
  <div>
    <div class="player-name-container" @click="toggleExpand()">
      <span>{{name}}</span>
    </div>
    <div v-if="expanded">

      <div class="blocks">
        <div class="info-block-container">

          <div class="info-block">
            <div class="info-title">Avg KDA</div>
            <div class="info-value">{{Math.round(avgKda * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">Win/Loss</div>
            <div class="info-value"><span class="win-text">{{wins}}</span> : <span class="loss-text">{{losses}}</span></div>
          </div>

          <div class="info-block">
            <div class="info-title">Avg Kills</div>
            <div class="info-value">{{Math.round(avgKills * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">Avg Deaths</div>
            <div class="info-value">{{Math.round(avgDeaths * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">Avg Assists</div>
            <div class="info-value">{{Math.round(avgAssists * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">Avg Wards Placed</div>
            <div class="info-value">{{Math.round(avgWardsPlaced * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">Avg Wards Killed</div>
            <div class="info-value">{{Math.round(avgWardsKilled * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">Avg CS at 20 mins</div>
            <div class="info-value">{{Math.round(csPerMinAt20 * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">CC Dealt</div>
            <div class="info-value">{{Math.round(ccDealt * 100) / 100}}</div>
          </div>

        </div>
      </div>

      <div class="disclaimer">*Based on the last 20 games of SoloQ of each player on main roster</div>
    </div>
  </div>
</template>

<script>


    export default {
        name: 'TeamOverall',
        props: ['players', 'name'],
        data(){
            return{
                expanded: false,
                playersLength: 0,
                matchesLength: 0,
                avgKda: 0,
                wins: 0,
                losses: 0,
                avgKills: 0,
                avgDeaths: 0,
                avgAssists: 0,
                avgWardsPlaced: 0,
                avgWardsKilled: 0,
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
            this.playersLength = this.players.length;

            for (let player of this.players.slice(0, 5)) {
                this.matchesLength = player.matches.length;

                let kills = 0,
                    deaths = 0,
                    assists = 0,
                    wardsPlaced = 0,
                    wardsKilled = 0,
                    csPerMinAt20 = 0,
                    ccDealt = 0;

                for (let match of player.matches) {
                    kills += match.kda.kills;
                    deaths += match.kda.deaths;
                    assists += match.kda.assists;
                    wardsKilled += match.wardsKilled;
                    wardsPlaced += match.wardsPlaced;
                    csPerMinAt20 += match.csPerMinAt20Mins;
                    ccDealt += match.ccDealt;

                    if(match.victory){
                        this.wins++;
                    }
                    else{
                        this.losses++;
                    }
                }

                this.avgKills += kills / this.matchesLength;
                this.avgDeaths += deaths / this.matchesLength;
                this.avgAssists += assists / this.matchesLength;
                this.avgWardsKilled += wardsKilled / this.matchesLength;
                this.avgWardsPlaced += wardsPlaced / this.matchesLength;
                this.csPerMinAt20 += csPerMinAt20 / this.matchesLength;
                this.ccDealt += ccDealt / this.matchesLength;
            }

            this.avgKills = this.avgKills / this.playersLength;
            this.avgDeaths = this.avgDeaths / this.playersLength;
            this.avgAssists = this.avgAssists / this.playersLength;
            this.avgKda = (this.avgKills + this.avgAssists) / this.avgDeaths;
            this.avgWardsKilled = this.avgWardsKilled / this.playersLength;
            this.avgWardsPlaced = this.avgWardsPlaced / this.playersLength;
            this.mostPicked1 = this.mostPicked1 / this.playersLength;
            this.mostPicked2 = this.mostPicked2 / this.playersLength;
            this.mostPicked3 = this.mostPicked3 / this.playersLength;
            this.mostPicked4 = this.mostPicked4 / this.playersLength;
            this.mostPicked5 = this.mostPicked5 / this.playersLength;
            this.csPerMinAt20 = this.csPerMinAt20 / this.playersLength;
            this.ccDealt = this.ccDealt / this.playersLength;
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
