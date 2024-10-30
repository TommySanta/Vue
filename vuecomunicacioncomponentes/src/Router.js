import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PadreDeporte from "./components/PadreDeporte.vue";
import NumeroDoble from "./components/NumeroDoble.vue";

const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/deportes", component: PadreDeporte
    },
    {
        path:"/doble/:numero?", component: NumeroDoble
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
