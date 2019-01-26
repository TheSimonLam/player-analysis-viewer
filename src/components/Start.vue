<template>
    <div>
        <div class="title-container">
            <span class="title">Barrage</span>
        </div>

        <div class="player-block" v-for="player in barrageSoloQPlayerData" style="background-color: lightskyblue">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Enclave</span>
        </div>

        <div class="player-block" v-for="player in enclaveSoloQPlayerData" style="background-color: lightseagreen">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">MnM</span>
        </div>

        <div class="player-block" v-for="player in mnmSoloQPlayerData" style="background-color: lightgoldenrodyellow">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Diabolus</span>
        </div>

        <div class="player-block" v-for="player in diabolusSoloQPlayerData" style="background-color: lightcoral">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Phelan</span>
        </div>

        <div class="player-block" v-for="player in phelanSoloQPlayerData" style="background-color: lightsteelblue">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Bulldog</span>
        </div>

        <div class="player-block" v-for="player in bulldogSoloQPlayerData" style="background-color: lightgray">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Fnatic</span>
        </div>

        <div class="player-block" v-for="player in fnaticSoloQPlayerData" style="background-color: lightgoldenrodyellow">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">xL</span>
        </div>

        <div class="player-block" v-for="player in xlSoloQPlayerData" style="background-color: lightsalmon">
            <player-general v-bind:player="player"></player-general>
        </div>

        <div class="title-container">
            <span class="title">Darkspawn</span>
        </div>

        <div class="player-block" v-for="player in darkspawnSoloQPlayerData" style="background-color: lightcyan">
            <player-general v-bind:player="player"></player-general>
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
            <teamOverall v-bind:players="diabolusSoloQPlayerData" name="lightcoral"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightsteelblue">
            <teamOverall v-bind:players="phelanSoloQPlayerData" name="Phelan"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightgray">
            <teamOverall v-bind:players="bulldogSoloQPlayerData" name="Bulldog"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightgoldenrodyellow">
            <teamOverall v-bind:players="fnaticSoloQPlayerData" name="Fnatic"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightsalmon">
            <teamOverall v-bind:players="xlSoloQPlayerData" name="Xl"></teamOverall>
        </div>

        <div class="player-block" style="background-color: lightcyan">
            <teamOverall v-bind:players="darkspawnSoloQPlayerData" name="Darkspawn"></teamOverall>
        </div>
    </div>
</template>

<script>
    import PlayerGeneral from './PlayerGeneral';
    import TeamOverall from './TeamOverall';

    const teamBarrageSoloQ = require("../../teams/soloq-scouting/barrage");
    const teamEnclaveSoloQ = require("../../teams/soloq-scouting/enclave");
    const teamMnmSoloQ = require("../../teams/soloq-scouting/mnm");
    const teamDiablousSoloQ = require("../../teams/soloq-scouting/diabolus");
    const teamPhelanSoloQ = require("../../teams/soloq-scouting/phelan");
    const teamBulldogSoloQ = require("../../teams/soloq-scouting/bulldog");
    const teamFnaticSoloQ = require("../../teams/soloq-scouting/fnatic");
    const teamXlSoloQ = require("../../teams/soloq-scouting/xl");
    const teamDarkspawnSoloQ = require("../../teams/soloq-scouting/darkspawn");

    export default {
        name: 'Start',
        components: {
            PlayerGeneral,
            TeamOverall
        },
        data() {
            return {
                barrageSoloQPlayerData: teamBarrageSoloQ.players,
                enclaveSoloQPlayerData: teamEnclaveSoloQ.players,
                mnmSoloQPlayerData: teamMnmSoloQ.players,
                diabolusSoloQPlayerData: teamDiablousSoloQ.players,
                phelanSoloQPlayerData: teamPhelanSoloQ.players,
                bulldogSoloQPlayerData: teamBulldogSoloQ.players,
                fnaticSoloQPlayerData: teamFnaticSoloQ.players,
                xlSoloQPlayerData: teamXlSoloQ.players,
                darkspawnSoloQPlayerData: teamDarkspawnSoloQ.players
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
