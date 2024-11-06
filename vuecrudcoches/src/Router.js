import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import CreateCoches from "./components/CreateCoches.vue";
import DetailsCoche from "./components/DetailsCoche.vue";
import UpdateCoches from "./components/UpdateCoches.vue";
import DeleteCoches from "./components/DeleteCoches.vue";

const myRoutes = [
    {
        path:"/", component: CochesComponent
    },
    {
        path:"/create", component: CreateCoches
    },
    {
        path:"/details/:id", component: DetailsCoche
    },
    {
        path:"/update/:id", component: UpdateCoches
    },
    {
        path:"/delete/:id", component: DeleteCoches
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
