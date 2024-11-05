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
import ServiceCoches from './ServiceCoches';

const service= new ServiceCoches();
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
        service.getCoches.then(result =>{
            this.coches= result;
        })
        
    }
}
</script>
<style>
</style>