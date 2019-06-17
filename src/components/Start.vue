<template>
    <div>
        <Matchups></Matchups>

        <div class="title-container">
            <span class="title">Barrage Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in barrageSoloQPlayerData" v-bind:key="index+player.name+1" style="background-color: lightskyblue">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">Enclave Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in enclaveSoloQPlayerData" v-bind:key="index+player.name+2" style="background-color: lightseagreen">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">MnM Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in mnmSoloQPlayerData" v-bind:key="index+player.name+3" style="background-color: lightgoldenrodyellow">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">Diabolus Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in diabolusSoloQPlayerData" v-bind:key="index+player.name+4" style="background-color: lightcoral">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">Phelan Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in phelanSoloQPlayerData" v-bind:key="index+player.name+5" style="background-color: lightsteelblue">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">Demise Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in demiseSoloQPlayerData" v-bind:key="index+player.name+6" style="background-color: lightgray">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">Fnatic Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in fnaticSoloQPlayerData" v-bind:key="index+player.name+7" style="background-color: lightgoldenrodyellow">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">xL Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in xlSoloQPlayerData" v-bind:key="index+player.name+8" style="background-color: lightsalmon">
            <player-champions v-bind:player="player"></player-champions>
        </div>

        <div class="title-container">
            <span class="title">Nvision Champion Stats</span>
        </div>

        <div class="player-block" v-for="(player, index) in nvisionSoloQPlayerData" v-bind:key="index+player.name+9" style="background-color: lightgreen">
            <player-champions v-bind:player="player"></player-champions>
        </div>

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
    import PlayerGeneral from './PlayerGeneral';
    import PlayerChampions from './PlayerChampions';
    import TeamOverall from './TeamOverall';
    import Matchups from './Matchups';

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
        name: 'Start',
        components: {
            PlayerGeneral,
            PlayerChampions,
            TeamOverall,
            Matchups
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
    .title {
        font-weight: bold;
    }

    .title-container {
        text-align: center;
        padding: 5px;
    }

    .player-block {
        border-radius: 10px;
        margin: 5px;
    }
</style>
