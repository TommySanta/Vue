import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import PadreDeportes from './components/PadreDeporte.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

const myRoutes = [
    {
        path: "/", 
        component: HomeComponent 
    },
    {
        path: "/numerodoble/:numero?", 
        component: NumeroDoble 
    },
    {
        path: "/deportes/:id?", 
        component: PadreDeportes 
    },
    {
        path: "/tablamultiplicar/:numero", 
        component: TablaMultiplicar 
    }
];

const router = createRouter({
    history: createWebHistory(),  
    routes: myRoutes 
});

export default router;
