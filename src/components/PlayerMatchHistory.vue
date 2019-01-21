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
            <div class="info-title">CS per minute</div>
            <div class="info-value">{{Math.round(csPerMinute * 100) / 100}}</div>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <tr>
            <th>Date</th>
            <th>Champ</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Assists</th>
            <th>KDA</th>
            <th>Skill Max</th>
            <th>Victory?</th>
            <th>Enemy Team</th>
          </tr>
          <tr v-for="match in player.matches">
            <td>{{convertDate(match.Date)}}</td>
            <td>{{match.Champ}}</td>
            <td>{{match.kda.kills}}</td>
            <td>{{match.kda.deaths}}</td>
            <td>{{match.kda.assists}}</td>
            <td>{{Math.round((match.kda.kills + match.kda.assists) / match.kda.deaths * 100) / 100}}</td>
            <td>{{match.Max.toString()}}</td>
            <td>{{match.Victory}}</td>
            <td>{{match["Enemy Team"].toString()}}</td>
          </tr>
        </table>
      </div>

      <div class="disclaimer">*Based on the last 20 games of Solo Q</div>
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
        csPerMinute: 0
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
        csPerSecond = 0;

      for (let match of this.player.matches) {
          kills += match.kda.kills;
          deaths += match.kda.deaths;
          assists += match.kda.assists;
          wardsKilled += match.wardsKilled;
          wardsPlaced += match.wardsPlaced;
          csPerSecond += (match.totalMinionsKilled / (match.gameDuration / 60));

          if(match.Victory){
              this.wins++;
          }
          else{
              this.losses++;
          }
      }

      this.avgKills = kills / this.matchesLength;
      this.avgDeaths = deaths / this.matchesLength;
      this.avgAssists = assists / this.matchesLength;
      this.avgWardsKilled = wardsKilled / this.matchesLength;
      this.avgWardsPlaced = wardsPlaced / this.matchesLength;
      this.kda = (this.avgKills + this.avgAssists) / this.avgDeaths;
      this.csPerMinute = csPerSecond / this.matchesLength;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  td {
    padding-top: 5px;
    font-weight: bold;
  }

  td:first-child {
    padding-right:0;
  }

  .table{
    text-align: left;
    width: 100%;
    color: #00215c;
  }

  .table-container{
    background: white;
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;
  }

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
