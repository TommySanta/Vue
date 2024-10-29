<template>
    <div>
        <h1>
            Ciclo de vida
        </h1>
        <button @click="cambiarSaludo()">
            Cambiar saludo
        </button>
        <h2 style="color: blue;">
            {{ saludo }}
        </h2>
    </div>
</template>
<script>
export default {
    name: "CicloVida",
    data(){
        return{
            saludo: "Hoy es lunes...."
        }
    },
    methods: {
        cambiarSaludo() {
            this.saludo="Y mañana martes......"
        }
    },
    mounted(){
        console.log("Componente mounted")
    },
    unmounted(){
        console.log("Componente unmounted")
    },
    updated(){
        console.log("Componente updated")
    },
    created(){
        console.log("Componente created")
    }
}
</script>
<style>
    @import './../assets/css/estilos.css';
</style>