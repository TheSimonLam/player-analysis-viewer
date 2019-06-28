import VueRouter from "vue-router";
import Homepage from "./pages/Homepage";
import AnotherPage from "./pages/AnotherPage";

export default
[
    { path: '/', component: Homepage },
    { path: '/anotherpage', component: AnotherPage }
];