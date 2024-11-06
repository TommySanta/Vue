<template>
    <div>
        <h1>Eliminar Coche</h1>
        <p>El coche ha sido eliminado con éxito.</p>
    </div>
</template>

<script>
import ServiceCoches from "./Services/ServicesCoches";
const service = new ServiceCoches();

export default {
    name: "DeleteCoche",
    mounted() {
        let id = this.$route.params.id;
        service.deleteCoches(id).then((result) => {
            console.log(result);
            this.$router.push("/");
        }).catch((error) => {
            console.error("Error al eliminar coche:", error);
            alert("Hubo un error al eliminar el coche.");
        });
    },
};
</script>

<style>
</style>
