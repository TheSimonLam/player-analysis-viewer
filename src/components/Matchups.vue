<template>
  <div>
    <div>
      <h3>Enemy ADC's Played Vs Yuumi</h3>
      <div v-for="(enemyAdc, index) in adcsPlayedVsYuumi" v-bind:key=index>
        <div class="label champ-name">Champ: {{index}}</div>
        <div class="label victories">Victories: {{enemyAdc.victories}}</div>
        <div class="label losses">Losses: {{enemyAdc.losses}}</div>
        <div class="label total">Total: {{enemyAdc.count}}</div>
      </div>
    </div>

    <div>
      <h3>Enemy Supports Played Vs Yuumi</h3>
      <div v-for="(enemyAdc, index) in supportsPlayedVsYuumi" v-bind:key=index>
        <div class="label champ-name">Champ: {{index}}</div>
        <div class="label victories">Victories: {{enemyAdc.victories}}</div>
        <div class="label losses">Losses: {{enemyAdc.losses}}</div>
        <div class="label total">Total: {{enemyAdc.count}}</div>
      </div>
    </div>

    <div>
      <h3>Ally ADC's Played with Yuumi</h3>
      <div v-for="(allyAdc, index) in allyAdcsPlayedWithYuumi" v-bind:key=index>
        <div class="label champ-name">Champ: {{index}}</div>
        <div class="label victories">Victories: {{allyAdc.victories}}</div>
        <div class="label losses">Losses: {{allyAdc.losses}}</div>
        <div class="label total">Total: {{allyAdc.count}}</div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'Matchups',
        data(){
            return{
                matches: [
                  {
                    victory: false,
                    adcAlly: "ezreal",
                    adcMatchup: "lucian",
                    supportMatchup: "lux"
                  },
                  {
                    victory: true,
                    adcAlly: "ezreal",
                    adcMatchup: "xayah",
                    supportMatchup: "rakan"
                  },
                  {
                    victory: false,
                    adcAlly: "lucian",
                    adcMatchup: "kalista",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: false,
                    adcAlly: "vayne",
                    adcMatchup: "sivir",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: false,
                    adcAlly: "ezreal",
                    adcMatchup: "varus",
                    supportMatchup: "lux"
                  },
                  {
                    victory: false,
                    adcAlly: "sivir",
                    adcMatchup: "ezreal",
                    supportMatchup: "braum"
                  },
                  {
                    victory: false,
                    adcAlly: "lucian",
                    adcMatchup: "kaisa",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: false,
                    adcAlly: "sivir",
                    adcMatchup: "lucian",
                    supportMatchup: "lux"
                  },
                  {
                    victory: false,
                    adcAlly: "xayah",
                    adcMatchup: "sivir",
                    supportMatchup: "pyke"
                  },
                  {
                    victory: false,
                    adcAlly: "ezreal",
                    adcMatchup: "sivir",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: true,
                    adcAlly: "pyke",
                    adcMatchup: "xayah",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: false,
                    adcAlly: "kaisa",
                    adcMatchup: "xayah",
                    supportMatchup: "lux"
                  },
                  {
                    victory: false,
                    adcAlly: "ezreal",
                    adcMatchup: "xayah",
                    supportMatchup: "rakan"
                  },
                  {
                    victory: false,
                    adcAlly: "sivir",
                    adcMatchup: "xayah",
                    supportMatchup: "rakan"
                  },
                  {
                    victory: false,
                    adcAlly: "ashe",
                    adcMatchup: "sivir",
                    supportMatchup: "lux"
                  },
                  {
                    victory: true,
                    adcAlly: "sivir",
                    adcMatchup: "sona",
                    supportMatchup: "taric"
                  },
                  {
                    victory: false,
                    adcAlly: "sivir",
                    adcMatchup: "sona",
                    supportMatchup: "taric"
                  },
                  {
                    victory: true,
                    adcAlly: "ezreal",
                    adcMatchup: "sivir",
                    supportMatchup: "thresh"
                  },
                  {
                    victory: false,
                    adcAlly: "sivir",
                    adcMatchup: "yasuo",
                    supportMatchup: "gragas"
                  },
                  {
                    victory: false,
                    adcAlly: "sivir",
                    adcMatchup: "jinx",
                    supportMatchup: "thresh"
                  },
                  {
                    victory: true,
                    adcAlly: "lucian",
                    adcMatchup: "sivir",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: true,
                    adcAlly: "lucian",
                    adcMatchup: "sivir",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: false,
                    adcAlly: "ezreal",
                    adcMatchup: "kalista",
                    supportMatchup: "lux"
                  },
                  {
                    victory: false,
                    adcAlly: "ezreal",
                    adcMatchup: "sivir",
                    supportMatchup: "nautilus"
                  },
                  {
                    victory: false,
                    adcAlly: "ezreal",
                    adcMatchup: "xayah",
                    supportMatchup: "rakan"
                  },
                  {
                    victory: false,
                    adcAlly: "vayne",
                    adcMatchup: "viktor",
                    supportMatchup: "pyke"
                  },
                ]
            }
        },
        computed: {
          adcsPlayedVsYuumi: function () {
            let adcsObj = {};

            for(let i=0;i<this.matches.length; i++){
              if(adcsObj[this.matches[i].adcMatchup]){
                adcsObj[this.matches[i].adcMatchup].count += 1;
                if(this.matches[i].victory){
                  adcsObj[this.matches[i].adcMatchup].victories += 1;
                }
                else{
                  adcsObj[this.matches[i].adcMatchup].losses += 1;
                }
              }
              else{
                adcsObj[this.matches[i].adcMatchup] = {victories: 0, losses: 0};
                adcsObj[this.matches[i].adcMatchup].count = 1;
                if(this.matches[i].victory){
                  adcsObj[this.matches[i].adcMatchup].victories = 1;
                }
                else{
                  adcsObj[this.matches[i].adcMatchup].losses = 1;
                }
              }
            }
            return adcsObj;
          },
          supportsPlayedVsYuumi: function () {
            let supportsObj = {};

            for(let i=0;i<this.matches.length; i++){
              if(supportsObj[this.matches[i].supportMatchup]){
                supportsObj[this.matches[i].supportMatchup].count += 1;
                if(this.matches[i].victory){
                  supportsObj[this.matches[i].supportMatchup].victories += 1;
                }
                else{
                  supportsObj[this.matches[i].supportMatchup].losses += 1;
                }
              }
              else{
                supportsObj[this.matches[i].supportMatchup] = {victories: 0, losses: 0};
                supportsObj[this.matches[i].supportMatchup].count = 1;
                if(this.matches[i].victory){
                  supportsObj[this.matches[i].supportMatchup].victories = 1;
                }
                else{
                  supportsObj[this.matches[i].supportMatchup].losses = 1;
                }
              }
            }
            return supportsObj;
          },
          allyAdcsPlayedWithYuumi: function () {
            let adcsObj = {};

            for(let i=0;i<this.matches.length; i++){
              if(adcsObj[this.matches[i].adcAlly]){
                adcsObj[this.matches[i].adcAlly].count += 1;
                if(this.matches[i].victory){
                  adcsObj[this.matches[i].adcAlly].victories += 1;
                }
                else{
                  adcsObj[this.matches[i].adcAlly].losses += 1;
                }
              }
              else{
                adcsObj[this.matches[i].adcAlly] = {victories: 0, losses: 0};
                adcsObj[this.matches[i].adcAlly].count = 1;
                if(this.matches[i].victory){
                  adcsObj[this.matches[i].adcAlly].victories = 1;
                }
                else{
                  adcsObj[this.matches[i].adcAlly].losses = 1;
                }
              }
            }
            return adcsObj;
          },
        },
        methods:{
        },
        created(){
        }
    }
</script>

<style scoped lang="scss">

.label{
    padding: 0 10px;
    display: inline-block;
}

.champ-name{
  font-weight: bold;
}

.victories{
  color: green;
}

.losses{
color: red;
}

.total{
  color: blue;
}
</style>
