<template>
    <div>
        <h1>Departamento</h1>
        <p>{{ mensaje }}</p>
    </div>
    <form v-on:submit.prevent="insertDepartamento()">
        <label>Id departamento</label>
        <input type="number" v-model="departamento.idDepartamento" class="form-control"/>
        <label>Nombre</label>
        <input type="text" v-model="departamento.nombre" class="form-control"/>
        <label>Localidad</label>
        <input type="text" v-model="departamento.localidad" class="form-control"/>
        <button class="btn btn-info">Create</button>
    </form>
</template>

<script>
import ServiceDepartamentos from './Services/ServiceDepartamentos';



const service = new ServiceDepartamentos();
export default {
    name: "CreateDepartamento",
    data() {
        return {
            mensaje: "",
            departamento: {
                idDepartamento: 0,
                nombre: "",
                localidad: ""
            }
        }
    },
    methods: {
        insertDepartamento(){
            service.insertDepartamento(this.departamento).then(result => {
                this.mensaje = "Insertado correctamente " + result;
            })
        }
    }
}
</script>
<style></style>