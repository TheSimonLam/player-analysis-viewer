<template>
  <div>
    <div class="button-name" @click="toggleExpand()">{{player.name}}</div>
    <div v-if="expanded">
      <PlayerInfoPanel v-bind:playerInfo="player"></PlayerInfoPanel>
    </div>
  </div>
</template>

<script>

import PlayerInfoPanel from "./PlayerInfoPanel";

export default {
  name: 'PlayerButton',
  components: {
      PlayerInfoPanel
  },
  props: ['player'],
  data(){
      return{
        expanded: false
      }
  },
  methods:{
    toggleExpand: function(){
        this.expanded = !this.expanded
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .button-name{
    color: white;
    padding: 10px;
    background-color: deepskyblue;
  }
</style>
