<template>
    <div>
        <h1>
            Home Componente
        </h1>
        <h2>{{ mensaje }}</h2>
    </div>
</template>
<script>
import ServicesEjemplo from './ServicesEjemplo';

const service= new ServicesEjemplo();
export default {
    name: "HomeComponent",
    mounted(){
        this.mensaje= service.getSaludo("Alumno");
    },
    data(){
        return{
            mensaje: ""
        }
    }
}
</script>

<style>
</style>
