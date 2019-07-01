import VueRouter from "vue-router";
import Homepage from "./pages/Homepage";
import IndividualChampPage from "./pages/IndividualChampPage";
import TeamChampsPage from "./pages/TeamChampsPage";
import TeamAveragePage from "./pages/TeamAveragePage";
import TeamIndividualAveragePage from "./pages/TeamIndividualAveragePage";

export default
[
    { path: '/', component: Homepage },
    { path: '/individual-champ', component: IndividualChampPage },
    { path: '/team-champs', component: TeamChampsPage },
    { path: '/team-average', component: TeamAveragePage },
    { path: '/team-individual-average', component: TeamIndividualAveragePage }
];