<template>
    <div>
        <h1>
            Propiedad conmutada
        </h1>
        <!-- <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game">
            </li>
        </ul> -->
        <button @click="getJuegosAzules">
            Juegos azules
        </button>
        <div v-html="html"></div>
    </div>
</template>
<script>
export default {
    name: "PropiedadConmutada",
    methods:{
        getJuegosAzules() {
            this.html = "";
            for (var juego of this.juegos){
                this.html +="<h4 style='color:blue'>"+juego+"</h4>"
            }
        }
    },
    computed: {
        // Una propiedad computada siempre devulve valores y no se puede recibir valores
        juegosRojos() {
            var datos = this.juegos
            for(var i = 0; i < datos.length; i++){
                var juego = datos[i];
                juego="<span style='color:red'>"+juego+"</span>"
                datos[i] = juego
            }
            return datos;
        }
    },
    data() {
        return{
            html: "",
            juegos: ["Parchis", "Canicas", "Luz roja", "Luz verde", "La cuerda", "La galleta"]
        }
    }
}
</script>
<style>
    @import './../assets/css/estilos.css';
</style>