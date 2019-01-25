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
            <div class="info-value">{{Math.round(kda * 100) / 100}}</div>
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
            <div class="info-title">CS per minute</div>
            <div class="info-value">{{Math.round(csPerMinute * 100) / 100}}</div>
          </div>

          <div class="info-block">
            <div class="info-title">CC Dealt</div>
            <div class="info-value">{{Math.round(ccDealt * 100) / 100}}</div>
          </div>

        </div>
      </div>

      <div class="disclaimer">*Based on the last 100 games of Solo Q</div>
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
                kda: 0,
                wins: 0,
                losses: 0,
                avgKills: 0,
                avgDeaths: 0,
                avgAssists: 0,
                avgWardsPlaced: 0,
                avgWardsKilled: 0,
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
            this.playersLength = this.players.length;

            for (let player of this.players) {
                this.matchesLength = player.matches.length;

                let kills = 0,
                    deaths = 0,
                    assists = 0,
                    wardsPlaced = 0,
                    wardsKilled = 0,
                    csPerMinute = 0,
                    ccDealt = 0;

                for (let match of player.matches) {
                    kills += match.kda.kills;
                    deaths += match.kda.deaths;
                    assists += match.kda.assists;
                    wardsKilled += match.wardsKilled;
                    wardsPlaced += match.wardsPlaced;
                    csPerMinute += (match.totalMinionsKilled / (match.gameDuration / 60));
                    ccDealt += match.ccDealt;

                    if(match.Victory){
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
                this.kda += (this.avgKills + this.avgAssists) / this.avgDeaths;
                this.csPerMinute += csPerMinute / this.matchesLength;
                this.ccDealt += ccDealt / this.matchesLength;
            }

            this.avgKills = this.avgKills / this.playersLength;
            this.avgDeaths = this.avgDeaths / this.playersLength;
            this.avgAssists = this.avgAssists / this.playersLength;
            this.avgWardsKilled = this.avgWardsKilled / this.playersLength;
            this.avgWardsPlaced = this.avgWardsPlaced / this.playersLength;
            this.kda = this.kda / this.playersLength;
            this.mostPicked1 = this.mostPicked1 / this.playersLength;
            this.mostPicked2 = this.mostPicked2 / this.playersLength;
            this.mostPicked3 = this.mostPicked3 / this.playersLength;
            this.mostPicked4 = this.mostPicked4 / this.playersLength;
            this.mostPicked5 = this.mostPicked5 / this.playersLength;
            this.csPerMinute = this.csPerMinute / this.playersLength;
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
