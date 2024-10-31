<template>
    <div>
        <h1>Servicios API coches</h1>
        <div v-for="car in coches" :key="car">
            <h2 style="color:blue">{{ car.marca }}   {{ car.modelo }}</h2>
            <p>Conductor: {{ car.conductor }}</p>
            <img :src="car.imagen" style="width: 150px; height: 150px;"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Global from './Global';
export default {
    name: "CochesComponent",
    data ()
    {
        return{
            coches: []
        }
    },
    mounted()
    {
        let request = "webresources/coches";
        //Las variables declaradas por encima de export default no utilizan la palabra this
        let url = Global.urlApiCoches + request;
        axios.get(url).then(Response => {
            console.log("Leyendo servicio");
            this.coches = Response.data;
        })
    }
}
</script>
<style>
</style>