<template>
    <div>
        <h1>Departamentos</h1>
        <img src="../assets/images/Loading.gif" v-if="status == false"/>
        <table v-else class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departamentos" :key="dept">
                    <td>{{ dept.idDepartamento }}</td>
                    <td>{{ dept.nombre }}</td>
                    <td>{{ dept.localidad }}</td>
                    <td>
                        <router-link class="btn btn-warning" :to="'/details/' + dept.idDepartamento + '/' + dept.nombre + '/' + dept.localidad"> Details</router-link>
                    </td>
                    <td>
                        <router-link class="btn btn-warning" :to="'/update/' + dept.idDepartamento "> Update</router-link>
                    </td>
                    <td>
                        <router-link class="btn btn-warning" :to="'/delete/' + dept.idDepartamento "> Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceDepartamentos from './Services/ServiceDepartamentos';

const service = new ServiceDepartamentos();
export default {
    name: "DepartamentosComponent",
    data() {
        return {
            departamentos: [],
            status: false
        }
    },
    mounted() {
        service.getDepartamentos().then(result => {
            this.status = true;
            this.departamentos = result;
        })
    }
}
</script>
<style></style>