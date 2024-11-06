import { createRouter, createWebHistory } from "vue-router";
import SeriesComponent from "./components/SeriesComponent.vue";
import CreatePersonaje from "./components/CreatePersonaje.vue";
import PersonajesComponent from "./components/PersonajesComponent.vue";
import UpdatePersonaje from "./components/UpdatePersonaje.vue";

const myRoutes = [
    {
        path:"/", component: SeriesComponent
    },
    {
        path:"/:id", component: SeriesComponent
    },
    {
        path:"/create", component: CreatePersonaje
    },
    {
        path:"/personajes/:id", component: PersonajesComponent
    },
    {
        path:"/update/:id", component: UpdatePersonaje
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
