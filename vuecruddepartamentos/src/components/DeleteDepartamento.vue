<template>
    <div>
        <h1>Delete</h1>
    </div>
</template>

<script>
import ServiceDepartamentos from "./Services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
    name: "DeleteDepartamento",
    mounted() {
        let id = this.$route.params.id;
        service.deleteDepartamento(id).then((result) => {
            console.log(result);
            this.$router.push("/");
        });
    },
};
</script>

<style></style>