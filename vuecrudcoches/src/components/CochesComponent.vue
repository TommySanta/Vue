<template>
    <div>
        <h1>Coches</h1>
        <img src="../assets/images/Loading.gif" v-if="status == false" />
        <table v-else class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coche in coches" :key="coche.idCoche">
                    <td>{{ coche.idCoche }}</td>
                    <td>{{ coche.marca }}</td>
                    <td>{{ coche.modelo }}</td>
                    <td>{{ coche.conductor }}</td>
                    <td>
                        <img :src="coche.imagen" alt="Imagen del coche" width="100" />
                    </td>
                    <td>
                        <router-link class="btn btn-warning" :to="'/details/' + coche.idCoche">Details</router-link>
                        <router-link class="btn btn-warning" :to="'/update/' + coche.idCoche">Update</router-link>
                        <router-link class="btn btn-warning" :to="'/delete/' + coche.idCoche">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceCoches from './Services/ServicesCoches';



const service = new ServiceCoches();
export default {
    name: "CochesComponent",
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
