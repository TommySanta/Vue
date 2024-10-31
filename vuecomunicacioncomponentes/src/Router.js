import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PadreDeporte from "./components/PadreDeporte.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/deportes", component: PadreDeporte
    },
    {
        path: "/doble/:numero?", component: NumeroDoble
    },
    {
        path: "/tabla/:numero", component: TablaMultiplicar, props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default router;
