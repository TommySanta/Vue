import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivaComponent from "./components/DirectivaComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
import NumeroParImpar from "./components/NumeroParImpar.vue";
import MetodoFilters from "./components/MetodoFilters.vue";


const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/musica", component: MusicaComponent
    },
    {
        path:"/cine", component: CineComponent
    },
    {
        path:"/ciclo", component: CicloVida
    },
    {
        path:"/directiva", component: DirectivaComponent
    },
    {
        path:"/propiedad", component: PropiedadConmutada
    },
    {
        path:"/numeros", component: NumeroParImpar
    },
    {
        path:"/filters", component: MetodoFilters
    }
]

// Creamos una constante para el historial e incluir el array de rutas
// esa constante es la que usaremos para el main.js 

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

// Exportamos la constante routes para ser utilizada
export default router;
