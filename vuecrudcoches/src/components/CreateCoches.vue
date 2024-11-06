<template>
    <div>
        <h1>Coches</h1>
        
    </div>
</template>

<script>
import ServiceCoches from './Services/ServicesCoches';



const service = new ServiceCoches();
export default {
    name: "CreateCoches",
    data() {
        return {
            coches: [],
            status: false
        };
    },
    mounted() {
        service.getCoches().then(result => {
            this.status = true;
            this.coches = result;
        });
    }
}
</script>

<style></style>
