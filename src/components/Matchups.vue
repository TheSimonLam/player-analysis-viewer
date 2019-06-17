<template>
  <div>
    {{adcsPlayedVsYuumi}}
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
            console.log(adcsObj);
            return adcsObj;
          }
        },
        methods:{
        },
        created(){
        }
    }
</script>

<style scoped lang="scss">

</style>
