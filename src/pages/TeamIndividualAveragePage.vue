<template>
    <div>
        <div class="title-container">
            <span class="title">Barrage</span>
        </div>

        <div class="player-block" v-for="(player, index) in barrageSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightskyblue">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Excel</span>
        </div>

        <div class="player-block" v-for="(player, index) in xlSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightsalmon">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Enclave</span>
        </div>

        <div class="player-block" v-for="(player, index) in enclaveSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightseagreen">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">MnM</span>
        </div>

        <div class="player-block" v-for="(player, index) in mnmSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightgoldenrodyellow">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Diabolus</span>
        </div>

        <div class="player-block" v-for="(player, index) in diabolusSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightcoral">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Phelan</span>
        </div>

        <div class="player-block" v-for="(player, index) in phelanSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightsteelblue">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Demise</span>
        </div>

        <div class="player-block" v-for="(player, index) in demiseSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightgray">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Fnatic</span>
        </div>

        <div class="player-block" v-for="(player, index) in fnaticSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightgoldenrodyellow">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Nvision</span>
        </div>

        <div class="player-block" v-for="(player, index) in nvisionSoloQPlayerData" v-bind:key="index+player.name" style="background-color: lightgreen">
            <player-general v-bind:player="player"></player-general>
        </div>
    </div>
</template>

<script>
    import PlayerGeneral from '../components/PlayerGeneral';

    const teamBarrageSoloQ = require("../../teams/soloq-scouting/barrage");
    const teamEnclaveSoloQ = require("../../teams/soloq-scouting/enclave");
    const teamMnmSoloQ = require("../../teams/soloq-scouting/mnm");
    const teamDiablousSoloQ = require("../../teams/soloq-scouting/diabolus");
    const teamPhelanSoloQ = require("../../teams/soloq-scouting/phelan");
    const teamDemiseSoloQ = require("../../teams/soloq-scouting/demise");
    const teamFnaticSoloQ = require("../../teams/soloq-scouting/fnatic");
    const teamXlSoloQ = require("../../teams/soloq-scouting/xl");
    const teamNvisionSoloQ = require("../../teams/soloq-scouting/nvision");

    export default {
        name: 'TeamChampsPage',
        components: {
            PlayerGeneral
        },
        data() {
            return {
                barrageSoloQPlayerData: teamBarrageSoloQ.players,
                enclaveSoloQPlayerData: teamEnclaveSoloQ.players,
                mnmSoloQPlayerData: teamMnmSoloQ.players,
                diabolusSoloQPlayerData: teamDiablousSoloQ.players,
                phelanSoloQPlayerData: teamPhelanSoloQ.players,
                demiseSoloQPlayerData: teamDemiseSoloQ.players,
                fnaticSoloQPlayerData: teamFnaticSoloQ.players,
                xlSoloQPlayerData: teamXlSoloQ.players,
                nvisionSoloQPlayerData: teamNvisionSoloQ.players
                //Use the below to split the player array to get specific role. 0,1 is Top lane
                // nvisionSoloQPlayerData: teamNvisionSoloQ.players.slice(0,1)
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

</style>
