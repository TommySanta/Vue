<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Expand at sm</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/detalle">Empleados detalle</router-link>
                        </li><li class="nav-item">
                            <router-link class="nav-link" to="/coches">Coches</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Oficios</a>
                            <ul class="dropdown-menu">
                                <li v-for="ofi in oficios" :key="ofi">
                                    <router-link class="dropdown-item" :to="'/empleadosoficios/' + ofi">{{ ofi }}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import Global from './Global';
import axios from 'axios';
export default {
    name: "MenuComponent",
    data() {
        return {
            oficios: []
        }
    },
    mounted() {
        let request = "api/empleados/oficios";
        let url = Global.urlApiEmpleados + request;
        axios.get(url).then(Response => {
            console.log("Leyendo oficios");
            this.oficios = Response.data;
        })
    }
}
</script>
<style></style>