<template>
    <div>
        <h1 style="color: brown;">
            Padre
        </h1>
        <h2 style="color: blue;" v-if="favorito">Su deporte fav es: {{ favorito }}</h2>
        <ul v-for="sport in deportes" :key="sport">
 
            <HijoDeporte :nombredeporte="sport"
            v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
        </ul>
    </div>
</template>
<script>
import HijoDeporte from './HijoDeporte.vue';
export default {
    name: "PadreDeporte",
    methods:
    {
        //Creamos un método para que sea llamado desde el hijo
        seleccionarFavoritoParent(deporteFavorito)
        {
            console.log("Yo soy tu padre")
            this.favorito = deporteFavorito;
        }
    },
    components :{
        HijoDeporte
    },
    data ()
    {
        return{
            deportes: ["Baloncesto", "Bolos", "Badminton", "Tenis"],
            favorito: null
        }
    }
}
</script>