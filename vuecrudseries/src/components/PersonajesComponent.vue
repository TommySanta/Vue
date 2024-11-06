<template>
    <div>
        <h1>Personajes de la Serie</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="personajes.length === 0">
                    <td colspan="3">Cargando personajes...</td>
                </tr>
                <tr v-for="personaje in personajes" :key="personaje.idPersonaje">
                    <td>{{ personaje.idPersonaje }}</td>
                    <td>{{ personaje.nombre }}</td>
                    <td>
                        <img :src="personaje.imagen" alt="Imagen de {{ personaje.nombre }}" class="img-thumbnail" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceSeries from './Services/ServicesSeries'; 

const service = new ServiceSeries();

export default {
    name: "PersonajesComponent",
    data() {
        return {
            personajes: [] 
        };
    },
    mounted() {
        this.fetchPersonajes();
    },
    watch: {
        '$route.params.id': function() {
            this.fetchPersonajes(); 
        }
    },
    methods: {
        async fetchPersonajes() {
            const idSerie = this.$route.params.id;
            try {
                this.personajes = await service.getPersonajesBySerieId(idSerie); 
            } catch (error) {
                console.error("Error al cargar los personajes:", error);
            }
        }
    }
}
</script>

<style>
.table {
    margin-top: 20px;
}
.img-thumbnail {
    width: 100px; 
    height: auto; 
}
</style>
