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
                            <router-link class="nav-link active" aria-current="page" to="/create">Nuevo Personaje</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/update">Modificar Personaje</router-link>
                        </li>
                        <li class="nav-item">
                            <select v-model="selectedSeries" @change="navigateToSeries" class="form-select">
                                <option disabled value="">Selecciona una serie</option>
                                <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">
                                    {{ serie.nombre }}
                                </option>
                            </select>
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
import ServiceCoches from './Services/ServicesSeries';

const service = new ServiceCoches();
export default {
    name: "MenuComponent",
    data() {
        return {
            series: [], 
            selectedSeries: '' 
        };
    },
    created() {
        this.fetchSeries();
    },
    methods: {
        async fetchSeries() {
            try {
                this.series = await service.getSeries();
            } catch (error) {
                console.error("Error al obtener las series:", error);
            }
        },
        navigateToSeries() {
            if (this.selectedSeries) {
                this.$router.push(`/${this.selectedSeries}`); // Navega a la página de la serie seleccionada
            }
        }
    }
}
</script>

<style>
</style>
