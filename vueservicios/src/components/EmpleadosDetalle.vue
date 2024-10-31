<template>
    <div>
        <h1>Empleados</h1>
        <form v-on:submit.prevent="buscarEmpleado()">
            <label>Seleccione empleado: </label>
            <select class="form-control" v-model="idEmpleado">
                <option v-for="empleado in empleados" :key="empleado" :value="empleado.idEmpleado">
                    {{empleado.apellido}}
                </option>
            </select>
            <button class="btn btn-info">
                Detalles del empleado
            </button>
        </form>
        <div v-if="empleado">
            <dl>
                <dt>Oficio:</dt>
                <dl>{{ empleado.oficio }}</dl>
                <dt>Salario:</dt>
                <dl>{{ empleado.salario }}</dl>
                <dt>Departamento:</dt>
                <dl>{{ empleado.departamento }}</dl>
            </dl>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Global from './Global';
export default {
    name: "EmpleadosDetalles",
    methods: {
        buscarEmpleado()
        {
            let request = "api/empleados/" + this.idEmpleado;
            let url = Global.urlApiEmpleados + request;
            axios.get(url).then(Response => {
                console.log("Detalles");
                this.empleado = Response.data;
            })
        }
    },
    data() {
        return {
            empleados: [],
            idEmpleado: 0,
            empleado: null
        }
    },
    mounted() {
        let request = "api/empleados";
        let url = Global.urlApiEmpleados + request;
        axios.get(url).then(Response => {
            console.log("Recuperandooo")
            this.empleados = Response.data;
        })
    }
}
</script>
<style>
</style>