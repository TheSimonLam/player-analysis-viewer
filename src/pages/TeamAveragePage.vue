<template>
    <div>
        <div class="title-container">
            <span class="title">Team Average Stats</span>
        </div>

        <div class="player-block" style="background-color: lightskyblue">
            <teamOverall v-bind:players="barrageSoloQPlayerData" name="Barrage"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightseagreen">
            <teamOverall v-bind:players="enclaveSoloQPlayerData" name="Enclave"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightgoldenrodyellow">
            <teamOverall v-bind:players="mnmSoloQPlayerData" name="MnM"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightskyblue">
            <teamOverall v-bind:players="diabolusSoloQPlayerData" name="Diabolus"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightsteelblue">
            <teamOverall v-bind:players="phelanSoloQPlayerData" name="Phelan"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightgray">
            <teamOverall v-bind:players="demiseSoloQPlayerData" name="Demise"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightgoldenrodyellow">
            <teamOverall v-bind:players="fnaticSoloQPlayerData" name="Fnatic"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightsalmon">
            <teamOverall v-bind:players="xlSoloQPlayerData" name="xL"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightgreen">
            <teamOverall v-bind:players="nvisionSoloQPlayerData" name="Nvision"></teamOverall>
        </div>
    </div>
</template>

<script>
    import TeamOverall from '../components/TeamOverall';

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
            TeamOverall
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
