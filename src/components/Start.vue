<template>
    <div>
        <div class="title-container">
            <span class="title">Barrage Player Progress</span>
        </div>

        <div class="section">
            <div class="player-block" v-for="player in barrageMatchHistoryPlayerData">
                <playerMatchHistory v-bind:player="player"></playerMatchHistory>
            </div>
        </div>

        <div class="title-container">
            <span class="title">Other Player's Stats</span>
        </div>

        <div class="title-container">
            <span class="title">Barrage</span>
        </div>

        <div class="section">
            <div class="player-block" v-for="player in barrageSoloQPlayerData">
                <player-general v-bind:player="player"></player-general>
            </div>
        </div>

        <div class="title-container">
            <span class="title">Enclave</span>
        </div>

        <div class="section">
            <div class="player-block" v-for="player in enclaveSoloQPlayerData">
                <player-general v-bind:player="player"></player-general>
            </div>
        </div>

        <div class="title-container">
            <span class="title">MnM</span>
        </div>

        <div class="section">
            <div class="player-block" v-for="player in mnmSoloQPlayerData">
                <player-general v-bind:player="player"></player-general>
            </div>
        </div>

        <div class="title-container">
            <span class="title">Diabolus</span>
        </div>

        <div class="section">
            <div class="player-block" v-for="player in diabolusSoloQPlayerData">
                <player-general v-bind:player="player"></player-general>
            </div>
        </div>

        <div class="title-container">
            <span class="title">Team Average Stats</span>
        </div>

        <div class="section">
            <div class="player-block">
                <teamOverall v-bind:players="barrageSoloQPlayerData" name="Barrage"></teamOverall>
            </div>
        </div>

        <div class="section">
            <div class="player-block">
                <teamOverall v-bind:players="enclaveSoloQPlayerData" name="Enclave"></teamOverall>
            </div>
        </div>

        <div class="section">
            <div class="player-block">
                <teamOverall v-bind:players="mnmSoloQPlayerData" name="MnM"></teamOverall>
            </div>
        </div>

        <div class="section">
            <div class="player-block">
                <teamOverall v-bind:players="diabolusSoloQPlayerData" name="Diabolus"></teamOverall>
            </div>
        </div>

        <!--<teamOverall v-bind:team="teamEnclave"></teamOverall>-->
        <!--<teamOverall v-bind:team="teamFnatic"></teamOverall>-->
        <!--<teamOverall v-bind:team="teamDiabolus"></teamOverall>-->
        <!--<teamOverall v-bind:team="teamDarkspawn"></teamOverall>-->
        <!--<teamOverall v-bind:team="teamMnm"></teamOverall>-->
        <!--<teamOverall v-bind:team="teamXl"></teamOverall>-->
        <!--<teamOverall v-bind:team="teamPhelan"></teamOverall>-->
        <!--<teamOverall v-bind:team="teamBulldog"></teamOverall>-->

    </div>
</template>

<script>

    import PlayerMatchHistory from './PlayerMatchHistory';
    import PlayerGeneral from './PlayerGeneral';
    import TeamOverall from './TeamOverall';

    const teamBarrageMatchHistory = require("../../teams/soloq-progress/barrage.json");
    const teamBarrageSoloQ = require("../../teams/soloq-scouting/barrage");
    const teamEnclaveSoloQ = require("../../teams/soloq-scouting/enclave");
    const teamMnmSoloQ = require("../../teams/soloq-scouting/mnm");
    const teamDiablousSoloQ = require("../../teams/soloq-scouting/diabolus");

    export default {
        name: 'Start',
        components: {
            PlayerMatchHistory,
            PlayerGeneral,
            TeamOverall
        },
        data() {
            return {
                barrageMatchHistoryPlayerData: teamBarrageMatchHistory.players,
                barrageSoloQPlayerData: teamBarrageSoloQ.players,
                enclaveSoloQPlayerData: teamEnclaveSoloQ.players,
                mnmSoloQPlayerData: teamMnmSoloQ.players,
                diabolusSoloQPlayerData: teamDiablousSoloQ.players
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

    .section {
        background-color: #00215c;
        border-radius: 5px;
    }

    .player-block {

    }
</style>
