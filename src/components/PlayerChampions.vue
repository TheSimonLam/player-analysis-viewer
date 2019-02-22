<template>
  <div>
    <div class="player-name-container" @click="toggleExpand()">
      <span>{{player.name}}</span>
    </div>
    <div v-if="expanded">

      <div class="player-block" v-for="champ in champions">
        <champion v-bind:champ="champ"></champion>
      </div>

      <div class="disclaimer">*Based on the last 20 games of SoloQ</div>
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
      let champions = {};

      for (let match of this.player.matches) {

          if(!champions[match.champ]){
              champions[match.champ] = {
                  matches: [match]
              };
          }
          else{
              champions[match.champ].matches.push(match);
          }


      }
console.log(champions);
    //TODO: then sort champion array by count
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
