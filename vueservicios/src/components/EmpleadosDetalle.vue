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
import ServiceEmpleados from './ServiceEmpleados';


const service= new ServiceEmpleados();
export default {
    name: "EmpleadosDetalles",
    methods: {
        buscarEmpleado()
        {
            service.findEmpleado(this.idEmpleado).then(result =>{
            this.empleado= result;
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
        service.getEmpleados().then(result=>{
            this.empleados=result
        })
    }
}
</script>
<style>
</style>