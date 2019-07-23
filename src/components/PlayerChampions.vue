<template>
  <div>
    <div class="player-name-container" @click="toggleExpand()">
      <span>{{player.name}}</span>
    </div>
    <div v-if="expanded">

      <table style="width:100%">
        <tr>
          <th>Champion</th>
          <th>Avg KDA</th>
          <th>Win/Loss</th>
          <th>Avg Kills</th>
          <th>Avg Deaths</th>
          <th>Avg Assists</th>
          <th>Avg Wards Placed</th>
          <th>Avg Wards Killed</th>
          <th>Avg CS at 20 mins</th>
        </tr>
        <template v-for="champ in champions">
          <champion v-bind:champ="champ"></champion>
        </template>
      </table>

      <div class="disclaimer">*Based on the last 30 games of SoloQ</div>
    </div>
  </div>
</template>

<script>

import Champion from "./Champion";

export default {
  name: 'PlayerChampions',
  props: ['player'],
  components: {
      Champion
  },
  data(){
      return{
        expanded: false,
        champions: []
      }
  },
  methods:{
    toggleExpand: function(){
        this.expanded = !this.expanded
    }
  },
  created(){
      for (let match of this.player.matches) {

        // if(new Date(match.date) >= new Date(1563666540*1000)){ //USE THIS TO FILTER BY DATE OR PATCH !
          let champExists = false;

          if(!this.champions.length){
              this.champions.push({
                  champName: match.champ,
                  matches: [match],
                  count: 1
              });
              champExists = true;
          }
          else{
            for (let champion of this.champions) {
                if(champion.champName === match.champ){
                    champion.matches.push(match);
                    champion.count += 1;
                    champExists = true;
                }
            }
          }

          if(!champExists){
              this.champions.push({
                  champName: match.champ,
                  matches: [match],
                  count: 1
              })
          }
        // }
      }

      this.champions.sort(function(a, b){return b.count-a.count});

    //TODO: then sort champion array by count
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
</style>
