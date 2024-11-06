<template>
    <div>
        <h1>Detalles del Coche</h1>
        <ul class="list-group" v-if="coche">
            <li class="list-group-item">
                <strong>ID:</strong> {{ coche.idCoche }}
            </li>
            <li class="list-group-item">
                <strong>Marca:</strong> {{ coche.marca }}
            </li>
            <li class="list-group-item">
                <strong>Modelo:</strong> {{ coche.modelo }}
            </li>
            <li class="list-group-item">
                <strong>Conductor:</strong> {{ coche.conductor }}
            </li>
            <li class="list-group-item">
                <strong>Imagen:</strong> 
                <img :src="coche.imagen" alt="Imagen del coche" class="img-fluid" />
            </li>
        </ul>
        <p v-else>Cargando detalles del coche...</p>
    </div>
</template>

<script>
import ServiceCoches from "./Services/ServicesCoches";

const service = new ServiceCoches();
export default {
    name: "DetailsCoche",
    data() {
        return {
            coche: null,  // Aquí se almacenará el coche encontrado
            status: false,
            id: 0
        }
    },
    mounted() {
        this.id = this.$route.params.id
        service.findCoches(this.id)
            .then(data => {
                this.coche = data; 
                this.status = true;
            })
    }
}
</script>

<style>
.img-fluid {
    max-width: 100%;
    height: auto;
}
</style>
