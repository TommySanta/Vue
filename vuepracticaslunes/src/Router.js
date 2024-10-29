import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/collatz", component: CollatzComponent
    },
    {
        path:"/tabla", component: TablaMultiplicar
    },
    
]

// Creamos una constante para el historial e incluir el array de rutas
// esa constante es la que usaremos para el main.js 

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

// Exportamos la constante routes para ser utilizada
export default router;
