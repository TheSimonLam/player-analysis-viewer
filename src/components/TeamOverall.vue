<template>
  <div>
    <div class="player-name-container" @click="toggleExpand()">
      <span>{{name}}</span>
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
          <td>{{avgKda}}</td>
          <td><span class="win-text">{{wins}}</span> : <span class="loss-text">{{losses}}</span></td>
          <td>{{avgKills}}</td>
          <td>{{avgDeaths}}</td>
          <td>{{avgAssists}}</td>
          <td>{{avgWardsPlaced}}</td>
          <td>{{avgWardsKilled}}</td>
          <td>{{csPerMinAt20}}</td>
        </tr>
      </table>

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
            this.playersLength = this.players.length;

            for (let player of this.players.slice(0, 5)) {
                this.matchesLength = player.matches.length;

                let kills = 0,
                    deaths = 0,
                    assists = 0,
                    wardsPlaced = 0,
                    wardsKilled = 0,
                    csPerMinAt20 = 0

                for (let match of player.matches) {
                    kills += match.kda.kills;
                    deaths += match.kda.deaths;
                    assists += match.kda.assists;
                    wardsKilled += match.wardsKilled;
                    wardsPlaced += match.wardsPlaced;
                    csPerMinAt20 += match.csPerMinAt20Mins;

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
            }

            this.avgKills = Math.round(this.avgKills / this.playersLength * 100) / 100;
            this.avgDeaths = Math.round(this.avgDeaths / this.playersLength * 100) / 100;
            this.avgAssists = Math.round(this.avgAssists / this.playersLength * 100) / 100;
            this.avgKda = Math.round((this.avgKills + this.avgAssists) / this.avgDeaths * 100) / 100;
            this.avgWardsKilled = Math.round(this.avgWardsKilled / this.playersLength * 100) / 100;
            this.avgWardsPlaced = Math.round(this.avgWardsPlaced / this.playersLength * 100) / 100;
            this.mostPicked1 = Math.round(this.mostPicked1 / this.playersLength * 100) / 100;
            this.mostPicked2 = Math.round(this.mostPicked2 / this.playersLength * 100) / 100;
            this.mostPicked3 = Math.round(this.mostPicked3 / this.playersLength * 100) / 100;
            this.mostPicked4 = Math.round(this.mostPicked4 / this.playersLength * 100) / 100;
            this.mostPicked5 = Math.round(this.mostPicked5 / this.playersLength * 100) / 100;
            this.csPerMinAt20 = Math.round(this.csPerMinAt20 / this.playersLength * 100) / 100;

            //To calculate NinjaScore
            // console.log(this.name + " " + (this.avgKda + this.avgWardsPlaced + this.csPerMinAt20 + this.avgWardsKilled));
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
