<template>
    <div>
        <h1> Update Departamento</h1>
        <form v-if="departamento" v-on:submit.prevent="updateDepartamento()">
            <input type="hidden" v-model="departamento.idDepartamento"/>
            <label>Nombre</label>
            <input type="text" v-model="departamento.nombre" class="from-control"/>
            <label>Localidad</label>
            <input type="text" v-model="departamento.localidad" class="from-control"/>
            <button class="btn btn-warning"> Update</button>

        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from './Services/ServiceDepartamentos';


const service = new ServiceDepartamentos();
export default {
    name: "UpdateDepartamento",
    data() {
        return {
            departamento: null,
            status: false
        }
    },
    mounted() {
        let id = this.$route.params.id
        service.findDepartamento(id).then(result=>{
            this.departamento = result;
        })
    },
    methods: {
        updateDepartamento(){
            service.updateDepartamento(this.departamento).then(result => {
                console.log(result);
                this.$router.push("/");
            })
        }
    }
}
</script>
<style></style>