<template>
  <div class="info-panel-container">
    <table class="table-container">
      <tr>
        <th>Date</th>
        <th>Champ</th>
        <th>VS</th>
        <th v-if="showEnemyTeam" @click="toggleHeading('showEnemyTeam')">Enemy Team</th><th @click="toggleHeading('showEnemyTeam')" v-if="!showEnemyTeam">Click to show</th>
        <th>Ally Team</th>
        <th>Blue Side?</th>
        <th>Item Slot 1</th>
        <th>Item Slot 2</th>
        <th>Item Slot 3</th>
        <th>Item Slot 4</th>
        <th>Item Slot 5</th>
        <th>Item Slot 6</th>
        <th>Build Order</th>
        <th>Mastery 1</th>
        <th>Mastery 2</th>
        <th>Mastery 3</th>
        <th>Mastery 4</th>
        <th>Mastery 5</th>
        <th>Mastery 6</th>
        <th>Skill Order</th>
        <th>Max</th>
        <th>Summ Spell 1</th>
        <th>Summ Spell 2</th>
        <th>Victory?</th>
        <th>Patch</th>
      </tr>
      <tr v-for="match in playerInfo.matches">
        <td>{{match.Date}}</td>
        <td>{{match.Champ}}</td>
        <td>{{match["VS"]}}</td>
        <td>{{match["Enemy Team"]}}</td>
        <td>{{match["Ally Team"]}}</td>
        <td>{{match["Blue Side"]}}</td>
        <td>{{match["Item Slot 1"]}}</td>
        <td>{{match["Item Slot 2"]}}</td>
        <td>{{match["Item Slot 3"]}}</td>
        <td>{{match["Item Slot 4"]}}</td>
        <td>{{match["Item Slot 5"]}}</td>
        <td>{{match["Item Slot 6"]}}</td>
        <td>{{match["Build Order"]}}</td>
        <td>{{match["Mastery 1"]}}</td>
        <td>{{match["Mastery 2"]}}</td>
        <td>{{match["Mastery 3"]}}</td>
        <td>{{match["Mastery 4"]}}</td>
        <td>{{match["Mastery 5"]}}</td>
        <td>{{match["Mastery 6"]}}</td>
        <td>{{match["Skill Order"]}}</td>
        <td>{{match["Max"]}}</td>
        <td>{{match["Summ Spell 1"]}}</td>
        <td>{{match["Summ Spell 2"]}}</td>
        <td>{{match["Victory"]}}</td>
        <td>{{match["Patch"]}}</td>
      </tr>
    </table>
  </div>
</template>

<script>


export default {
  name: 'PlayerInfoPanel',
    props: ['playerInfo'],
  data(){
      return{
        showEnemyTeam: false,
        showAllyTeam: false,
        showSkillOrder: false,
        showBuildOrder: false
      }
  },
  methods:{
    toggleHeading: function(heading){
        console.log(heading);
        this[heading] = !this[heading]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .info-panel-container{

  }

  .table-container{
    text-align: left;
  }

  table, th, td {
    border: 1px solid black;
  }

</style>
