import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/customers", component: CustomersComponent
    },
    {
        path:"/coches", component: CochesComponent
    },
    {
        path:"/detalle", component: EmpleadosDetalle
    },
    {
        path:"/empleadosoficios/:oficio", component: EmpleadosOficios
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
