<template>
    <div>
        <h1>
            Directiva
        </h1>
        <h1>
            {{ $data }}
        </h1>
        <label>Introduzca número</label>
        <input type="number" v-model="numero"/>
        <h2 v-if="numero > 0" style="color: green;">
            Positivo
        </h2>
        <h2 v-else-if="numero < 0" style="color: red;">
            Negativo
        </h2>
        <h2 v-else style="color: dark;">
            Cero
        </h2>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{ serie }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "DirectivaComponent",
    data() {
        return{
            series: ["Futurama","Suits","The Boys", "Stranger Things"],
            numero: 0,
            nombre: "Alumno",
            edad: 25
        }
    }
}
</script>
<style>
    @import './../assets/css/estilos.css';
</style>