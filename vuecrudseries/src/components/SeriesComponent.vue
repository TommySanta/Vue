<template>
    <div>
        <h1>Detalles de la Serie</h1>
        <div v-if="serie">
            <div class="card" style="width: 18rem;">
                <img :src="serie.imagen" class="card-img-top" alt="Imagen de la serie">
                <div class="card-body">
                    <h5 class="card-title">{{ serie.nombre }}</h5>
                    <p class="card-text">Puntuación: {{ serie.puntuacion }}</p>
                    <button class="btn btn-primary" @click="navigateToPersonajes">Ver Personajes</button>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script>
import ServiceSeries from './Services/ServicesSeries'; 

const service = new ServiceSeries();

export default {
    name: "SeriesComponent",
    data() {
        return {
            serie: null // Almacena los detalles de la serie
        };
    },
    watch: {

        '$route.params.id': function() {
            this.wachNavigate();
        }
    },
    mounted() {
        let idSerie= null;
        if(!this.$route.params.id){
            idSerie =1;
        }else{
            idSerie = this.$route.params.id;
        }
        service.getSerieById(idSerie).then(result => {
            this.serie = result; 
        }).catch(error => {
            console.error("Error al cargar la serie:", error);
        });
    },
    methods: {
        navigateToPersonajes() {
            let idSerie= null;
            if(!this.$route.params.id){
                idSerie =1;
            }else{
                idSerie = this.$route.params.id;
            }
            this.$router.push(`/personajes/${idSerie}`);
        },
        wachNavigate(){
            let idSerie= null;
            if(!this.$route.params.id){
                idSerie =1;
            }else{
                idSerie = this.$route.params.id;
            } 
            service.getSerieById(idSerie).then(result => {
                this.serie = result; 
            }).catch(error => {
                console.error("Error al cargar la serie:", error);
            });
        }
    }
}
</script>

<style>
.card {
    margin-top: 20px;
}
</style>
