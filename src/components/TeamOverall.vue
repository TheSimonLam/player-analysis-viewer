<template>
  <div @click="toggleExpand()">
    <h1>{{player.name}}</h1>
    <div v-if="expanded">{{player}}</div>
  </div>
</template>

<script>


export default {
  name: 'PlayerButton',
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
  },
  created(){
    //TODO: Get the things somehow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
