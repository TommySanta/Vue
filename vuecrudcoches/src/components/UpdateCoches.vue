<template>
    <div>
        <h1>Actualizar Coche</h1>
        <form v-if="coche" @submit.prevent="updateCoche()">
            <input type="hidden" v-model="coche.idCoche" />
            <div class="form-group">
                <label>Marca</label>
                <input type="text" v-model="coche.marca" class="form-control" />
            </div>
            <div class="form-group">
                <label>Modelo</label>
                <input type="text" v-model="coche.modelo" class="form-control" />
            </div>
            <div class="form-group">
                <label>Conductor</label>
                <input type="text" v-model="coche.conductor" class="form-control" />
            </div>
            <div class="form-group">
                <label>Imagen</label>
                <input type="text" v-model="coche.imagen" class="form-control" />
            </div>
            <button class="btn btn-warning">Actualizar</button>
        </form>
        <p v-else>Cargando detalles del coche...</p>
    </div>
</template>

<script>
import ServiceCoches from "./Services/ServicesCoches";

const service = new ServiceCoches();

export default {
    name: "UpdateCoche",
    data() {
        return {
            coche: null,
            status: false
        };
    },
    mounted() {
        const id = this.$route.params.id;
        service.findCoches(id).then(result => {
            this.coche = result;
        });
    },
    methods: {
        updateCoche() {
            service.updateCoches(this.coche).then(() => {
                console.log("Coche actualizado.");
                this.$router.push("/"); // Redirige a la página de inicio
            }).catch(error => {
                console.error("Error al actualizar coche:", error);
                alert("Hubo un error al actualizar el coche.");
            });
        }
    }
};
</script>

<style scoped>
.form-group {
    margin-bottom: 15px;
}
</style>
